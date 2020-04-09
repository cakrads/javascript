// 2. Short-circuit Evaluation Shorthand
let expression;
// longhand
if (expression !== null ||
    expression !== undefined ||
    expression !== ''
) {
    const expressionNow = expression;
}

// shorthand
const expressionNow = expression || '🙂';

let a;
let b = a || '😀';
console.log(a); //=> undefined
console.log(b); //=> 😀

let x = '🙂';
let y = x || '😀';
console.log(y); //=> 🙂
