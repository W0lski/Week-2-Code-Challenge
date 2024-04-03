// Case Swap Function 
// Import the 'readline' module
const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to swap the case of each character in a string
function swapCase(inputString) {
  let swappedString = ''; // Initialize an empty string to store the swapped characters
  for (let i = 0; i < inputString.length; i++) { // Iterate through each character in the input string
    const char = inputString[i]; // Get the current character
    if (char === char.toUpperCase()) { // If the character is uppercase
      swappedString += char.toLowerCase(); // Convert it to lowercase and add it to the result string
    } else { // If the character is lowercase
      swappedString += char.toUpperCase(); // Convert it to uppercase and add it to the result string
    }
  }
  return swappedString; // Return the final swapped string
}

// Ask user for input string
rl.question("Enter a string: ", (input) => {
  const swappedString = swapCase(input); // Call the swapCase function with the input string
  console.log("Swapped case string:", swappedString); // Print the swapped case string
  rl.close(); // Close the readline interface
});