const prompt = require('prompt-sync')();
const userInput = prompt('Please enter a number: ');
const numberUserInput = Number(userInput);

 if ((((numberUserInput) %3) === 0) && ((numberUserInput) % 5) === 0) {
    console.log("fizzbuzz")
} else if (((numberUserInput) % 3) === 0) {
    console.log("fizz")
} else if (((numberUserInput) % 5) === 0) {
    console.log("buzz")
}

