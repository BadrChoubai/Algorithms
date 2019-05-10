class CaesarCipher {
  constructor(shiftNum) {
    this.shiftNum = shiftNum;
  }

  encode(string) {
    let charCodeArr = [];

    for (let i = 0; i < string.length; i++) {
      charCodeArr.push(string.charCodeAt(i) + this.shiftNum);
    }

    let encoded = charCodeArr.map(charCode => {
      return String.fromCharCode(charCode);
    }).join('');

    return encoded;
  }

  decode(string) {
    let charCodeArr = [];
    for (let letter in string) {
      charCodeArr.push(string.charCodeAt(letter));
    };
    let result = charCodeArr.map(charCode => {
      return String.fromCharCode(charCode - this.shiftNum);
    }).join('');
    return result;;
  }
}

var c = new CaesarCipher(5);

c.encode("Codewars");
c.decode("Htij|fwx");
