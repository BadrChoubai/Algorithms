const abbrevName = (name) => {
  return name.split(' ').map(half => half[0]).join('.').toUpperCase();
};

console.log(abbrevName('badr choubai'));