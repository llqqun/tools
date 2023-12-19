// 节流函数
export default function throttle(fn, interval, callFirst) {
  let wait = false;
  let callNow = false;
  return function() {
    callNow = callFirst && !wait;
    let context = this;
    let args = arguments;
    if (!wait) {
      wait = true;
      setTimeout(function() {
        wait = false;
        if (!callFirst) {
          return fn.apply(context, args);
        }
      }, interval);
    }
    if (callNow) {
      callNow = false;
      return fn.apply(this, arguments);
    }
  };
}

// 防抖
export default function debounce(fn, wait, callFirst) {
  let timeout;
  return function() {
    if (!wait) {
      return fn.apply(this, arguments);
    }
    let context = this;
    let args = arguments;
    let callNow = callFirst && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!callNow) {
        return fn.apply(context, args);
      }
    }, wait);

    if (callNow) {
      return fn.apply(this, arguments);
    }
  };
}
