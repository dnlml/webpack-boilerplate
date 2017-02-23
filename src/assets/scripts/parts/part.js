'use script';

class Part {
  constructor () {
    this.init();
  }
};

Part.prototype.init = function () {
  console.log('Part: init');
};

module.exports = Part;
