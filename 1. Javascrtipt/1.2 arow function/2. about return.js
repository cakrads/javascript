// single line
// auto return
const multiply1 = (a, b) => a * b;

// multy line and use curly brackets
// need return
const multiply2 = (a, b) => {
  // do something before return
  a *= 2;
  b *= 2;
  // return
  return a * b;
};

console.log(multiply1(1, 2)); //=> 2
console.log(multiply2(1, 2)); //=> 8
