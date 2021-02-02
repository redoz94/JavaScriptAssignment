var today = new Date();
var dob = new Date(prompt("What's your date of birth?"));
var diff = today - dob

console.log(dob);
console.log(Math.floor((diff/(1000 * 60 * 60 * 24))/365))
console.log("Your age in days is " + Math.floor(diff/(1000 * 60 * 60 * 24)));
