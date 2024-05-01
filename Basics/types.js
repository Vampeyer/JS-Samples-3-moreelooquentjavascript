

let word = "This is a variable with a string. "

let number = 5 

console.log(typeof word,'ing along again are we?    \n well then lets continue, shall we ? ')


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your name: ', (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});