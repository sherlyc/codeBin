/**
 * Created by louw.swart on 31/03/17.
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import HtmlAsset from './htmlAsset';
import README from './README.md';
import Theme from './../theme/theme';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import withReadme from 'storybook-readme/with-readme';
import Helmet from 'react-helmet';

const stories = storiesOf('HtmlAsset', module);
const htmlAssets = require('./fixtures/htmlAssets.fixtures');
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);
stories.addDecorator(withReadme(README));

stories.addWithInfo('HTML asset - Apester', () => {

  const defaultValue = htmlAssets['Apester'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 82863385);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is responsive on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - AOL', () => {

  const defaultValue = htmlAssets['AOL'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 92454954);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is responsive on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Opta', () => {

  const defaultValue = htmlAssets['Opta'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 84830362);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is responsive on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Live Blog', () => {

  const defaultValue = htmlAssets['liveBlog'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 90355776);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is responsive on mobile devices, but we do implement cross-iframe messaging using <a href="https://github.com/davidjbradshaw/iframe-resizer">iframe-resizer</a>.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Interactives (stuff.co.nz)', () => {

  const defaultValue = htmlAssets['interactivesStuff'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 92723022);

  const htmlAsset =
    <div>
      <Theme>
        <Helmet
         script=
           {[{
             src: 'https://interactives.stuff.co.nz/2017/05/the-receipt/script.js' },
           { type: 'text/javascript',
             innerHTML: '\n\t// Prevent absent digitalData from throwing errors on the pattern library\n\twindow.digitalData = window.digitalData || {};\n\twindow.digitalData.events = window.digitalData.events || {};\n\twindow.s = window.s || {};\n\twindow.digitalData.events.push = window.digitalData.events.push || function() {};\n\twindow.digitalData.page = window.digitalData.page || {};\n\twindow.digitalData.page.pageInfo = window.digitalData.page.pageInfo || {};\n\twindow.digitalData.page.category = window.digitalData.page.category || {};\n\twindow.digitalData.page.ads = window.digitalData.page.ads || {};\n\n\twindow.digitalData.page.pageInfo.articleID = null;\n\twindow.digitalData.page.category.pageType = \'\';\n\twindow.digitalData.page.pageInfo.keywords = null;\n\twindow.digitalData.page.ads.exclusions = null;\n\twindow.digitalData.user = [{\n\t    profile: [{\n\t        profileInfo: {}\n\t    }],\n\t    segment: {}\n\t}];\n'
           }]}
        />
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is not an iframe.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Interactives (assets.stuff.co.nz)', () => {

  const defaultValue = htmlAssets['interactivesAssetsStuff'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 93177690);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is not an iframe.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Interactives iframe (assets.stuff.co.nz)', () => {

  const defaultValue = htmlAssets['interactivesIframeAssetsStuff'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 90107426);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled via Transform Scale on mobile devices using the specifed height and width to determine the aspect ratio.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Newsletter Pointer', () => {

  const defaultValue = htmlAssets['newsLetterPointer'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 92084717);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is not an iframe.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Vidible.tv', () => {

  const defaultValue = htmlAssets['vidibleTV'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 91805119);

  const htmlAsset =
    <div>
      <Theme>
          <HtmlAsset
            assetId={assetId}
            embedCode={embedCode}
          />
          <p className="u-margin-left u-margin-right">Unscaled as the embed is not an iframe.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Instagram', () => {

  const defaultValue = htmlAssets['instagram'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 93117859);

  const htmlAsset =
    <div>
      <Theme>
       <Helmet
         script=
           {[{
             async: '',
             defer: '',
             src: 'https://platform.instagram.com/en_US/embeds.js'
           }]}
        />
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is not an iframe.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Soundcloud', () => {

  const defaultValue = htmlAssets['soundCloud'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 92418915);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled using an aspect ratio of 16x9 via Intrinsic Ratio on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - infogr.am', () => {

  const defaultValue = htmlAssets['infogram'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 92727349);

  const htmlAsset =
    <div>
      <Theme>
        <Helmet
          script=
            {[{
              innerHTML: '!function(e,t,s,i){var n="InfogramEmbeds",o=e.getElementsByTagName("script"),d=o[0],r=/^http:/.test(e.location)?"http:":"https:";if(/^\\/{2}/.test(i)&&(i=r+i),window[n]&&window[n].initialized)window[n].process&&window[n].process();else if(!e.getElementById(s)){var a=e.createElement("script");a.async=1,a.id=s,a.src=i,d.parentNode.insertBefore(a,d)}}(document,0,"infogram-async","//e.infogr.am/js/dist/embed-loader-min.js");'
            }]}
        />
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is not an iframe.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - NZ on Screen', () => {

  const defaultValue = htmlAssets['nzOnScreen'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 87550968);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled via Pixel Scaling on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Giphy', () => {

  const defaultValue = htmlAssets['giphy'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 92174160);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled via Pixel Scaling on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});


stories.addWithInfo('HTML asset - FB Live', () => {

  const defaultValue = htmlAssets['fbLive'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 89959010);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled via Intrinsic Ratio using supplied width and height on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});


stories.addWithInfo('HTML asset - CMA hosted images', () => {

  const defaultValue = htmlAssets['cmaImages'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 87777371);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Unscaled as the embed is not an iframe.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - YouTube', () => {

  const defaultValue = htmlAssets['youTube'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 87134703);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled using an aspect ratio of 16x9 via Intrinsic Ratio on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Washington Post Video', () => {

  const defaultValue = htmlAssets['washingtonPostVideo'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 87134703);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled via Intrinsic Ratio using supplied width and height on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});

stories.addWithInfo('HTML asset - Google Map', () => {

  const defaultValue = htmlAssets['googleMap'];
  const embedCode = object('embedCode', defaultValue);
  const assetId = text('assetId', 92402086);

  const htmlAsset =
    <div>
      <Theme>
        <HtmlAsset
          assetId={assetId}
          embedCode={embedCode}
        />
        <p className="u-margin-left u-margin-right">Scaled via Intrinsic Ratio using supplied width and height on mobile devices.</p>
      </Theme>
    </div>;

  return htmlAsset;
});
