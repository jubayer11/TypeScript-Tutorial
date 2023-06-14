"use strict";
// const person:{
//     name:string,
//     age:number,
// }={
//
// const person:{
//     name:string;
//     age:number;
//     hobbies:(string|number)[];
//     role:[number,string];
// }={
let hello;
hello = ['hello'];
var Permission;
(function (Permission) {
    Permission["CanWrite"] = "ADMIN";
    Permission[Permission["READ_ONlY"] = 5] = "READ_ONlY";
    Permission[Permission["AUTH0R"] = 6] = "AUTH0R";
})(Permission || (Permission = {}));
;
const person = {
    name: 'jubayer',
    age: 30,
    hobbies: ['sports', 'cooking', 5],
    role: [2, 'author'],
    permission: Permission.CanWrite,
};
//enum
if (person.permission === Permission.CanWrite) {
    console.log('has permission to write');
}
//
person.role.push('admin');
person.role.pop();
// person.role[1]=10;
for (const hobby of person.hobbies) {
    console.log(hobby);
    // console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}
let favouriteActivites;
favouriteActivites = ['sports', 'cooking', 5, { abc: 3, anc: 6 }, ['abc', 'cdf']];
console.log(favouriteActivites);
console.log(person.name);
