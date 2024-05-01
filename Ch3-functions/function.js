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






// A function can have multiple parameters or no parameters at all. In the following example, makeNoise does not list any parameter names, whereas roundTo
// (which rounds n to the nearest multiple of step) lists two:
const makeNoise = function() {
console.log("Pling!");
};
makeNoise();
// → Pling!
const roundTo = function(n, step) {
let remainder = n % step;
return n - remainder + (remainder < step / 2 ? 0 : step);
};
console.log(roundTo(23, 10));
// // → 20
// Some functions, such as roundTo and square, produce a value, and some don’t,
// such as makeNoise, whose only result is a side effect. A return statement
// determines the value the function returns. When control comes across such
// a statement, it immediately jumps out of the current function and gives the
// returned value to the code that called the function. A return keyword without
// an expression after it will cause the function to return undefined. Functions
// that don’t have a return statement at all, such as makeNoise, similarly return
// undefined.
// Parameters to a function behave like regular bindings, but their initial values
// are given by the caller of the function, not the code in the function itself.



