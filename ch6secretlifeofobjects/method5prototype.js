// In JavaScript, prototypes
//  are the way to do that. Objects can be linked to 
//  other objects, to magically get all the properties
//   that other object has. Plain old objects created 
//   with {} notation are linked to an object called 
//   Object.prototype.

let empty = {};
console.log(empty.toString);
// → function toString(){…}
console.log(empty.toString());
// → [object Object]

// When an object gets a request for a property that it doesn’t have,
//  its prototype will be searched for the property. If that doesn’t 
//  have it, the prototype’s prototype is searched, and so on until
//   an object without
//  prototype is reached (Object.prototype is such an object).

console.log(Object.getPrototypeOf({}) == Object.prototype);
// → true
console.log(Object.getPrototypeOf(Object.prototype));
// → null