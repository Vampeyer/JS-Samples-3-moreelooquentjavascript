// A function definition is a regular binding where the value of the binding is
// a function. For example, this code defines square to refer to a function that
// produces the square of a given number:
const square = function(x) {
return x * x;
};
console.log(square(12));
// → 144
// A function is created with an expression that starts with the keyword function
// . Functions have a set of parameters (in this case, only x) and a body, which
// contains the statements that are to be executed when the function is called.
// The body of a function created this way must always be wrapped in braces,
// even when it consists of only a single statement.