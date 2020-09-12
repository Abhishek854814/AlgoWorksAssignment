let elements = [];
const fun = function flattenAnArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      flattenAnArray(arr[i]);
    } else {
      elements.push(arr[i]);
    }
  }
};
let arr = [1, 2, [3, 4], 5, [3, [7, 8]], 9];
fun(arr);
console.log(elements);
