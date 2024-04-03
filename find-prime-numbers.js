// Find-Prime-Numbers function

// Import the 'readline' module
const readline = require('readline'); 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime
  if (num % 2 === 0 || num % 3 === 0) return false; // Multiples of 2 and 3 are not prime

  // Check for prime using 6k ± 1 optimization
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false; // If divisible by any number in the form 6k ± 1, not prime
  }
  return true; // Otherwise, it's prime
}

// Function to filter prime numbers from an array
function filterPrimes(array) {
  return array.filter(num => isPrime(num)); // Filter the array using the isPrime function
}

// Ask the user to enter numbers separated by commas
rl.question("Enter numbers separated by commas: ", (input) => {
  const numbers = input.split(',').map(num => parseInt(num)); // Convert the input string to an array of numbers
  const primeNumbers = filterPrimes(numbers); // Call the filterPrimes function to get prime numbers
  console.log("Prime numbers:", primeNumbers); // Print the prime numbers
  rl.close(); // Close the readline interface
});