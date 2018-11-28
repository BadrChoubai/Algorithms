const FizzBuzz = () => {
    fizzBuzzArr = [];
    for(let i = 0; i < 101; i++) {
        if(i % 15 === 0){
            fizzBuzzArr.push("FizzBuzz")
        } else if(i % 3 === 0) {
            fizzBuzzArr.push("Fizz")
        } else if (i % 5 === 0) {
            fizzBuzzArr.push("Buzz")
        } else {
            fizzBuzzArr.push(i)
        }
    }
    return fizzBuzzArr;
};

FizzBuzz();