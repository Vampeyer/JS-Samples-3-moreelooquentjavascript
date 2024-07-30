function thingy(pie) { 
    this.item = "first item "; 
    this.item2 = 54 

    return console.log( "this" ,  `${pie}`, "is" ,  this.item2 , ` and it is  ${this.item}`)
}

let pie = "pumpkin pie";
thingy(pie.slice(8,11))

let sample = " Apple Pie"
thingy(sample)