function addnum(a, b) {
    if (typeof b !== 'undefined') {
        return a + b;
    }
}
console.log(addnum(1));
// optional parameters
function AddNum(num1, num2) {
    if (typeof num2 !== 'undefined') {
        return num1 + num2;
    }
}
AddNum(1);
// Default values 
function display(id, name, role) {
    if (role === void 0) { role = "Guest User"; }
    console.log("Id", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, 'Codemind', 'ITDept');
