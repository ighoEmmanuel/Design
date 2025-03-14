import readline from 'readline';

// Create an interface for input and output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for their name
rl.question("What is your name? ", (userName) => {
  console.log(`Hello, ${userName}!`);
  rl.close(); // Close the input stream
});
