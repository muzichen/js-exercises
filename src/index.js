import "./function";
import "./new";
import "./curry";
import "./array";
import "./throttle_debounce";
import "./immutability";
import "./objectToPrimitive";
import "./object";

// const A = ['A', 'B', 'C', 'D', 'E', 'F']
// const B = [1,   5,   4,   3,   2,   0]

function sort(items, newOrder) {
    for (let i = 0; i < items.length; i++) {
        while (newOrder[i] !== i) {
            swap(items, newOrder[i], i);
            swap(newOrder, newOrder[i], i);
        }
    }
}

function reorder(arr, index) {
    let n = arr.length;
    // Fix all elements one by one
    for (let i = 0; i < n; i++) {
        if (i === 0) {
            while (index[i] != i) {
                // Store values of the target (or correct)
                // position before placing arr[i] there
                let oldTargetI = index[index[i]];
                let oldTargetE = arr[index[i]];

                // Place arr[i] at its target (or correct)
                // position. Also copy corrected index for
                // new position
                arr[index[i]] = arr[i];
                index[index[i]] = index[i];

                // Copy old target values to arr[i] and
                // index[i]
                index[i] = oldTargetI;
                arr[i] = oldTargetE;
            }
        }
    }
}

function swap(arr, i, j) {
    const cur = arr[i];
    arr[i] = arr[j];
    arr[j] = cur;
}

// const socket = io('http://localhost:3000', {
//   transports: ['websocket']
// });

// socket.on('connection', () => {
//   console.log('connection')
// })

// socket.on('connect', () => {
//   console.log('connected');
// })

// socket.on('connect_error', (error) => {
//   console.log(error);
// })

// socket.on('receive_message', (message) => {
//   alert(message);
// })

// socket.emit('send_message', 'gagasgdag');
Object.assign1 = function (target, ...sources) {
    if (target === null || target === undefined)
        throw new TypeError("Can not convert undefined or null to object");
    target = Object(target);
    for (let i = 0; i < sources.length; i++) {
        const source = sources[i];
        if (source !== null && source !== undefined) {
            const keys = [
                ...Object.keys(source), // 可遍历属性(不包含继承的属性)
                ...Object.getOwnPropertySymbols(source), // key为symbol的属性
            ];
            for (const key of keys) {
               // 这里判断一下target上的key是否需要覆盖，且是否为可写的
               // 如果target上的属性需要覆盖且这个属性在target上是不可写的，则直接报错。
               if (target.hasOwnProperty(key) && !Object.getOwnPropertyDescriptor(target, key).writable) throw new Error();
                target[key] = source[key];
            }
        }
    }
    return target;
};

// const b = Object.create({a:3}, {
//   b: {
//     value: 4
//   },
//   c: {
//     value: 5,
//     enumerable: true
//   },
//   [Symbol(123)]: {
//     value: 123
//   }
// })

// console.log(b, 'xxxxxx');

// for (let key in b) console.log(key, 'key');

// console.log(Object.getOwnPropertyDescriptors(b));

// console.log(Object.assign1({}, {a:3}, {b:4}, b));

// const obj = Object.create(
//     { a: 123 },
//     {
//         b: {
//             value: 321,
//             enumerable: true,
//         },
//         c: {
//             value: 445,
//         },
//         [Symbol(123)]: {
//             value: 555,
//             enumerable: true,
//         },
//     }
// );

// console.log(Object.keys(obj));
// for (let key in obj) console.log(key);

// Object.keys返回的是对象可遍历的属性，不包含从原型继承来的属性
// Object.getOwnPropertyNames返回的是对象可遍历和不可遍历的属性，不包含从原型继承来的属性
// for...in遍历的是对象可遍历的属性，包含从原型继承来的属性，这一点是跟Object.keys不同的地方
// ⚠️ 均不包含key为Symbol类型的属性

// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.getPrototypeOf(obj));


