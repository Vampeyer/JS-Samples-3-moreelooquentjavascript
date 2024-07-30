// Like function, class can be used both
//  in statements and in expressions.
//   When used as an expression, it doesn’t define a 
//   binding but just produces the constructor as a value.
//  You are allowed to omit the class name in a class expression.


let object = new class { getWord() { return "hello"; } };
console.log(object.getWord());
// → hello