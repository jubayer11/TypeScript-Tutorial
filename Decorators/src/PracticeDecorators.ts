function Logger(logString:string){

    console.log('Logger Factory');
    return function (constructor:Function)
    {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template:string,hookId:string)
{
    console.log('Template Factory');

    return function<T extends {new(...args:any[]):{name:string} }> (originalConstructor:T)
    {

        return class extends originalConstructor{
            constructor(..._:any[]) {

                super();
                console.log('Rendering Template');
                const hookEl=document.getElementById(hookId);

                if (hookEl)
                {
                    hookEl.innerHTML=template;

                    hookEl.querySelector('h1')!.textContent=this.name;
                }
            }
        }
    }
}



// @Logger('LOGGING -PERSON')

// @Logger('Log Decorator')
@WithTemplate('<h1>using decorator to insert html</h1>','app')
@Logger('logger factory')
class Person{
    name='Max';

    constructor() {
        console.log('Creating person object');
    }
}

const pers=new Person();

console.log(pers);

function Log(target:any,propertyName:string|symbol)
{
    console.log('property decorator');
    console.log(target,propertyName);
}

function Log2(target:any,name:string|symbol,descriptor:PropertyDescriptor){
    console.log('Accessor decorator');
    console.log('target',target);
    console.log('name',name);
    console.log('accessor descriptor',descriptor);

}

function Log3(target:any,name:string|symbol,descriptor:PropertyDescriptor)
{

    console.log('method decorator');
    console.log('target',target);
    console.log('name',name);
    console.log('method descriptor',descriptor);
}

function Log4(target:any,name:string|symbol,position:number)
{
    console.log('Property decorator');
    console.log('target',target);
    console.log('name',name);
    console.log('position',position);
}



//divine into properties
class Product{

    @Log
    title:string='hello';
     private _price:number;




     @Log2
     set price(val:number)
     {
         if (val>0)
         {
             this._price=val;

         }
         else {
             throw new Error('price value can not be negative number');
         }
     }

     get price()
     {
         return this._price;
     }
    constructor(t:string,p:number) {
        this.title=t;
        this._price=p;
    }

    @Log3
    getPriceWithTax(@Log4 tax:number)
    {
        return this._price*(1+tax);
    }

}

function Autobind(_:any,_1:string|symbol,descriptor:PropertyDescriptor)
{
    const originalMethod=descriptor.value;
    const adjDescriptor:PropertyDescriptor={
        configurable:true,
        enumerable:false,
        get(){
          const  boundFn=originalMethod.bind(this);
          return boundFn;
        },

    };

    return adjDescriptor;

}

class Printer{
    message='The works!';

    @Autobind
    showMessage()
    {
        console.log(this.message);
    }
}

const p=new Printer();

const button=document.querySelector('button')!;

// button.addEventListener('click',p.showMessage.bind(p))

button.addEventListener('click',p.showMessage)


//validation with decorator


interface ValidatorConfig{
    [property:string]:{
        [validatableProp:string]:string[] //['required','positive']
    }
}

const registeredValidators:ValidatorConfig={

}
function Required(target:any,propName:string)
{
    registeredValidators[target.constructor.name]={
        ...registeredValidators[target.constructor.name],
        [propName]:['required']
    }
}

function PositiveNumber(target:any,propName:string)
{
    registeredValidators[target.constructor.name]={
        ...registeredValidators[target.constructor.name],
        [propName]:['required']
    }
}

function validate(obj:any)
{
    const objValidatorConfig=registeredValidators[obj.constructor.name]

    if (!objValidatorConfig)
    {
        return true;
    }
    let isValid=true;
    for (const prop in objValidatorConfig)
    {
        for (const validator of objValidatorConfig[prop])
        {
            switch (validator)
            {
                case 'required':
                    isValid= isValid && !!obj[prop];
                    break;

                case 'positive':
                    isValid= isValid && obj[prop]>0;
                    break;
            }
        }
    }

    return isValid;
}
class Course{

    @Required
    title:string;
    @PositiveNumber
    price:number;

    constructor(t:string,p:number) {
        this.title=t;
        this.price=p;
    }
}


const courseForm=document.querySelector('form')!;
courseForm.addEventListener('submit',event=>
{
    event.preventDefault();
    const titleEl=document.getElementById('title') as HTMLInputElement;
    const priceEl=document.getElementById('price') as HTMLInputElement;

    const title= titleEl.value;
    const price= +priceEl.value;

    const createdCourse=new Course(title,price);

    if (!validate(createdCourse))
    {
         alert('Error');
         return;
    }

    console.log(createdCourse);

});


