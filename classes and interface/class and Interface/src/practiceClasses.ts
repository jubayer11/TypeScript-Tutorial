abstract class Department5{
     // private name:string;
     // private employees:string[]=[];

    // constructor(n:string,n1:string[]) {
    //     this.name=n;
    //     this.employees=n1;
    // }

    static fiscalYear=2020;

    constructor(private readonly id:number,private name:string,protected employees:string[]) {
        Department5.fiscalYear=500;
    }

    static createEmployee(name:string)
    {
        return {name:name}
    }

    abstract describe(this:Department5):void;

    addEmployee(this:Department5,employee:string)
    {
        this.employees.push(employee);

        console.log(this.id,this.name)
    }

    printEmployee(this:Department5)
    {
        console.log(this.employees.length);
        console.log(this.employees);
    }

}

class ITDepartment5 extends Department5{
    private lastReport:string;
    private static instance:ITDepartment5;
    get mostRecentReport()
    {
        return this.lastReport;
    }

    set mostRecentReport(text:string)
    {
        this.lastReport=text;
        //or
        this.addReport(text);
    }

    private constructor(id:number,public admins:string[],private reports:string[]) {
        super(id,'',[]);
        this.lastReport=reports[0];
    }

    static getInstance() {
        if (ITDepartment5.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment5(67,['jubayer'],['abc']);
        return this.instance;
    }


    addEmployee(this:ITDepartment5,employee:string)
    {
        this.employees.push(employee);
    }
     describe(this:ITDepartment5)
    {

        console.log('employee:'+ this.employees);
    }

    addReport(this:ITDepartment5,text:string)
    {
        this.reports.push(text);
        this.lastReport=text;
    }



}
//
// const itD=new ITDepartment5(67,['jubayer'],['abc']);


const itD=ITDepartment5.getInstance();
const itD1=ITDepartment5.getInstance();

console.log('instance1: '+ itD +' instance2: '+itD1);

itD.mostRecentReport='klm';
console.log(itD.mostRecentReport);

itD.addReport('efg');
itD.addEmployee('ahmed');



console.log('d',itD);

const employee1r=Department5.createEmployee('Max');
console.log(employee1r,Department5.fiscalYear);

// const accounting4=new Department5('Accounting');
//const D = new Department5(5,'d1', ['Max']);



//
// itD.employees[2]='ANNA';
// itD.name='New Name';
//
// D.addEmployee('Max5');
// D.addEmployee('Manu');
//
// D.describe();
// D.printEmployee();

// const accounting4Copy={name:'DUMMY',describe:accounting4.describe}
//
// accounting4Copy.describe()