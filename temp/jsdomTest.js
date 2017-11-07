const { JSDOM } = require("jsdom");

const dom = new JSDOM("<body></body>");

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

Object.defineProperty(document.documentElement, "clientWidth", {
  writable: true,
  value: "500"
});
console.log(dom.window.document.documentElement.clientWidth);
