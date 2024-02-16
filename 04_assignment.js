var Student = /** @class */ (function () {
    function Student(id, name, city, mark) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.mark = mark;
    }
    Student.prototype.getDetails = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", City: ").concat(this.city, ", Marks: ").concat(this.mark));
    };
    return Student;
}());
var jenny = new Student(11, "Jenny", "Pune", 70);
var bill = new Student(22, "Bill", "LA", 60);
var elon = new Student(33, "Elon", "mumbai", 90);
var Stew = new Student(44, "Stew", "Bergen", 80);
var jersy = new Student(55, "Jersy", "gujarat", 95);
jenny.getDetails();
bill.getDetails();
elon.getDetails();
Stew.getDetails();
jersy.getDetails();
console.log("---------------Remove A Duplicate Value------------------------");
var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// console.log(`---------------method1--------------------------`);
// var uniqueArray:number[]=[...new Set(inputArr)];
// console.log(uniqueArray);
console.log("---------------method2--------------------------");
console.log(inputArr);
var uniqueArray = [];
for (var _i = 0, inputArr_1 = inputArr; _i < inputArr_1.length; _i++) {
    var element = inputArr_1[_i];
    if (uniqueArray.indexOf(element) === -1) {
        uniqueArray.push(element);
    }
}
console.log(uniqueArray);
console.log("---------------method3 using the for in loop--------------------------");
var inputArr1 = [11, 23, 11, 44, 55, 41, 23, 8, 7, 11, 6];
console.log(inputArr1);
var uniqueArray1 = [];
for (var index in inputArr1) {
    if (uniqueArray1.indexOf(inputArr1[index])) {
        uniqueArray1.push(inputArr1[index]);
    }
}
console.log(uniqueArray1);
console.log(uniqueArray1.length);
// console.log(
//     `---------------method4 using the filter method--------------------------`
//   );
// // let array1:number[]=[11,22,33,22,55,66,11,33,55];
// // let arrayFilter:number[]=array1.filter(element , index, array1)=>{
// //     return index===array1.indexOf(element);
// // }
