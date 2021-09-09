function isObject(it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
}

function isArray(it) {
  return Array.isArray(it);
}

function update(data, command) {
  let resultData = null;
  if (Array.isArray(data)) {
    resultData = [...data];
  } else if (isObject(data)) {
    resultData = {...data};
  } else {
    resultData = data;
  }
  for (let key in command) {
    if (key.startsWith('$')) {
      switch(key) {
        case '$push':
          if (isArray(command[key])) {
            resultData = resultData.concat(command[key]);
          } else {
            resultData.push(command[key]);
          }
          break;
        case '$set':
          resultData = command[key];
          break;
        case '$merge':
          // console.log(resultData, command[key])
          if (!isObject(resultData)) return;
          resultData = {...resultData, ...command[key]};
          break;
        case '$apply':
          resultData = command[key](resultData);
          break;
      }
    } else if (command[key]) {
      resultData[key] = update(resultData[key], command[key]);
    }
  }
  return resultData;
}

const state = {
  a: {
    b: {
      c: 0
    }
  },
  d: 2
}

// console.log(update([1], {$push: [2, 3]}));
console.log(update(state, { a: {b: { $set: 123 } } }));
// console.log(update([1], {0: {$apply: (item) => item * 2}}));
// console.log()

console.log(update({a: 1}, {a: {$merge: {c: 3}}}))