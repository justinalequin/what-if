const prompt = require('prompt-sync')();
const planetSelect = prompt('Please select the planet you intend to fight on. 1 Venus - 2 Mars - 3 Jupiter - 4 Saturn - 5 Uranaus - Neptune');
const numberPlanetSelect = Number(planetSelect);
const earthWeight = prompt('Hello! Please enter your weight on earth: ');
const numberEarthWeight = Number(earthWeight);

const venus = ((numberEarthWeight) * 0.78)
const mars = ((numberEarthWeight) * 0.39)
const jupiter = ((numberEarthWeight) * 2.65)
const saturn = ((numberEarthWeight) * 1.17)
const uranus = ((numberEarthWeight) * 1.05)
const neptune = ((numberEarthWeight) * 1.23)


if (numberPlanetSelect === 1) {
    console.log("Your weight on Venus weight is ", (venus), "lbs");
} else if (numberPlanetSelect === 2) {
    console.log("Your weight on Mars weight is ", (mars), "lbs");
} else if (numberPlanetSelect === 3) {
    console.log("Your weight on Jupiter weight is ", (jupiter), "lbs");
} else if (numberPlanetSelect === 4) {
    console.log("Your weight on Saturn weight is ", (saturn), "lbs");
}  else if (numberPlanetSelect === 5) {
    console.log("Your weight on Uranus weight is ", (uranus), "lbs");
} else if (numberPlanetSelect === 6) {
    console.log("Your weight on Neptune weight is ", (neptune), "lbs");
}





