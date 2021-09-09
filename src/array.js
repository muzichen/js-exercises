// Array.prototype.flat2 = function(deep = 1) {
//   const result = [];
//   function flat2Helper(arr, deep, result) {
//     for (let i = 0; i < arr.length; i++) {
//       const current = arr[i];
//       if (Array.isArray(current)) {
//         deep > 0 ? flat2Helper(current, deep - 1, result) : result.push(current);
//       } else {
//         result.push(current);
//       }
//     }
//   }
//   flat2Helper(this, deep, result);
//   return result;
// };
const defineProperty = Object.defineProperty;
const targetProto = Array.prototype;

defineProperty(targetProto, 'flat2', function(deep = 1) {
  const result = [];
  function flat2Helper(arr, deep, result) {
    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];
      if (Array.isArray(current)) {
        deep > 0 ? flat2Helper(current, deep - 1, result) : result.push(current);
      } else {
        result.push(current);
      }
    }
  }
  flat2Helper(this, deep, result);
  return result;
});

defineProperty(targetProto, 'flat3', function() {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const current = this[i];
    if (Array.isArray(current)) {
      for (let j = 0; j < current.length; j++) {
        const _current = current[j];
        result.push(_current);
      }
    } else {
      result.push(current);
    }
  }
  return result;
})

// Array.prototype.flat3 = function() {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     const current = this[i];
//     if (Array.isArray(current)) {
//       for (let j = 0; j < current.length; j++) {
//         const _current = current[j];
//         result.push(_current);
//       }
//     } else {
//       result.push(current);
//     }
//   }
//   return result;
// };

defineProperty(targetProto, 'flat4', function() {
  const queue = [...this];
  const result = [];
  while(queue.length) {
    const current = queue.shift();
    if (Array.isArray(current)) {
      queue.push(...current);
    } else {
      result.push(current);
    }
  }
  return result;
})

// Array.prototype.flat4 = function() {
//   const queue = [...this];
//   const result = [];
//   while(queue.length) {
//     const current = queue.shift();
//     if (Array.isArray(current)) {
//       queue.push(...current);
//     } else {
//       result.push(current);
//     }
//   }
//   return result;
// };

defineProperty(targetProto, 'shuffle1', function() {
  return this.sort(() => Math.random() - 0.5);
})

defineProperty(targetProto, 'shuffle2', function() {
  const len = this.length;
  for (let i = 0; i < len; i++) {
    let random = Math.floor(Math.random() * len);
    [this[i], this[random]] = [this[random], this[i]];
  }
})

defineProperty(targetProto, 'shuffle3', function() {
  // https://blog.codinghorror.com/the-danger-of-naivete/
  const len = this.length;
  for (let i = len - 1; i > 0; i--) {
    let random = Math.floor(Math.random() * (i + 1));
    [this[i], this[random]] = [this[random], this[i]];
  }
})

defineProperty(targetProto, 'reduce1', function(callbackFn/*, initialValue */) {
  let memo = arguments.length > 1 ? arguments[1] : undefined;
  let index = 0;
  if (arguments.length < 2) {
    // 没有initialValue
    if (this.length === 0) throw TypeError('Reduce with empty array without initial value.')
    // 如果this不为空，取第一个元素为initialValue
    memo = this[index];
    index += 1;
  }
  for(; index < this.length; index++) {
    memo = callbackFn(memo, this[index], index, this);
  }
  return memo;
})


// // shuffle
// Array.prototype.shuffle1 = function() {
//   return this.sort(() => Math.random() - 0.5);
// }

// Array.prototype.shuffle2 = function() {
//   const len = this.length;
//   for (let i = 0; i < len; i++) {
//     let random = Math.floor(Math.random() * len);
//     [this[i], this[random]] = [this[random], this[i]];
//   }
// }

// Array.prototype.shuffle3 = function() {
//   // https://blog.codinghorror.com/the-danger-of-naivete/
//   const len = this.length;
//   for (let i = len - 1; i > 0; i--) {
//     let random = Math.floor(Math.random() * (i + 1));
//     [this[i], this[random]] = [this[random], this[i]];
//   }
// }

// accu, currentValue, index, array
Array.prototype.reduce1 = function(callbackFn/*, initialValue */) {
  let memo = arguments.length > 1 ? arguments[1] : undefined;
  let index = 0;
  if (arguments.length < 2) {
    // 没有initialValue
    if (this.length === 0) throw TypeError('Reduce with empty array without initial value.')
    // 如果this不为空，取第一个元素为initialValue
    memo = this[index];
    index += 1;
  }
  for(; index < this.length; index++) {
    memo = callbackFn(memo, this[index], index, this);
  }
  return memo;
}





