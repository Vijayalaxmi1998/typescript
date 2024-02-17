const employee= {
    firstName11: "Rupali ",
    id: "10",
    birthYear: 1999,
    designation:"Fronated Developer",
    salary:1000000
  };

  console.log(employee);

  const{firstName11,id,birthYear,designation,salary}=employee;
  console.log(firstName11,id,birthYear,designation);
  console.log(`Employee Name:${firstName11}`);
  console.log(`Employee Id:${id}`);
  console.log(`Employee Birth Year:${birthYear}`);
  console.log(`Employee designation:${designation}`);

console.log(`---------------------------------------------------------------------------------`);
//creating the array of vaccine array
const vaccine:string[]=["J&J","Pfizer","Sputnik"]
//Adding the new element at array
vaccine.push("Covaxin");
//use De-structuring
let[a,b,c,d]:string[]=vaccine;
console.log(`created vacination array is:`);
console.log(vaccine);
console.log(`value after destucturing`);


console.log(a);
console.log(b);
console.log(c);
console.log(d);


  

  
  