const fun = function pattern(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";
    for (let j = i; j >= 1; j--) {
      str += "*";
    }
    console.log(str);
  }
};
fun(5);
