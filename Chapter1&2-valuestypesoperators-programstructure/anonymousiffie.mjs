

// declared function 

export let newfunk = function(){
    console.log(" Hello there Johnnykins , are you ready for mc ?   ")
}
newfunk()



// Declaration function

 export let x =  function()  {
    console.log("Exported powa ")
 }
 x()
 

//  Anonymous pointer functions
 const xy = () => "mrrr"
 console.log(xy())
 
 const adding = (x1, y1) => x1 + y1;
 console.log(adding(99,70))


//pointer function const obj = {


let obj =  {
  add: function(x, y) {
    return x + y;
  }
};

console.log(obj.add(2, 3)); // 5

//   IIFE  function
(function() {
    console.log("Okay")
  })();

  (function() {
    var message = 'Hello, World!';
    console.log(message); // This will log 'Hello, World!' to the console.
})();




let response = { code: function() { return "Pointer method function ." }()  }
console.log(response.code)




//  BAD _ DONT DO THIS  
// (() => { console.log("merrrrrr") })()


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