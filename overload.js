var overload = function (args) {
  return {
    def: function () {
      if (arguments.length <= 0) {
        return this;
      }
      
      var callback = Array.prototype.pop.call(arguments);
      if (typeof callback !== 'function') {
        return this;
      }
      
      var run = function () {
        callback();
        return {def: function () {return this}};
      }
      
      if (arguments.length === 0) run();
      
      var conditions = Array.prototype.slice.call(arguments);
      if (conditions.length !== args.length) return this;
      
      //違ったら true
      return conditions.some(function (val, index) {
        switch (typeof val) {
          case 'string':
            return typeof args[index] !== val;
            break;
          case 'array':
            return val.some(arguments.callee);
            break;
        }
      }) && this || run();
    }
  }
}

module.exports = overload;
