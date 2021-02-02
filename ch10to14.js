var a = parseInt(prompt("num1?", 7));
var b = parseInt(prompt("num2?", 3));
var sign = prompt("sign?", "+ or - or * or /");


function calc(){
    if(sign === "+"){
        var sum = a + b;
        alert(sum)
    } else if(sign=== "-") {
        var minus = a -b
        alert(minus)
    } else if(sign === "*"){
        var multiply = a * b;
        alert(multiply)
    } else if(sign === "/"){
        var divide = a/b
        alert(divide)
    }
}

calc();

