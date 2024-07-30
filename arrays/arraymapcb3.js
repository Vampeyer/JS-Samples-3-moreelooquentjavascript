
// Using a callback function with an argument
// Using parseInt() with map() method. 
//The parseInt() function converts strings to integers.
// When used with map(), it converts each element of an
// array of strings to integers.

// Example: Here, we are using parseint with map().


const strings = ['10', '20', '30'];
const integers = strings.map(str => parseInt(str));

console.log(integers); // Output: [10, 20, 30]