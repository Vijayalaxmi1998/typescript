var employee = {
    firstName11: "Rupali ",
    id: "10",
    birthYear: 1999,
    designation: "Fronated Developer",
    salary: 1000000
};
console.log(employee);
var firstName11 = employee.firstName11, id = employee.id, birthYear = employee.birthYear, designation = employee.designation, salary = employee.salary;
console.log(firstName11, id, birthYear, designation);
console.log("Employee Name:".concat(firstName11));
console.log("Employee Id:".concat(id));
console.log("Employee Birth Year:".concat(birthYear));
console.log("Employee designation:".concat(designation));
console.log("---------------------------------------------------------------------------------");
//creating the array of vaccine array
var vaccine = ["J&J", "Pfizer", "Sputnik"];
//Adding the new element at array
vaccine.push("Covaxin");
//use De-structuring
var a = vaccine[0], b = vaccine[1], c = vaccine[2], d = vaccine[3];
console.log("created vacination array is:");
console.log(vaccine);
console.log("value after destucturing");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
