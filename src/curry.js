function curry(fn) {
  // curry return a function
  return function curried(args) {
    // 如果传入函数柯里化后的函数的参数个数大于等于原函数的参数个数，则直接调用原函数，并将参数传入。
    /**
     * function add(a, b) => curriedAdd(a, b)
     */
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      // 果传入函数柯里化后的函数的参数个数小于原函数的参数个数，则继续返回一个函数，并将
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}