const pipe = (...fns) => {
  return (x) => {
    return fns.reduce((acc, fn) => {
      return fn(acc);
    }, x);
  }
}

const compose = (...fns) => {
  return (x) => {
    return fns.reduceRight((acc, fn) => {
      return fn(acc);
    }, x)
  }
}