const cond1 = { planet: "earth" };
const cond2 = { dying: true };

// // ES5 => Object Assign
const oldWay = Object.assign(cond1, cond2);
console.log(oldWay); //=> { planet: 'earth', dying: true }

const emoji3 = { who: "human" };
const emoji4 = { act: "save earth" };

// ES6 => SPREAD OPERATOR
const newWay = { ...emoji3, ...emoji4 };
console.log(newWay); //=> { who: 'human', act: 'save earth' }
