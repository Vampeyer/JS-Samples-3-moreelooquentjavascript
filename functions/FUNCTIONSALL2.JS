// In JavaScript, a pointer function is a function
//  that returns another function, effectively creating
//   a reference or "pointer" to the inner function.
//    Here's an example of a pointer function:


// Function as a function argument # 1 

function getAdder(amount) {
  
    return function(sum) {
    return function(anotheramount){
        return sum + anotheramount
    };
  };
}

// Usage
var add5 = getAdder(5)(20);
console.log(add5(3)); // Output: 8
var add10 = getAdder(10);
console.log(add10(7)); // Output: 17


// Function as a function














// In this example, getAdder is a pointer function 
// that takes an amount parameter. It returns an inner function sum
//  which adds the amount to the sum argument. We create two pointers,
//   add5 and add10, by calling getAdder with different amount values.
















// Anonymous Arrow Functions 


//Instead of using the function keyword directly, it's more common to use arrow functions for anonymous functions in modern JavaScript:


(() => {
  console.log("I'm an anonymous arrow function.");
})();





console.log(
    (() => {  


        console.log(
            (() => {  
                return "merrr-2-"
            })())



        return "merrr--"
    })())

    console.log(
        (() => {  
            return "merrr--"
        })())