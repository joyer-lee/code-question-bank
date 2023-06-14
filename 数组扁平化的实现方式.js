// 数组的扁平化: 不同方式实现
// 数组的flat方法
arr.flat(Infinity);

// 扩展运算符实现
function flatten1(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}

// reduce函数实现
function flatten2(arr) {
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return prev.concat(flatten(cur));
    } else {
      return prev.concat(cur);
    }
  }, []);
}

// 递归实现
function flatten3(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten(arr[i]));
    } else {
      res.push(arr[i]);
    }
  }

  return res;
}



