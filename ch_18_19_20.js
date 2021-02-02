var course1 = prompt("What course?", "computer");
var course2 = prompt("What course?", "biology");
var course3 = prompt("What course?", "chemistry");
var course4 = prompt("What course?", "physics");
var course5 = prompt("What course?", "math");
var all = course1 + ", " + course2 + ", " + course3 + ", " + course4 + ", "+ course5 ;
var courses = [];

for(courses.length=0; courses<=5; courses.push(all)){
    alert(all);
}



