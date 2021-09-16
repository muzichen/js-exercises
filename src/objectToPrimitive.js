// call obj[Symbol.toPrimitive](hint) if method exists
// hint ==> string: call obj.toString() or obj.valueOf()
// hint ==> number or default: call obj.valueOf() or obj.toString()
const user = {
  name: 'Chen',
  money: 2000,
  // 这个有最高优先级
  [Symbol.toPrimitive](hint) {
    return 'xxxxx';
  },
  toString() {
    return `@@@@@${this.name}@@@@@`
  },
  valueOf() {
    return this.money;
  }
}
// console.log('' + user);
// console.log(String(user));
// console.log(Number(user));