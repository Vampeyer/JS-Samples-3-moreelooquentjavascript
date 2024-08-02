let newArray = [ 2,4,2,4,4,4,4,2,4,5,0,7,7,34,44,34,]
console.log(newArray); 



let newObj = { 
    key1:"value1", 
    key2:"value 2", 
    key3:"response function here ",
key4:"place the sum of all the elements in a new array , here "


}

function responseFunction(){ 


console.log(" Hello World ")
}

newObj["key3"] = responseFunction()

let result = 0;
for( let numbers in  newArray){
result += newArray[numbers]
}
console.log( " and the result is , "   , result)


for( let each in newObj){
    
    console.log(" Keys " , each , " Values: " , newObj[each] , typeof newObj[each])

}


newObj.key4 = result 


console.log(newObj)

