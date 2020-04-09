// Logical Operator
const fun1 = x => x || "default";

// Ternary
const fun2 = x => (x ? x : "default");

const fun3 = x => {
  // If/Else
  if (!x) {
    return "default";
  }
  return x;
};

const fun4 = (x = "default") => {
  return x;
};

console.log(fun1()); // default
console.log(fun2()); // default
console.log(fun3()); // default
console.log(fun4()); // default
