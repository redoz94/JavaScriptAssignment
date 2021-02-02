var totalMarks = 500;
var obtainedMarks = parseInt(prompt("How much in course1?"));
var obtainedMarkso = parseInt(prompt("How much in course2?"));
var obtainedMarkso = parseInt(prompt("How much in course3?"));
var obtainedMarksf = parseInt(prompt("How much in course3?"));
var obtainedMarksfi = parseInt(prompt("How much in course3?"));
var show = (obtainedMarks+obtainedMarkso+obtainedMarkso+obtainedMarksf+obtainedMarksfi)*100/totalMarks;

switch(show){
    case show >=90 && show <=100:
        console.log("A+");
        break;
    case show >= 75 && show <=89:
        console.log("A");
        break
        case show >= 60 && show <=74:
        console.log("B");
        break;
        case show >= 45 && show <=45:
        console.log("C");
        break
}

console.log(show + "%")
