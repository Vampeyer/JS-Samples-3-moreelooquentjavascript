

let mood = "light";
22
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark


// You should imagine bindings as tentacles rather than boxes. They do not
// contain values; they grasp them—two bindings can refer to the same value. A
// program can access only the values to which it still has a reference. When you
// need to remember something, you either grow a tentacle to hold on to it or
// reattach one of your existing tentacles to it.
// Let’s look at another example. To remember the number of dollars that
// Luigi still owes you, you create a binding. When he pays back $35, you give
// this binding a new value:
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt)
// ----------------------------------------------------------------------------



// When you define a binding without giving it a value, the tentacle has nothing
// to grasp, so it ends in thin air. If you ask for the value of an empty binding,
// you’ll get the value undefined.
// A single let statement may define multiple bindings. The definitions must
// be separated by commas:
let one = 1, two = 2;
console.log(one + two);
// → 3
// The words var and const can also be used to create bindings, in a similar
// fashion to let:
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda





