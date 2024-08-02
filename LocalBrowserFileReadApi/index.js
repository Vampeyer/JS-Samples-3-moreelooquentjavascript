import fs from './ffs.mjs'


let div = document.querySelectorAll("#div")

function click(){
fs.readFile('shoppinglist.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);

  div.innerHTML = data;

})};