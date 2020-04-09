// change value
let X = { emoji: "🙂" };
X = { emoji: "😀" };
console.log(X); //=> { emoji: '😀' }

// clone X to Y
let Y = X;
Y.emoji = "😨";
console.log(X); //=> { emoji: "😨" }
console.log(Y); //=> { emoji: "😨" }
