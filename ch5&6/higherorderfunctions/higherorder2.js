// We don’t have to pass a predefined 
// function to repeat. Often, it is easier
//  to create a function value on the spot instead.

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }}




let labels = [];

repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});

console.log(labels);



// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]













