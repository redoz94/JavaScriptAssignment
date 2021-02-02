var course1 = parseInt(prompt("course 1?"));
var course2 = parseInt(prompt("course 2?"));
var course3 = parseInt(prompt("course 3?"));
var course4 = parseInt(prompt("course 4?"));
var course5 = parseInt(prompt("course 5?"));
var totalMarks = 500

function percent(){
    var obtainedMarks = course1 + course2 + course3 + course4 + course5;
    var show = obtainedMarks * 100/totalMarks;
    alert(show);
}

percent();