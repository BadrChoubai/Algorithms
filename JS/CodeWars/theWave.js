const wave = str => {
  let waveArr = [];
  [...str].forEach((char, index) => (/[a-z]/.test(char) ? waveArr.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)) : null));
  return waveArr;
}
