
function fetcher(){
fetch("./exampletext.txt").then(response => {
    console.log(response.status);
    // → 200
    console.log(response.headers.get("Content-Type"));
    // → text/plain

    console.log(response.url.toStringarrayBuffer)
    // → text/plain
    console.log(response.url)
  })};