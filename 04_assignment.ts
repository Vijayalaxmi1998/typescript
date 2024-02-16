class Student {
  id: number;
  name: string;
  city: string;
  mark: number | string;

  constructor(id: number, name: string, city: string, mark: number) {
    this.id = id;
    this.name = name;
    this.city = city;
    this.mark = mark;
  }
  getDetails() {
    console.log(
      `ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.mark}`
    );
  }
}
const jenny = new Student(11, "Jenny", "Pune", 70);
const bill = new Student(22, "Bill", "LA", 60);
const elon = new Student(33, "Elon", "mumbai", 90);
const Stew = new Student(44, "Stew", "Bergen", 80);
const jersy=new Student(55,"Jersy", "gujarat", 95)
jenny.getDetails();
bill.getDetails();
elon.getDetails();
Stew.getDetails();
jersy.getDetails();

console.log(`---------------Remove A Duplicate Value------------------------`);
var inputArr: number[] = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
// console.log(`---------------method1--------------------------`);
// var uniqueArray:number[]=[...new Set(inputArr)];
// console.log(uniqueArray);

console.log(`---------------method2--------------------------`);
console.log(inputArr);

var uniqueArray: number[] = [];
for (const element of inputArr) {
  if (uniqueArray.indexOf(element) === -1) {
    uniqueArray.push(element);
  }
}
console.log(uniqueArray);

console.log(
  `---------------method3 using the for in loop--------------------------`
);
var inputArr1: number[] = [11, 23, 11, 44, 55, 41, 23, 8, 7, 11, 6];
console.log(inputArr1);

var uniqueArray1: number[] = [];
for (const index in inputArr1) {
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