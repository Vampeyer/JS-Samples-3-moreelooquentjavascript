
// Example: This example uses the array map() method to
//  concatenate the
//  character ‘A’ with every character of the name. 

// ......But wait .
//.................... Theres MORE ! 
// We are doing it this time by accessing a Arrray.prototype(array) 
// method !  


//Input string
let name = "Geeks";

// New array of character and names
// concatenated with 'A'

let newName = Array.prototype.map.call(name, function (item) {
    return item + 'A';          // name is the first param , where the Array.prototype is pointing too. 
})

// Display output
console.log(newName)