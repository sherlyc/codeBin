'use strict';

const React             = require('react');
const PropTypes         = require('prop-types');
const Helmet            = require('react-helmet');
const debounce          = require('debounce');
const iframeScaler      = require('../../util/iframeScaler');
const ForEach           = require('../../services/polyfills/forEach');
const Events            = require('../../services/events/events');

// supporting scripts that will be needed on the main page
const scriptArray = [];

module.exports = ComponentFactory.smart({
  name: 'htmlAsset',

  css: require('./htmlAsset.scss'),

  events: {
    // fires when app scrolls.
    'app:scroll': function(event) { this._postMessage(event); },
    'app:orientation' : function(event) { this._onOrientationChange(event); }
  },

  // A list of patterns and attendent messages that we need to
  // postMessage to on a scoll event.
  embedsToMessage: [
    {
      pattern: /(https?\:)?\/\/stuff\.liveblog[^'"]*/,
      message: 'loadMore',
      iframes: [],
    }
  ],

  Content: function() {
    let p = this.props;
    // attach the embed code's html (only if trusted)
    let html = p.embedCode.html;

    // If it is not trusted, attach an iframe instead.
    // This iframe is populated in componentDidMount.
    if (p.embedCode.status !== 'trusted') {
      html = `<iframe
        style="border: 0; overflow: hidden;"
        id="html-asset__${p.assetId}"
        name="${p.assetId}"
        width="100%"
        scrolling="yes"
      ></iframe>`;
    }

    return <div>
      <div dangerouslySetInnerHTML={{__html: html}} />
      <Helmet
        script={scriptArray}
      />
    </div>;
  },

  componentWillMount() {
    let p = this.props;

    if (BUILD_CONFIG.bundleType !== 'server' && p.embedCode.status == 'trusted') {
      // Detect any iframes in the htmlAsset that need to be messaged on scroll
      let matched = 0;
      const html = p.embedCode.html;
      this.embedsToMessage
        .forEach((rule) => {
          if (rule.pattern.test(html)) {
            matched++;
          }
        });

      if (matched) {
        // We presume that we'll be using iframeResizer to coordinate the
        // resizing of the iframe.
        // iframeResizer must be also implemented inside the iframe,
        // as it is for liveblog.
        scriptArray.push({
          type: 'text/javascript',
          src: APP_CONFIG.embeds.iframeResizerSource, // see runtine.config.js
        });
      }
    }
  },

  componentWillUnmount() {
    // be sure to clear the iframe intervals if they exist
    if (this.resizeInterval) clearInterval(this.resizeInterval);

    if (this.iframeResizerInterval) clearInterval(this.iframeResizerInterval);
  },

  componentDidMount() {
    let p = this.props;
    let s = this.state;
    console.log(p.embedCode.status);

    // if this not running serverside, and an untrusted embed code
    // TODO this does not run in test because jsdom(?) gives us iframe.contentWindow = null
    if (BUILD_CONFIG.bundleType !== 'server' && p.embedCode.status !== 'trusted') {
      // find the iframe added by this.Content element
      let iframe = this.element.querySelector(`#html-asset__${p.assetId}`);
      let doc = iframe.contentWindow.document;
      doc.open();

      // and write the embeded html into the iframe
      let scripts = p.embedCode.scripts;
      // only add legacy scripts for opta scoreboard in blacklist
      if(p.embedCode.status == 'blacklist') {

        scripts.concat ([
          {
            type: 'text/javascript',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js',
          },
          {
            type: 'text/javascript',
            src: 'https://unpkg.com/blankshield@0.6.1/blankshield.min.js',
          },
          {
            type: 'text/javascript',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.13/moment-timezone.min.js',
          },
          {
            type: 'text/javascript',
            src: 'https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.13/moment-timezone-with-data-2012-2022.min.js',
          },
        ]);
      }

      // load the scripts one by one inside the iframe (prevent race conditions)
      addScripts(iframe.contentWindow, scripts)
      .then(() => {
        // Resize iframe if needed. Hacky but necessary.
        let resizeCalls = 20; // number of times to check for iframe resize
        this.resizeInterval = setInterval(() => {
          // stop after certain number of checks
          if (resizeCalls-- <= 0) {
            iframe.contentDocument.close();
            return clearInterval(this.resizeInterval);
          }

          if(doc.body.scrollHeight) {
            iframe.style.height = doc.body.scrollHeight + 'px';
          }
        }, 500);
      });

      // Report that we've seen an untrusted embed to sentry so we can be informed
      // of new embed uses.
      const error = new Error(`Untrusted emebed detected: ${s.html}`);

      Events.emit('error:sentry', {
        error,
        extra: {
          source: 'sics:htmlAsset.componentDidMount'
        }
      });
    }

    if (BUILD_CONFIG.bundleType !== 'server' && p.embedCode.status == 'trusted') {
      const matched = this._messageEmbeds();

      if (!matched) {
        this.setState({ scaleModifier: iframeScaler.scale(this.element) });
      }
    }
  },

  getInitialState: function() {
    let p = this.props;
    let html = p.embedCode.html;
    //not trusted
    if (!p.embedCode.status == 'trusted') {
      html = `
        <html>
          <head>
          </head>
          <body>
            ${html}
          </body>
        </html>
      `;
    }

    return {
      html,
      scaleModifier: 'no-scale',
    };
  },

  _postMessage: debounce(function(event) {
    // post a message to the collected iframes
    this.embedsToMessage
      .forEach((rule) => {
        rule.iframes.forEach((iframe) => {
          // We only want to instruct the iframe to take action once we know
          // that the bottom of the iframe is in view
          if (event.scrollTop && event.scrollTop > iframe.scrollHeight - event.height) {
            iframe.contentWindow
              .postMessage(rule.message, iframe.src);
          }
        });
      });
  }, 250), // debounce so we only postMessage every quarter second

  _onOrientationChange: function(event) { // eslint-disable-line no-unused-vars
    let p = this.props;
    if (BUILD_CONFIG.bundleType !== 'server' && p.embedCode.status == 'trusted') {
      const matched = this._messageEmbeds();

      if (!matched) {
        this.setState({ scaleModifier: iframeScaler.scale(this.element) });
      }
    }
  },

  _messageEmbeds: function() {
    let p = this.props;

    // Collect any iframes in the htmlAsset that need to be messaged on scroll
    const html = p.embedCode.html;
    let matched = false;
    this.embedsToMessage
      .forEach((rule) => {
        if (rule.pattern.test(html)) {
          matched = true;
          // Our htmlAsset is in the list of those that need to be messaged on scroll
          const src = html.match(rule.pattern)[0];
          const elements = this.element.querySelectorAll(`iframe[src="${src}"]`);

          ForEach(elements, (index, iframe) => {
            rule.iframes.push(iframe);

            if (window) {
              if (window.iFrameResize) {
                window.iFrameResize({
                  minHeight: 1000,
                }, iframe);
              } else {
                // iframe-resizer may not have had time to initialise,
                // so we check until it has.

                // number of times to check for iframe-resizer initialisation on this iframe
                let iframeResizerCalls = 10;
                this.iframeResizerInterval = setInterval(() => {
                  if (window.iFrameResize) {
                    window.iFrameResize({
                      minHeight: 1000,
                    }, iframe);
                    return clearInterval(this.iframeResizerInterval);
                  } else {
                    // stop after certain number of checks
                    if (iframeResizerCalls-- <= 0) {
                      return clearInterval(this.iframeResizerInterval);
                    }
                  }
                }, 250);
              }
            }
          });
        }
      });

    return matched;
  },

  render: function(Css, className) {
    return (
      <div className={`${className} ${className}--${this.state.scaleModifier}`} ref={(el) => this.element = el}>
        <Css />
        <this.Content />
      </div>
    );
  },

  propTypes: {
    embedCode: PropTypes.object.isRequired,
  }
});

// Adds scripts to window one by one,
// preventing race condition.
function addScripts(window, scripts) {
  let promise = Promise.resolve();

  scripts
  .forEach((script) => {
    let scriptEl = window.document.createElement('script');

    // Add to promise chain.
    // Will execute after previous script resolves.
    promise = promise.then(() => new Promise((resolve) => {
      window.document.head.appendChild(scriptEl);

      // Onload does not fire for scripts w/ content,
      // so don't bother adding onload.
      if (!script.innerHTML) {
        scriptEl.onload = () => {
          // run any existing onload function
          if (script.onload) script.onload.apply(window);

          // resolve
          resolve();
        };
      }

      // build attributes
      Object.keys(script)
      .forEach((key) => {
        if (key === 'onload') return;
        if (key === 'innerHTML') {
          return scriptEl.innerHTML = script[key];
        }
        scriptEl.setAttribute(key, script[key]);
      });

      // fire resolve immediately for scripts w/ content
      if (script.innerHTML) {
        resolve();
      }
    }));
  });

  return promise;
}
