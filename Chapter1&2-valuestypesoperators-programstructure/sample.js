
// Nested functions example # 1 


function outerFunction(value) {
    return function innerFunction(value) {
    return function nestedFunction(value) {
    return applyOperation(value, function(n) {
    return n * 2;
    });  
    };
    };
    }
    
    function applyOperation(number, operation) {
    return operation(number);
    }
    
    console.log(outerFunction(5)(10)(20)); // Output: 800



    

// function quickdivision(number, divider){
//     return divider(number);
//     {
//     return     
//     }
// }
// console.log(quickdivision())







// console.log(`Down on the sea  \n` + `Lie on the Ocean \n` + `Float on the sea \n   ` + `come code with me` )

// const { type } = require("os")


// console.log(`half of 100 is ${100/2}`)

// let x = 500.3543

// console.log(typeof x , type)


//Boolean   


// //   IMPORTANT CONSOLE ANIMATION

// console.log(100 == 100)
// console.log(50<12)
// console.log( CSSAnimation() )