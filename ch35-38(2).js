var num = parseInt(prompt("What number?"));

function factorialize(num) {
    if(num < 2) return 1;
    return num *= factorialize(num - 1);
  }

  console.log("the result is " + factorialize(num));