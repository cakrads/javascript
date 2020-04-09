var varLang = "javascript"; 
{var varLang = "change Lang";}
console.log(varLang); // change Lang
// it will not show error

let letLang = "javascript"; 
{let letLang = "change Lang";}
console.log(letLang); // javascript

const constLang = "javascript"; 
{const constLang = "change Lang";}
console.log(constLang); // javascript