// // Write your solution in this file!
// let employee = {
//     name: 'Sydney Wendoe',
//     streetAddress: '123 Main St'
//   };

//   // Fn to update employee w/out mutating the original obj;

// function updateEmployeeWithKeyAndValue(employee, key, value){
//    return{ ...employee,     //Used spread operator to !mutate employee
//     [key]: value
// };
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//   employee[key] = value;
//   return employee;
// }

// function deleteFromEmployeeByKey(employee, key) {
//     const newEmployee = { ...employee };
//     delete newEmployee[key];
//     return newEmployee;
//   }

//   function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key];
//     return employee;
//   }

let employee = {
    name: "Walter",
    streetAddress: "00123 Ayoro",
}