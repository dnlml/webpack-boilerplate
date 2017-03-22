const css = require('../styles/main.scss');
const logoOne = require('svg-inline-loader!../svg/sprite/circle.svg');
const logoTwo = require('svg-inline-loader!../svg/sprite/square.svg');

const WebFont = require('webfontloader');

class App {
  constructor () {
    this.init();
  }
}

App.prototype.init = function () {
  console.log('App: init');
}

document.addEventListener('DOMContentLoaded', function () {
  WebFont.load({
    custom: {
      families: ['']
    },
    active: function () {
      new App();
    },
    inactive: function () {
      new App();
    }
  });
});
