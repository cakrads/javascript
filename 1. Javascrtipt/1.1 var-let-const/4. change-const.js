const constLang = { name: "Javascript" };
constLang = { name: "Change Lang" };
// TypeError:  Assignment to constant variable.

const constLang = { name: "Javascript" };
constLang.name =  "Change Lang";
console.log(constLang); // { name: 'Change Lang' }
