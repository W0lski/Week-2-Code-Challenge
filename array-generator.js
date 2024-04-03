// Array Generator function

// Import the 'readline' module
const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to generate an array of numbers between two given numbers
function generateArray(start, end) {
  const result = []; // Initialize an empty array to store the generated numbers
  if (start <= end) { // If the first number is less than or equal to the second number
    for (let i = start; i <= end; i++) { // Loop from the start number to the end number
      result.push(i); // Add each number to the result array
    }
  } else { // If the first number is greater than the second number
    for (let i = start; i >= end; i--) { // Loop from the start number to the end number
      result.push(i); // Add each number to the result array
    }
  }
  return result; // Return the generated array
}

// Ask the user for the first number
rl.question("Enter the first number: ", (start) => {
  // Ask the user for the second number
  rl.question("Enter the second number: ", (end) => {
    // Call the generateArray function with the parsed integers of start and end
    const array = generateArray(parseInt(start), parseInt(end));
    // Print the generated array
    console.log("Generated array:", array);
    // Close the readline interface
    rl.close();
  });
});