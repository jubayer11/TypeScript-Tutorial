// function add(n1:number,n2:number):number
// {
//     return n1+n2;
// }
// function printResult(num:number):undefined{
//     console.log('Result: '+num);
//     return;
// }
//
// function addAndHandle(n1:number,n2:number,cb:(num:number)=>void )
// {
//     const result=n1+n2;
//     cb(result);
// }
//
// addAndHandle(10,20,(result)=>{
//     console.log(result);
// })
//
// //function type
//
// let combineValues:(a:number,b:number)=>number;
// combineValues=add;
// console.log(combineValues(8,8));
//
// //will show error for
// combineValues=printResult;
//
// printResult(add(5,12));
//
// let someValue:undefined
