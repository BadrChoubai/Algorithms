// Create array of modes of transportation 
// used throughout the month 
const data = ['train', 'car', 'bus', 'train', 'car', 'train', 'car', 'car', 'plane', 'train', 'train', 'car', 'bus', 'car', 'car', 'train', 'car', 'car', 'bus', 'car', 'car', 'bus', 'car',];

// reduce data into a count of each mode
let transportation = data.reduce((object, item) => {
    if(!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {});

console.log(transportation);


const inventors = [
    { first: 'Elon', last: 'Musk', mode: 'car' },
    { first: 'Kanye', last: 'West', mode: 'bus' },
    { first: 'Jeff', last: 'Bezos', mode: 'car' },
    { first: 'Nikola', last: 'Tesla', mode: 'car' },
    { first: 'Bill', last: 'Gates', mode: 'bus' },
    { first: 'Miguel', last: 'Kepler', mode: 'plane' },
    { first: 'Tony', last: 'Stark', mode: 'bus' },
    { first: 'Oprah', last: 'Winfrey', mode: 'car' },
    { first: 'Hilton', last: 'Johanasson', mode: 'bus' },
    { first: 'John', last: 'Smith', mode: 'bus' },
    { first: 'Nawfel', last: 'Alami', mode: 'train' },
    { first: 'Denver', last: 'Colorado', mode: 'train' }
  ];

// What about an for an array of objects


const inventorsMode = inventors.map((inventor) => inventor.mode);
const inventorsModeReduced = inventorsMode.reduce((object, item) => {
    if(!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {});
console.log(inventorsModeReduced)
