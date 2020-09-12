const fun1 = function removeDuplicatesWithoutInBuiltFunction(arr) {
  let length = 0;
  let max_num = 0;
  while (arr[length] != undefined) {
    if (arr[length] > max_num) {
      max_num = arr[length];
    }
    length++;
  }
  let count = new Array(max_num + 1).fill(0);
  let elements = [];
  let j = 0;
  for (let i = 0; i < length; i++) {
    if (count[arr[i]] == 0) {
      elements.push(arr[i]);
      count[arr[i]]++;
    }
  }
  return elements;
};

const fun2 = function removeDuplicatesWithInBuiltFunction(arr) {
  let set = new Set();
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      arr[j++] = arr[i];
      set.add(arr[i]);
    }
  }
  arr.splice(j);
  return arr;
};
