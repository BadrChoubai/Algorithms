const formatSource = (source) => {
  return source.toLowerCase().replace(' ', '-');
};

console.log(formatSource('cnn'));
console.log(formatSource('Ars Technica'));
console.log(formatSource('TechCrunch'));
console.log(formatSource('Fox News'));
console.log(formatSource('NHL News'));