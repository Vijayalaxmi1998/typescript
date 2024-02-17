// Homogenous Array
var courses = ['Angular', 'React', 'JavaScript'];
console.log(courses);
console.log(courses[0]);
console.log(courses.length);
// Heterogenous 
var coursediff = ['Angular', 123, true];
console.log(coursediff);
coursediff.push('.Net');
coursediff.push(10);
// for(let i = 0; i < coursediff.length; i++) {
//     console.log(coursediff[i]);
// }
// var [a, b , c,d,e] = coursediff;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
var student = {
    firstName: 'jack',
    lastName: 'Sparrow',
    score: 90
};
var firstName = student.firstName, lastName = student.lastName, score = student.score;
console.log(firstName);
console.log(lastName);
console.log(score);
