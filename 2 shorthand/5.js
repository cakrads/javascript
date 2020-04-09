// 5. JavaScript For Loop Shorthand
// longhand
const fruits = ['🍎', '🍌', '🍓'];
for (let i = 0; i < fruits.length; i++) { console.log(fruits[i]); }
//=> 🍎 
//=> 🍌
//=> 🍓

// shorthand
for (let fruit of fruits) { console.log(fruit); }
//=> 🍎 
//=> 🍌
//=> 🍓

// If you just wanted to access the index, do:
for (let index in fruits) { console.log(index); }
//=> 0 
//=> 1
//=> 2

// This also works if you want to access keys in a literal object:
const obj = { continent: 'Africa', country: 'Kenya', city: 'Nairobi' }
for (let key in obj)
    console.log(key) //=> continent, country, city


// Shorthand for Array.forEach:
function logArrayElements(element, index, array) {
    console.log("arr[" + index + "] = " + element);
}

['🚀', '🚆', '✈️'].forEach(logArrayElements);
  //=> arr[0] = 🚀
  //=> arr[1] = 🚆
  //=> arr[2] = ✈️
