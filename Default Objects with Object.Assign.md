# Set default objects with Object.assign

## Bad:

```
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);
```

## Good:

```
const userConfig = {
title: 'Order',
// User did not include 'body' key
buttonText: 'Send',
cancellable: true
}

function createMenu(config) {
config = Object.assign({
title: 'Menu',
body: 'Default Body',
buttonText: 'Open',
cancellable: true
}, config)
}
// config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}

createMenu(userConfig)
```
