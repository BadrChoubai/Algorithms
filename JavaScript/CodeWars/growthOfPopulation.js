function nbYear(p0, percent, aug, p) {
  let age = 0;
  let total = p0;
  while (total < p) {
    age+=1;
    total += parseInt((total*((parseFloat(percent))/100))) + aug
  }
  return age;
}