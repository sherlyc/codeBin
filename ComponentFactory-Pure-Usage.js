module.exports = ComponentFactory.pure({
  name: 'colorBar',
  css: require('./colorBar.scss'),
  render: function(props, Css, className) {
    return (
      <span className={className} {...props}>
        <Css />
      </span>
    );
  }
});
