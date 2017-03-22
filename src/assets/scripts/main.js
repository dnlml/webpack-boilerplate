const css = require('../styles/main.scss');
const sprite = require.context('../svg/sprite', false, /\.svg$/);
sprite.keys().forEach(sprite);

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
