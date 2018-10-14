// const person = {
// 	name: 'Femi',
// 	age: 24,
// 	location:{
// 		city: 'london',
// 		temp: 17
// 	}
// }

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
// 	console.log(`It's ${temperature} in ${city}`);
// };

// const book = {
// 	name: 'Ego is the enemy',
// 	author: 'Ryan Holiday',
// 	publisher:{
// 		name: 'Penguin'
// 	}
// }

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);

const address = ['17 Galton close', 'london', 'England', 'NW4 4BT']
const [, city, state = 'Mid-Lands'] = address

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee, ,price] = item

console.log(`A medium ${coffee} costs ${price}`);
