const prompt = require('prompt-sync')();

const groupSize = prompt('Hello! Please enter the total number of individuals in the group:');

const numberGroupSize = Number(groupSize);

const totalGroups = Number(groupSize) / 3;

const numberTotalGroups = Number(totalGroups)

const totalGroupsRemainder = Number(groupSize) % 3;

const numberTotalGroupsRemainder = Number(totalGroupsRemainder)


if (numberTotalGroupsRemainder === 1) {
    console.log("There should be ", Math.floor(numberTotalGroups), " group/s of 3 with a remainder of 1 person." );
} else if (totalGroupsRemainder === 2) {
    console.log("There should be ", Math.floor(numberTotalGroups), " group/s of 3, and 1 group of 2." );
} else if (totalGroupsRemainder === 0) {
    console.log("There should be", Math.floor(numberTotalGroups), "group/s of 3.");
}