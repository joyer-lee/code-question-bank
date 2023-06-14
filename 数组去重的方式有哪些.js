//  使用 Set 去重
const arr = [1, 1, 2, 2, 3, 3];
const newArr = [...new Set(arr)];
console.log(newArr); // [1, 2, 3]

// 使用 for 循环和 indexOf 去重
// function unique(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === i) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// const arr = [1, 1, 2, 2, 3, 3];
// const newArr = unique(arr);
// console.log(newArr); // [1, 2, 3]

// 使用 for 循环和 includes 去重
// function unique(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// const arr = [1, 1, 2, 2, 3, 3];
// const newArr = unique(arr);
// console.log(newArr); // [1, 2, 3]

//  使用 filter 去重
// function unique(arr) {
//   const newArr = arr.filter(function(item, index) {
//     return arr.indexOf(item) === index;
//   });
//   return newArr;
// }

// const arr = [1, 1, 2, 2, 3, 3];
// const newArr = unique(arr);
// console.log(newArr); // [1, 2, 3]

