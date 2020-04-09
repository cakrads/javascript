// Boolean
console.log(typeof true); //=> boolean
console.log(typeof false); //=> boolean

// Null
console.log(typeof null); //=> object
// wew, amazing javascript
console.log(typeof null === "null"); //=> null
console.log(typeof null === "object"); //=> false

// Undefined
console.log(typeof undefined); //=> undefined

// Number
console.log(typeof 1.5); //=> number
console.log(typeof Infinity); //=> number
console.log(typeof NaN); //=> number

// String
console.log(typeof "a"); //=> string
console.log(typeof "🙂"); //=> string

//Symbol
console.log(Symbol("a")); //=> Symbol(a)
console.log(Symbol("a") === Symbol("b")); //=> false