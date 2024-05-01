// Bindings
// How does a program keep an internal state? How does it remember things?
// We have seen how to produce new values from old values, but this does not
// change the old values, and the new value must be used immediately or it will
// dissipate again. To catch and hold values, JavaScript provides a thing called a
// binding, or variable:
// let caught = 5 * 5;
// That gives us a second kind of statement. The special word (keyword) let
// indicates that this sentence is going to define a binding. It is followed by the
// name of the binding and, if we want to immediately give it a value, by an =
// operator and an expression.
// The example creates a binding called caught and uses it to grab hold of the
// number that is produced by multiplying 5 by 5.
// After a binding has been defined, its name can be used as an expression. The
// value of such an expression is the value the binding currently holds. Here’s an
// example:
let ten = 10;
console.log(ten * ten);
// // → 100
// When a binding points at a value, that does not mean it is tied to that value
// forever. The = operator can be used at any time on existing bindings to disconnect them from their current value and have them point to a new one:
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
console.log(luigisDebt);
// → 105
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
// The first of these, var (short for “variable”), is the way bindings were declared
// in pre-2015 JavaScript, when let didn’t exist yet. I’ll get back to the precise
// way it differs from let in the next chapter. For now, remember that it mostly
// does the same thing, but we’ll rarely use it in this book because it behaves
// oddly in some situations.
// The word const stands for constant. It defines a constant binding, which
// 23
// points at the same value for as long as it lives. This is useful for bindings that
// just give a name to a value so that you can easily refer to it later.

// 