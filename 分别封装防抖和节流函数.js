/**
 * 防抖和节流函数都是为了减少函数的调用
 * 防抖是指在短时间内多次触发同一事件，只执行最后一次函数，本质上是将频繁触发的函数延迟处理
 * 节流是指在一定时间内只触发一次事件函数
 */

function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function throttle(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
}
