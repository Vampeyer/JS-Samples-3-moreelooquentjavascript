// Can we abstract “doing something N times” as a function? Well, it’s easy to write a function that calls console.log N times.
let N = 20;
function repeatLog(N) {
  for (let i = 1; i < N; i++) {
    console.log(i);
  }
}
repeatLog(N + 1)
// But what if we want to do something other than logging the numbers? Since “doing something” can be represented as a function and functions are just values, we can pass our action as a function value.

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);
// → 0
// → 1
// → 2