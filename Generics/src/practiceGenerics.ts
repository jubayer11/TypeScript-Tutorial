// const names:Array<string>=[]; //string[];
// names[0].split(' ');
//
//
// const promise=new Promise <string>((resolve)=>
// {
//    setTimeout(()=>
//    {
//        resolve('This is done');
//    },200)
// });
//
// promise.then(data=>
// {
//     data.split(' ');
// });


//generic function

function merge<T extends object, U>(objA: T,objB: U)
{
    return Object.assign(objA,objB);
}

const  mergeObj=merge<{name:string,abc:number[]},{age:number}>({name:'Max',abc:[1,2,3,4]},{age:40});
const  mergeObj5=merge({name:'Max'},5);

mergeObj.name;
mergeObj.age;
mergeObj.abc[0];


//another generic function

interface Lengthy{
    length:number;
   // split(a:string):string[];
}
function  countAndDescription<T extends Lengthy>(element:T):[T,string]
{
    let descriptionText='got no value.';
    // const split=element.split(' ');
    // console.log(split);
    if (element.length===1)
    {
        descriptionText='got one element'
    }
    if (element.length>1)
    {
        descriptionText='Got '+element.length+' element'
    }

    return [element,descriptionText];
}


const obj=countAndDescription(['Hi there','hello']);

console.log(obj);

//The key of constraints
function extractAndConverts<T extends object,U extends keyof T>(obj:T,key:U)
{
    return obj[key];
}

extractAndConverts({name:'jubayer'},'name');


//generic classes

class DataStorage <T extends string|number> {
    private data:T[]=[];


    addItem(item:T){
        this.data.push(item);
    }

    removeItem(item:T)
    {
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems()
    {
        return [...this.data];
    }
}



const textStorage=new DataStorage<string>();
const numberStorage=new DataStorage<number|string>();
// const objectStorage=new DataStorage<object>();

textStorage.addItem('max');
textStorage.addItem('tax');
numberStorage.addItem(5);
numberStorage.addItem('abc');
// objectStorage.addItem({name:'jubayer'});
// objectStorage.addItem({name:'ahmed'});
// objectStorage.removeItem({name:'jubayer'});

textStorage.removeItem('max');
numberStorage.removeItem(5);

console.log(textStorage.getItems(),numberStorage.getItems());

//built in partial type

interface CourseGoal {
    title:string;
    description:string;
    completeUntil:Date;
}


function createCourseGoal(title:string,description:string):CourseGoal
{
    let courseGoal:Partial<CourseGoal>={};
    courseGoal.title=title;
    courseGoal.description=description;


return courseGoal as CourseGoal;
}

const x=createCourseGoal('hello','honey');

console.log(x);






//read only type

const names:Readonly<string[]>=['max','Anna'];
// names.push('Manu');
// names.pop();


//generic types vs union types

const names5:Array<string>=[];
names5[0]. split(' ');

