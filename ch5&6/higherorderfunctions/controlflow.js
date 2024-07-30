



//////////////////////////////////////////////////////////////////////


  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter your input: ', (input) => {
    // Save the input to a variable
    const userInput = input;
    console.log(`You entered: ${userInput}`);
  


  // Do something with the input
  // ...


  const test = 99

  // Basic control flow in functions - Vamp  
  
  function unless(test, input) {
      if (input != test) {
          console.log("test failed ")
      } else { 
          return console.log(" Test passed and test passed code here    ")
      };
    }

unless(test,input)





  readline.close();
});




/// Yeah and feel free to do the validation and sanitization the same from here , 
// use code as a template as needed. 








// in browser prompt is diff .  . . . 
//   let userInput = prompt("Enter something:");
//   console.log("You entered: " + userInput);