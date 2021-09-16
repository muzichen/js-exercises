// 实现Object.assign
// 根据https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign 的定义，Object.assign会将sources对象中的可遍历的自有属性复制到目标对象上（包括key为Symbol类型的属性）
Object.assign1 = function (target /*, sources */) {
    if (target === null || target === undefined)
        throw new TypeError("target type is wrong.");
    target = Object(target);
    for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i];
        // 获取source的可遍历的属性，以及key为symbol类型的属性
        const keys = [
            ...Object.keys(source),
            ...Object.getOwnPropertySymbols(source),
        ];
        for (let key of keys) {
            // 如果当前key存在于target中，则说明需要覆盖，判断这个key在target中是否为可写的，如果不是，则报错
            if (
                target.hasOwnProperty(key) &&
                !Object.getOwnPropertyDescriptor(target, key).writable
            ) {
                throw new Error(`${key} is not writable`);
            }
            target[key] = source[key];
        }
    }
    return target;
};
// copy all own properties and their descriptor
Object.completeAssign = function (target /*, sources */) {
  if (target === null || target === undefined) throw new TypeError('target type is wrong');
  target = Object(target);
  for (let i = 1; i < arguments.length; i++) {
    let source = arguments[i];
    if (source === null || source === undefined) {
      source = {};
    }
    const keys = [...Object.getOwnPropertyNames(source), ...Object.getOwnPropertySymbols(source)];
    for (let key of keys) {
      Object.defineProperty(target, key, {...Object.getOwnPropertyDescriptor(source, key)});
    }
  }
  return target;
;};

const target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false,
});

const source = Object.create(
    {
        a: 3, // prototype
    },
    {
        b: {
            value: 4,
            enumerable: true, // enumerable data descriptor
        },
        c: {
            value: 5, // non-enumerable data descriptor
        },
        d: {
            // non-enumerable accessor descriptor
            get: function () {
                return this._d;
            },
            set: function (value) {
                this._d = value;
            },
        },
        e: {
            // enumerable accessor descriptor
            get: function () {
                return this._e;
            },
            set: function (value) {
                this._e = value;
            },
            enumerable: true,
        },
    }
);

Object.completeAssign({}, source);

// Object.assign1(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3 }, { baz: 4 }, { [Symbol(123)]: 456 });
