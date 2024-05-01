


//1. Function Declaration


let x = function(){
    return "returnthatshit"
}
console.log(x())
// This is a traditional function declaration, where
//  the function is declared with the function keyword, 
//  followed by the function name, parameters, and the function body.


//2. Function Expression (Anonymous Function)

let i = 1 
let y = 20
const add = function(i, y) {
    return i + y;
  };
  console.log(add(i,y))



// This is a 
// function expression,
//  where the function is
//   assigned to a variable add.
//    The function itself is anonymous
//    , meaning it doesn't have a name.


// 3. Arrow Function (Anonymous)


// This is a concise way to write a
//  function using an arrow function. 
//  It's similar to a function expression, 
//  but with a more concise syntax.
const adding = (x1, y1) => x1 + y1;
console.log(adding(99,70))




// 4. Immediately Invoked Function Expression (IIFE)

(function() {
  var message = 'Hello, World!';
  console.log(message); // This will log 'Hello, World!' to the console.
})();



// pointer function # 1  











// 5. Pointer Function (Method)


const obj = {
  add: function(x, y) {
    return x + y;
  }
};

console.log(obj.add(2, 3)); // 5

// In this example, add
//  is a method of the obj
//   object. It's a function that 
//   is bound to the object and can be called as
//    a method.





// 6. Constructor Function


function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person = new Person('John', 30);
console.log(person.name); // John
console.log(person.age); // 30
// A constructor function is a special type of
//  function that is used to create objects.
//   It's called with the new keyword, and it
//    sets the this context to the newly created object.






// 8. Async Function


async function fetchData() {
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

fetchData();


async function fetchData() {
    await fetch('https://reqres.in/api/unknown/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.error(err));
}

fetchData();
// An async function is a function that returns
//  a promise. It's used to write asynchronous 
//  code that's easier to read and maintain.

// These are some of the general ways to write 
// functions in JavaScript.





//more 


(() => {
    console.log("Hello world ")
})()

