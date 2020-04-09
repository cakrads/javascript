// #1 : Reassign
const v = "🙂";
const v = "😨"; ❌ //=> SyntaxError: Identifier 'v' has already been declared

// #2.1 : Update Fail
const w = "🙂";
w = "😨"; ❌ //=> TypeError: Assignment to constant variable.

// #2.2 : Update Success
const x = { emoji: "🙂" };
x.emoji = "😀"; ✅
console.log(x); //=> { emoji: '😀' }

// #3 : Hoisting
y = "🙂"; 
const y; //=> Missing initializer in const declaration

// #4 : Scope
const z = "🙂";
if (true) { const z = "😀"; } 
console.log(z); //=> 🙂
