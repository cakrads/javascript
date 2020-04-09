// #1 : Reassign
var x = "😀";
var x = "😑"; 
console.log(x); //=> 😑

// #2 : Hoisting
y = "😀";
var y;
console.log(y); //=> 😀 magic here

// #3 : Scope
var z = "😀";
if (true) {
  var z = "😑";
}
console.log(z); //=> 😑
