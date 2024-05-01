function smooth(){
    return "Mirrr"
};
console.log(smooth());


function smooth(){
    return console.log("Mirrr")
};
smooth();

// IIFE Anon Arrow Func

(() => { 
console.log("Brown chicken broan cow , i cannot have anther function likeme inside ! ")
})()