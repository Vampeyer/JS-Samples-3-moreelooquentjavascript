

// Short-circuiting of logical operators

// The || ?? and && operators


// They will convert the value on their left side to Boolean
// type in order
// to decide what to do, but depending on the operator and 
//the result of that
// conversion, they will return either the original
// left-hand value or the righthand value.


// The || operator, for example, will return the value to its left when that
// value can be converted to true and will return the value on its right otherwise.
// This has the expected effect when the values are Boolean and does something
// analogous for values of other types.

// console.log("\t \t The ||  short circuitmethod ")
// console.log("console.log(null || \"user\")")
// console.log(null || "user") // or 
// console.log("console.log(false || \"Was false \")")
// console.log(false || "Was false ")
// console.log("console.log(\"Was True\"  || false)")
// console.log("Was True"  || false); 
// // → user
// console.log("console.log(\"Agnes\" || \"user\")")
// console.log("Agnes" || "user")
// console.log( 1 || 0)
// console.log( 0 || 1)

// We can use this functionality as
//  a way to fall back on a default value. If you
// have a value that might be empty, you can 
// put || after it with a replacement
// value. If the initial value can be
//  converted to false, you’ll get the replacement
// instead.


//the && short circuitoperator     
// The && operator works similarly but the other way 
// around. When the value to
// its left is something that converts to false, 
// it returns that value, and otherwise
// it returns the value on its right.
// Another important property of
console.log(typeof ""  )
console.log(Boolean(""))

console.log(typeof ""  && " false string on the left makes  this executed.")

console.log( true , " true && value This is the result of a left true  " && "This is whe result of && and a true left value "  )






// The ?? operator resembles ||, but returns the value on the right only if the
// one on the left is null or undefined, not if it is some other value that can be
// converted to false. Often, this is preferable to the behavior of ||.

// The || executes if the left is true
console.log(0 || 100);
19
// → 100

// The ?? executes if the left is false

console.log(0 ?? 100);
// → 0
console.log(null ?? 100);
// → 100
