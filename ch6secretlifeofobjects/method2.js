// Methods
// In JavaScript, methods are nothing 
// more than properties that hold 
// function values. This is a simple method:



function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
  let whiteRabbit = {type: "white", speak};
  let hungryRabbit = {type: "hungry", speak};
  
  whiteRabbit.speak("Oh my fur and whiskers");
  // → The white rabbit says 'Oh my fur and whiskers'
  hungryRabbit.speak("Got any carrots?");
  // → The hungry rabbit says 'Got any carrots?'


//   You can think of this as an extra parameter that is passed
//    to the function in a different way than regular parameters. 
//    If you want to provide it explicitly, you can use a 
//    function’s call method, which takes the this value as its first 
//   argument and treats further arguments as normal parameters.



  speak.call(whiteRabbit, "Hurry");
// → The white rabbit says 'Hurry'