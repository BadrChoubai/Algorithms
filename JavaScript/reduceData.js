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

const companies = [
    { name: "US Bank", category: "Finance", start: 1981, end: 2004 },
    { name: "Amazon", category: "Retail", start: 1992, end: 2008 },
    { name: "Subaru", category: "Auto", start: 1999, end: 2007 },
    { name: "Target", category: "Retail", start: 1989, end: 2010 },
    { name: "Apple", category: "Technology", start: 2009, end: 2014 },
    { name: "Charles Schwab", category: "Finance", start: 1987, end: 2010 },
    { name: "Tesla", category: "Auto", start: 1986, end: 1996 },
    { name: "Google", category: "Technology", start: 2011, end: 2016 },
    { name: "Best Buy", category: "Retail", start: 1981, end: 1989 }
];

// count how many stores in each category

const reduceCompanies = companies
    .map(company => company.category)
    .reduce((object, item) => {
        if(!object[item]) {
            object[item] =0;
        }
        object[item]++;
        return object;
    }, 
    { }
);  
