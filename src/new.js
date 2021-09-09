function new2() {
  // ☝️首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象
  var obj = new Object(),
      Constructor = [].shift.call(arguments);
  obj.__proto__ = Constructor.prototype;
  // ☝️将构造函数的执行上下文更改为新创建的对象
  var ret = Constructor.apply(obj, arguments);
  // ☝️ 如果构造函数的返回值为对象类型则返回这个返回值，否则返回obj
  return typeof ret === 'object' ? ret : obj;
}

// function C1(name) {
//   this.name = name;
//   return 123;
// }

// console.log((new C1('chen')).name); // chen

// function C2(name) {
//   this.name = name;
//   return {
//     age: 18
//   }
// }

// console.log((new C2('chen')).name); // undefined