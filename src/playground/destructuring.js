//
// Object Destructuring
//

// const person = {
//     name: 'Jonas',
//     age: 23,
//     location: {
//         city: 'New York',
//         temp: 66
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const Book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin',
//     }
// };

// const { name: publisherName = 'Penguin' } = Book.publisher;

// console.log(publisherName)

//
// Array Destructuring
//

const address = ['990 Dobbs Ferry Road', 'Westchester', 'New York', '10607'];
const [, city, state = 'Massachusettes'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (iced)', '$3.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);