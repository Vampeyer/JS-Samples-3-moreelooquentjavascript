// Nested functions example 


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











//  Example # 1 



function applyOperation(number, operation) {
    return operation(number);
    }
    
    console.log(applyOperation(5, function(n) {
    return n * 3;
    })); // Output: 15
    
    // give me an exampleof multiple nested functions in this fashion
    
    
    
    function outerFunction(value) {
    return function innerFunction(value) {
    return function nestedFunction(value) {
    return applyOperation(value, function(n) {
    return n * 2;
    });
    };
    };
    }

    function applyOperation(){

    }
    
    console.log(outerFunction(5)(10)(20)); // Output: 800
    
    // In this example, outerFunction takes a value and returns another function innerFunction,
    //  which in turn takes a value and returns yet another function nestedFunction. 
    //  The nestedFunction then calls applyOperation, passing in a function that
    //   multiplies its input by 2.
    //    The result of this chain of operations is the multiplication 
    //    of the final input value (20 in this case) by 2, then by 10, and finally by 5, resulting in 800.








    //  exmaple # 2  ////////////////////////////////////////////////////////////////


    function applyOperation(number, operation) {
        return operation(number);
        }
        
        console.log(applyOperation(5, function(n) {
        return n * 3;
        })); // Output: 15
        
        // give me an exampleof multiple nested functions in this fashion
        
        
        
        // Here is an example of multiple nested functions:
        
        
        function applyOperation(number, operation) {
          return operation(number);
        }
        
        function multiplyByX(x) {
          return function(y) {
            return y * x;
          };
        }
        
        function addY(y) {
          return function(z) {
            return z + y;
          };
        }
        
        console.log(applyOperation(5, multiplyByX(3))); // Output: 15
        console.log(applyOperation(10, addY(5))); // Output: 15
        console.log(applyOperation(7, addY(3).concat(multiplyByX(2)))); // Output: 17


        // In this example, applyOperation is a function that takes a number and an operation, and 
        // returns the result of applying that operation to the number. multiplyByX is a function
        //  that returns another function that multiplies its input by x. addY is a function that
        //   returns another function that adds y to its input.
        
        // The example shows how to use these functions to perform different
        //  operations on numbers. First, we use multiplyByX to multiply 5 by 3,
        //   then we use addY to add 5 to 10, and finally we use addY and multiplyByX 
        //   together to add 3 to 7 and then multiply the result by 2.