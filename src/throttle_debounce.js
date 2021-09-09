/**
 * 记住throttle和debounce关键的一点不同在于，如果在连续点击或者连续执行事件的情况下，debounce是永远不会触发事件的，会造成“hungry”现象。
 */

function throttle(fn, wait) {
  let lastCallTime = null;
  let timer = null;
  return function() {
    let args = [...arguments];
    if (!lastCallTime) {
      lastCallTime = Date.now();
      fn.apply(this, args);
    } else {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastCallTime = Date.now();
        clearTimeout(timer);
      }, wait - (Date.now() - lastCallTime));
    }
  }
}



