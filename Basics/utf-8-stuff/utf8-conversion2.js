const readline = require('readline');

console.log("\n \t \t Welcome to Vampeyers UTF Data Conversion Tool.  \n  ",
"UTF-Data-Conversion Tool - v1.5")

console.log("The hex type can be with or without the 0x , for example,  0251 and 0x0251 , represent the same hexidecimal value. ,The base hex without a 0x , is a 4-digit value \n ",
" thet represents a UTF Character")
console.log("For reference , look here \n --- https://www.w3schools.com/charsets/ref_utf_latin_ipa.asp\n    as well as here \n  https://www.w3schools.com/charsets/tryit.asp?filename=tryutf_fnof ,",
 "\n for more examples in utf8-referencing.    \n \n   ")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the type of encoding (hex, dec, or fnof): ', (answer) => {
  const encodingTypes = ['hex', 'dec', 'fnof'];
  if (!encodingTypes.includes(answer)) {
    console.error('Invalid encoding type. Please try again.');
    rl.close();
    return;
  }

  rl.question('Enter the UTF character (in the format you selected): ', (input) => {
    let utfChar;
    let hexDecoding;
    let decDecoding;
    let fnofDecoding;

    switch (answer) {
      case 'hex':
        utfChar = parseInt(input, 16);
        
    
        hexDecoding =  input 
        if (input !== `0x${input}`){
        hexDecoding = `0x${input}`
        }


        decDecoding = String.fromCharCode(utfChar);
        fnofDecoding = `&#x${input}`;
        break;
      case 'dec':
        utfChar = parseInt(input, 10);
        hexDecoding = input.toString(16);
        decDecoding = String.fromCharCode(utfChar);
        fnofDecoding = `&#${input}`;
        break;
      case 'fnof':
        utfChar = parseInt(input.replace(/^&#x?/ || `0x`, ''), 16);
        hexDecoding = `&#x${input.replace(/^&#x/ || '0x', '')}`;
        decDecoding = String.fromCharCode(utfChar);
        fnofDecoding = input;
        break;
    }

    console.log(`Hex decoding: ${hexDecoding}`);
    console.log(`Decimal decoding: ${decDecoding}`);
    console.log(`HTML fnof decoding: ${fnofDecoding}`);

    console.log(" You may place your  " ,`HTML fnof decoding: ${fnofDecoding}` , "\n" , " to render in the browser directly as well.")

    rl.close();
  });
});