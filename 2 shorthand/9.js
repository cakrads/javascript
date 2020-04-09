// Arrow Functions Shorthand
let name = 'Arthur';
let fruits = ['🍎', '🍌', '🍓'];

// longhand
function sayHello(name) {
    console.log('Hello', name); // Hello Arthur
}

fruits.forEach(function (item) {
    console.log(item); //🍎\n 🍌\n 🍓\n
});

// shorthand
const sayHello = name => console.log('Hello', name); // Hello Arthur

fruits.forEach(item => console.log(item)); //🍎\n 🍌\n 🍓\n
