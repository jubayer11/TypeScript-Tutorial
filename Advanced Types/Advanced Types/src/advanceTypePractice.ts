
//intersection types

type Admin ={
    name:string;
    privileges:string[];
};

type Employee={
    name:string;
    startDate:Date;
};

type ElevatedEmployee=Admin & Employee;

//using interface
//interface ElevatedEmployee extends Admin,Employee{}

const e1:ElevatedEmployee={
    name:'Max',
    privileges:['create-server'],
    startDate:new Date(),

}

//union type
type Combinable= string | number;
type Numeric=number|boolean;

//intersection

type Universal= Combinable | Numeric;

let abcd:Universal;
abcd=1;




function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:string,b:number):string;
function add(a:number,b:string):string;

function add(a:Combinable,b:Combinable)
{
    if (typeof a==='string' || typeof b==='string')
    {
        return a.toString()+b.toString();
    }
    return a+b;
}

const result=add('hello','there!');
const resultNumber=add(5,4);
result.split('');


//optional Chaining

const fetchedUserData={
    id:'u1',
    name:'jubayer',
    job:{title:'CTO',description:'My Own Company'}
};

if (fetchedUserData?.job?.title)
{
    console.log(fetchedUserData?.job?.title);

}

const userInput=null;

const storedData=userInput ?? 'DEFAULT'


type UnknownEmployee=Employee|Admin;

function printEmployeeInformation(emp:UnknownEmployee)
{
    console.log('Name:' +emp.name);
    if ('privileges' in emp)
    {
        console.log('Privileges: '+emp.privileges);
    }

    if ('startDate' in emp)
    {
        console.log('Start Date: '+emp.startDate);
    }



}

printEmployeeInformation({name:'Jubayer',startDate:new Date()});





const abc:Universal=5;

console.log(abc);

//instance  type guard


class Car {
    drive(){
        console.log('Driving a truck ...');
    }

}

class Truck
{
    drive(){
        console.log('Driving a truck ...');
    }
    loadCargo(amount:number)
    {
        console.log('loading cargo...'+amount)
    }
}

type Vehicle=Car | Truck;

const v1=new Car();
const v2=new Truck();

let x:number=1;
function useVehicle(vehicle:Vehicle)
{
    vehicle.drive();

    // if ('loadCargo' in vehicle)
    // {
    //     vehicle.loadCargo(100);
    //
    // }

    //using instance to check
    if (vehicle instanceof Truck)
    {
        vehicle.loadCargo(x);
    }



}

useVehicle(v1);
useVehicle(v2);


interface Bird{

    type:'Bird';
    flyingSpeed:number;
}

interface Horse{
    type:'Horse'
    runningSpeed:number;
}

type Animal=Bird|Horse;

function moveAnimal (animal:Animal)
{
    let speed;

    if (animal.type==='Bird')
    {
        speed=animal.flyingSpeed;
    }
    else if (animal.type==='Horse')
    {
        speed=animal.runningSpeed;
    }
    else {
        speed=0;
    }

    console.log('Moving at speed: '+ speed);
}


moveAnimal({type:'Bird',flyingSpeed:10})


//using interface
// interface Admin ={
//     name:string;
//     privileges:string[];
// };
//
// interface Employee={
//     name:string;
//     startDate:Date;
// };
//
// //using inheritance interface
// interface ElevatedEmployee extends Admin,Employee{}
//
// //using intersection
// //type ElevatedEmployee=Admin & Employee;
//
//
//
// const e1:ElevatedEmployee={
//     name:'Max',
//     privileges:['create-server'],
//     startDate:new Date(),
// }


//Type guards

//Type casting

//const paragraph=document.querySelector('p');

//selecting by id
const paragraph=document.getElementById('PID');


//using input filed

//const userInputElement=<HTMLInputElement>document.getElementById('user-input')!;

//alternative way
//const userInputElement=document.getElementById('user-input')! as HTMLInputElement;
//
// userInputElement.value='Hi there';

//using if check

const userInputElement=document.getElementById('user-input');

if (userInputElement)
{
    (userInputElement as HTMLInputElement).value='Hi there';

}


//index properties

interface ErrorContainer{

    id:string;
    [prop: string]:string;
}

const errorBag:ErrorContainer={
    id:'one',
    email:'Not a valid email',
    userName:'user name is not valid',
};


//function overloads

