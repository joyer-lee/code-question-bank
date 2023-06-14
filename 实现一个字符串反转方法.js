// 使用Array.reverse()方法实现字符串反转：
function reverseString(str) {
  return str.split('').reverse().join('');
}

// 示例代码
console.log(reverseString('hello world')); // 'dlrow olleh'

// 使用for循环实现字符串反转
function reverseString(str) {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// 示例代码
console.log(reverseString('hello world')); // 'dlrow olleh'

// 使用递归函数实现字符串反转：
function reverseString(str) {
  if (str === '') {
    return '';
  } else {
    return reverseString(str.substr(1)) + str.charAt(0);
  }
}

// 示例代码
console.log(reverseString('hello world')); // 'dlrow olleh'

