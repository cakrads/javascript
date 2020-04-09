// 8. Object Property Shorthand
// longhand
const x = "💾", y = "🌎";
const longhand = { x: x, y: y };
console.log(longhand); // { x: '💾', y: '🌎' }

// shorthand
const shorthand = { x, y };
console.log(shorthand); // { x: '💾', y: '🌎' }