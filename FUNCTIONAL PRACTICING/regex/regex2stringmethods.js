function myFunction() {

    // input string
    let str = "Visit geeksforGeeks!";

    // searching string with modifier i
    let n = str.search(/GeeksforGeeks/i);

    console.log(n);

    // searching string without modifier i
    let n2 = str.search(/GeeksforGeeks/);

    console.log(n2);
}
myFunction();