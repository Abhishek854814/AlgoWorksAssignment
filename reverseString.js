const fun1 = function reverseStringWithBuiltinFunction(str) {
  let characters = str.split("");
  characters = characters.reverse();
  return characters.join("");
};
const fun2 = function reverseStringWithoutBuiltinFunction(str) {
  let length = 0;
  while (str[length] != undefined) {
    length++;
  }
  let ans = "";
  let i = 0,
    j = length - 1;
  while (j >= 0) {
    ans += str[j];
    j--;
  }
  return ans;
};
