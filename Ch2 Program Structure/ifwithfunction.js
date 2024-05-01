


function action1(){
    console.log("This Is action 1 ")
}

function action2(){
    console.log("This is action 2 ")
}
function action3(){
    console.log("This is action 3 ")
}





let x = "value3"

if(x == "value1"){
    action3()
}
else if (x == "value2"){
    action1()
}
else if(x == "value3"){
    console.log("That was the real value 3 " ) + action3()
}