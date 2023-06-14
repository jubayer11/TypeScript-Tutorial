// interface Person
// {
//     name:string;
//     age:number;
//
//     greet(pharase:string):void;
//
// }
//
// let user1:Person;
//
// user1={
//     name:'jubayer',
//     age:27,
//
//     greet(pharase: string) {
//         console.log(pharase+'   '+this.name);
//     }
// }
//
// user1.greet('Hi there- I am');


//interface with class
interface Named
{
     name:string;
    outputName?:string;
    myMethod?():boolean;

}

interface age
{
    age:number
}

interface Greetable extends Named
{
    greet(pharase:string):void
}

class Person implements Greetable
{
    name:string;
    age=30;
    outputName?:string;
    constructor(name:string,outPutName?:string) {
        this.name=name;

        if (outPutName)
        {
            this.outputName=outPutName;
        }

    }

    greet(this:Person,pharase: string) {
        console.log(pharase+' '+this.name +this.age)

        if (this.outputName)
        {
            console.log(this.outputName);
        }
    }
    myMethod(): boolean {
        return true;
    }
}



let user5=new Person('jubayer');

// let user5.name='some other name';

user5.greet('hello there! i am ');

//function type

//
// type AddFn=(a:number,b:number)=>number;


interface AddFn{
    (a:number,b:number):number
}

let add:AddFn;

add=(a:number,b:number)=>a+b;

add(3,4);



class Department6{
    name:string;

    constructor(n:string) {
        this.name=n;
    }

    describe(this:Department6)
    {
        console.log('department: '+ this.name);
    }

}
const accounting4=new Department6('Accounting');

const accounting4Copy={name:'DUMMY',describe:accounting4.describe}

accounting4Copy.describe()

