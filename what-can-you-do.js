const prompt = require('prompt-sync')();

const age = prompt('Hello! What is your age?');

if (age > 25) {
    console.log("You can pretty much do anything. Have fun!");
} else if (age >= 18 && age <= 24) {
    console.log("You can vote but not rent a car. Try the Home Depot rentals though.");
}  else if (age >= 16 && age <= 17) {
    console.log("You can drive but not voite. Sorry.");
}  else if (age <16) {
    console.log("You can't drive.");
}
