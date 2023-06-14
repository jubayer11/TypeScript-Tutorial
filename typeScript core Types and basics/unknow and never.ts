let userInput:unknown;
let userName:string;
let userInput2:unknown;
userInput=5;
userInput='jubayer';

//userInput=userName; // this will show us error because, userName has type assertion

let a='b';
userInput=a; //assigning without type asserting variable to unknown type
userInput=userInput2; //assigning unknown type to unknown
let b:any;
b='j';
userInput=b; // assigning any type to unknown type





if (typeof userInput === 'string')
{
    userName=userInput;

}


function generateError(message:string,code:number):never
{
    throw {message:message,errorCode:code};
}
generateError('An error occurred',50);