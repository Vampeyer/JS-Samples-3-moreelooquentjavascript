const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the UTF-8 character in hexadecimal format: \n Example( 0x0251 )  : ', (hexChar) => {
  // Convert the hexadecimal character to decimal
  const decimalChar = parseInt(hexChar, 16);

  // Convert decimal character to HTML entity (fnof)
  const fnofChar = String.fromCharCode(decimalChar);

  console.log(`UTF-8 Hexadecimal: ${hexChar}`);
  console.log(`UTF-8 Decimal: ${decimalChar}`);
  console.log(`HTML Entity (fnof): ${fnofChar}`);

  rl.close();
});