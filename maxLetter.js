let maxLetter = (str) => {
    maxNum = 0;
    maxLet = '';
    
    LetterArr = str.split('')
    const countLetters = LetterArr.reduce((letter, object) => {
        if(!letter[object]) {
            letter[object] = 0;
        }
        letter[object]++;
        return letter;
    }, {});
    for(let letter in countLetters) {
        if (countLetters[letter] > maxNum) {
            maxNum = countLetters[letter];
            maxLet = letter;
        } 
    }
    return maxLet;
};

console.log(maxLetter("Work in progress"));