const countVowels = (string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const stringArr = string.split('');
    for (letter in stringArr) {
        for (vowel in vowels) {
            if (stringArr[letter] === vowels[vowel]) {
                console.log(vowel + stringArr[letter]);
            }
        }
    }
}

console.log(countVowels("test"));
