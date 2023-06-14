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
let hello:any[];
hello=['hello'];
enum Permission {CanWrite='ADMIN',READ_ONlY=5,AUTH0R};
 const person={
    name:'jubayer',
    age:30,
    hobbies:['sports','cooking',5],
    role:[2,'author'],
    permission:Permission.CanWrite,
}

//enum
if (person.permission===Permission.CanWrite)
{
    console.log('has permission to write');
}

//
 person.role.push('admin');
person.role.pop();
// person.role[1]=10;


for (const hobby of person.hobbies)
{
    console.log(hobby);
    // console.log(hobby.toUpperCase());
    // console.log(hobby.map());
}

let favouriteActivites:(string|Number|object)[];

favouriteActivites=['sports','cooking',5,{abc:3,anc:6},['abc','cdf']];
console.log(favouriteActivites);

console.log(person.name);

