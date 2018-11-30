// const titleCase = (str) => {
//   let strArr = [...str.split(' ')];/*?*/
//   let result = strArr.map(word => word.replace(word, word[0].toUpperCase().concat(word.toLowerCase().slice(1, word.length))));

//   return result.join(' ');
// };

let titleCase = str => [...str.split(' ')].map(word => word.replace(word, word[0].toUpperCase().concat(word.toLowerCase().slice(1, word.length)))).join(' ');