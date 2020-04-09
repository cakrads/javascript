const emoji1 = ["🙂", "😀", "😨"];
const emoji2 = ["😷", "✅", "❌"];

// ES5 => CONCAT
const oldWay = emoji1.concat(emoji2);
console.log(oldWay); // ["🙂", "😀", "😨""😷", "✅", "❌"]

const emoji3 = ["🙂", "😀", "😨"];
const emoji4 = ["😷", "✅", "❌"];

// ES6 => SPREAD OPERATOR
const newWay = [...emoji3, ...emoji4];
console.log(newWay); // ["🙂", "😀", "😨""😷", "✅", "❌"]
