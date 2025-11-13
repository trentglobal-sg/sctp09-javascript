const prompt = require('prompt-sync')();

let psi = prompt("Enter the PSI: ");

// no further processing need for the psi value

let airQuality = ""; // assign an empty string to airQuality, could be "good", "moderate", "unhealthy"

if (psi < 50) {
    airQuality = "Good"
}

if (psi >= 50 && psi <= 100) {
    airQuality = "Moderate";
}

if (psi >= 101 && psi <= 200) {
    airQuality = "Unhealthy";
}

if (psi >= 201 && psi <= 300) {
    airQuality = "Very Unhealthy";
}

if (psi > 300) {
    airQuality = "Hazardous";
}

console.log("The air quality is", airQuality);