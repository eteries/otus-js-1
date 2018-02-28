if (typeof Object.create === 'undefined') {
  Object.create = function(prototype) {    
    if (typeof prototype !== 'object') {
        throw new TypeError('Prototype should be an object or null');
    }
    
    var Construct = function() {};
    Constuct.prototype = prototype;
    return new Construct;
  }
}