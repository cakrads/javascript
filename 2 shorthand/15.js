// 15. Spread Operator Shorthand
// joining arrays
const a = [1, 3, 5];
const b = [2, 4, 6].concat(a);
console.log(b); //=> [ 2, 4, 6, 1, 3, 5 ]

// cloning arrays
const c = [1, 2, 3, 4];
const d = c.slice()
console.log(d); //=> [ 1, 2, 3, 4 ]


// joining arrays
const e = [1, 3, 5];
const f = [2, 4, 6, ...e];
console.log(f); //=> [ 2, 4, 6, 1, 3, 5 ]

// // cloning arrays
const g = [1, 2, 3, 4];
const h = [...g];
console.log(h); //=> [ 2, 4, 6, 1, 3, 5 ]

// // Unlike the concat() function, you can use the spread operator to insert an array anywhere inside another array.
const i = [1, 3, 5];
const j = [2, ...i, 4, 6];
console.log(j); //=> [ 2, 4, 6, 1, 3, 5 ]

//
const { x, y, ...z } = { x: 1, y: 2, c: 3, d: 4 };
console.log(x) // 1
console.log(y) // 2
console.log(z) // { c: 3, d: 4 }
