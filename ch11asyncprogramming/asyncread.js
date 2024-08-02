"use strict";
const fs = require('./nodefs');




let div = document.querySelectorAll("#div")

 async function click(){
await fs.fs.readFile('shoppinglist.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);

  div.innerHTML = data;

})};