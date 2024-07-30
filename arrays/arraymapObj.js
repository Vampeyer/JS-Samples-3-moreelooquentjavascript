

let arr = [3,6,8,5,74,6];

let resultObj = arr.map((keys , index)=>{ 
  
    return { key: index , value: keys }
 } )

 console.log(resultObj)


//  [
//     { key: 0, value: 3 }, 
//     { key: 1, value: 6 }, 
//     { key: 2, value: 8 }, 
//     { key: 3, value: 5 }, 
//     { key: 4, value: 74 },
//     { key: 5, value: 6 }  
//   ]