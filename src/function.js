function isCallable(it) {
  if (typeof it !== 'function') {
    throw TypeError(String(it) + ' is not a function');
  }
  return it;
}

Function.prototype.call2 = function(that/* , ...args */) {
  var that = that || window; // 如果传入的that为undefined或null，默认的this为windows
  that.fn = this; // call2修改调用函数this的指向，可以将this直接设置为that对象的属性

  var args = [];
  for (var i = 1, len = arguments.length; i < len; i++) {
    args.push('arguments[' + i + ']');
  }
  var result = eval('that.fn(' + args + ')');
  delete that.fn; // 执行之后，删除that的fn属性
  return result;
}

Function.prototype.apply2 = function(that, arr) {
  var that = that || window;
  that.fn = this;

  var result;
  if (!arr) result = that.fn();
  else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('that.fn(' + args + ')');
  }

  delete that.fn;
  return result;
}

Function.prototype.bind2 = function(that/* , ...args*/) {
  var fn = isCallable(this);
  var partArgs = Array.prototype.slice.call2(arguments, 1);

  var bonundFunction = function(/* args... */) {
    var args = partArgs.concat(arguments);
    return fn.apply2(that instanceof bonundFunction ? that : this, args); // 如果
  }
  bonundFunction.prototype = this.prototype;
  return bonundFunction;
}