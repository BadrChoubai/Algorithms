// const repeatStringNumTimes = (str, num) => str.repeat(num) 

function repeatStringNumTimes(str, num) {
  let repeated = ""
  while (num > 0) {
    repeated+=str;
    num--
  }
  return repeated;
};

