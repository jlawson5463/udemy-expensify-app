//// object destructuring

// const person = {
//     age: 32,
//     location: {
//         city: 'Manchester',
//         temp: 8
//     }
// }

// // const name = person.name;
// // const age = person.age;

// const { name = 'Anonymous', age } = person;   // default value in case one isn't provided
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location; // modifying name of const so not coupled to the object properties if you don't want to be

// if (city && temperature){
//     console.log(`It's ${temperature}*c in ${city}`)    
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//        // name: 'Penguin'
//     }
// }

// const {name: publisherName = 'Self Published' } = book.publisher;

// console.log(publisherName);

//// array destructuring

const address = ['1299 Juniper Street', 'Philadelphia', 'Pennysylvania', '12856'];

//const [street, city, state, zip] = address; // marries up variable names by position in array your destructuring
//const [, city, state] = address;  // this makes variables for only some items in the array. Leaving some off the end means it will just ignore them. To ignore items in between just leave the comma but no variable name

const [, city, state, zip, country = 'USA'] = address;
console.log(`You are in ${city}, ${state} based in ${country}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [menuItem, , mediumPrice] = item;

console.log(`A medium ${menuItem} costs ${mediumPrice}`);
