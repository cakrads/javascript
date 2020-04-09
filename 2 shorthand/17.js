// 17. Array.find Shorthand
const pets = [
    { title: 'Cat', emoji: '🐱' },
    { title: 'Wolf', emoji: '🐺' },
    { title: 'Rabbit', emoji: '🐰' },
]

function findCat(name) {
    for (let i = 0; i < pets.length; ++i) {
        if (pets[i].title === 'Cat') {
            return pets[i];
        }
    }
}
console.log("findCat", findCat()); //=> { title: 'Cat', emoji: '🐱' }


const cat = pets.find(pet => pet.title === 'Cat');
console.log(cat); //=> { title: 'Cat', emoji: '🐱' }
// there's also filter() and sort() in ES 6