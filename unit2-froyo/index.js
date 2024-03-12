// Prompt the user to enter a list of (comma-separated) froyo flavors
const userInput = prompt("enter a list of flavors (separated by commas):");

// Split the input string into an array of flavors
let flavors = userInput.split(",");

// Create an object to store the # of each flavor
const flavorCounts = {};

// Count how many scoops of each flavor
flavors.forEach(function(flavor) {
    flavor = flavor.trim();
    if (flavor in flavorCounts) {
        flavorCounts[flavor]++;
    } else {
        flavorCounts[flavor] = 1;
    }
});

// Display the scoop count in the console
console.log("Flavor Counts:");
console.table(flavorCounts);