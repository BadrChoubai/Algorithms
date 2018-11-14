// function makeItem() {
//     return {
//         data: {
//             item: {
//                 name: 'Shoes',
//                 size: {
//                     US: 8,
//                     EU: 40
//                 }
//             }
//         },
//         status: 'live'
//     }
// }

//  const { data: { item: { name, size: { US, EU } } }, status } = makeItem();

//  console.log(name, US, EU);

//  function makeArrayOfItems() {
//      return {
//          data: {
//              items: [
//                  { name: 'Shoes', price: 100 },
//                  { name: 'Shirt', price: 230 }
//              ]
//          },
//          status: 'live' 
//      }
//  }

//  const { data: { items: [item1, item2] } } = makeArrayOfItems(); 
//  console.log(item1, item2)

function exampleDB() {
    return {
        data: {
            items: [
               { name: "US Bank", category: "Finance", start: 1981, end: 2004 },
               { name: "Amazon", category: "Retail", start: 1992, end: 2008 },
               { name: "Subaru", category: "Auto", start: 1999, end: 2007 },
               { name: "Target", category: "Retail", start: 1989, end: 2010 },
               { name: "Apple", category: "Technology", start: 2009, end: 2014 },
               { name: "Charles Schwab", category: "Finance", start: 1987, end: 2010 },
               { name: "Tesla", category: "Auto", start: 1986, end: 1996 },
               { name: "Google", category: "Technology", start: 2011, end: 2016 },
               { name: "Best Buy", category: "Retail", start: 1981, end: 1989 }
            ]
        }
    }
}

const { data: { items: [...item] } } = exampleDB();
console.log(item);

