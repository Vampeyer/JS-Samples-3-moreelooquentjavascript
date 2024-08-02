let samplearray = [ "f", "ff", "fdgfdgs", 32,4,54,456 , "D" ,"X",6, "G" ,55,345,32,534,645,54, "D ",  " P  "]


let initarray = [];
let firstTwoSum  = 0 
let lastTwoSum = 0

for (let i in samplearray){ 
    // console.log(i ,  " && "  , samplearray[i] );

    if(typeof samplearray[i] === "number"){
        console.log(samplearray[i])
        initarray.push(samplearray[i])


    };


};

console.log(initarray)


let firstend  = initarray.pop()
let secondend  = initarray.pop()

console.log(firstend , secondend)

let last2endtotal = firstend + secondend 
console.log( last2endtotal )

initarray.push(last2endtotal)

console.log(initarray)

let firstbegin  = initarray.shift();
let secondbegin = initarray.shift()

let firstbegtotal = firstbegin + secondbegin;

console.log(firstbegtotal)

initarray.unshift(firstbegtotal)

console.log(initarray)












// let samplearray = [5,6,2,8,45,8,45,3]

// console.log(samplearray.shift())