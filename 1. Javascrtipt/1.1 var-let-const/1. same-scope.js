// var // function scope

// let, const // block scope

var varLang = "🙂"; 
var varLang = "😃";
console.log(varLang); //=> 😃
// it will not show error

// let letLang = "🙂"; 
// let letLang = "😨";
// SyntaxError: Identifier 'letLang' has already been declared

// const constLang = "🙂"; 
// const constLang = "😨";
// SyntaxError: Identifier 'constLang' has already been declared

let letLang = "🙂"; 
letLang = "😃";
console.log(letLang); //=> 😃

const constLang = "🙂"; 
constLang = "😷";
// TypeError: Assignment to constant variable.