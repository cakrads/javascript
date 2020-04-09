// #1 : Reassign
let w = "🙂";
let w = "😨"; ❌
//=> SyntaxError: Identifier 'w' has already been declared

// #2 : Update
let x = "🙂";
x = "😀"; ✅
console.log(x); //=> 😀

// #3 : Hoisting
y = "🙂";
let y; ❌
//=> ReferenceError: Cannot access 'y' before initialization

// #4 : Scope
let z = "🙂";
if (true) let z = "😀"; 
console.log(z); //=> 🙂
