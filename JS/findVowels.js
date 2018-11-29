const countVowels = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowelsInString = [];
    const stringArr = string.toLowerCase().split('');
    for (letter in stringArr) {
        for (vowel in vowels) {
            if (stringArr[letter] === vowels[vowel]) {
                vowelsInString.push(vowels[vowel]);
            }
        }
    }
    reduceVowels = vowelsInString.reduce((vowel, vowels) => {
        if (!vowel[vowels]) {
            vowel[vowels] = 0;
        }
        vowel[vowels]++;
        return vowel;
    }, {});
    return reduceVowels;
};

console.log(countVowels("this is a string"));
// i i a i 

console.log(countVowels("I love javascript"));
// i o e  a a i 

console.log(countVowels("UPPERCASE STRING"));
// u e a e i 