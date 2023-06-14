//Project State Management

class ProjectState{

    private listeners:any[]=[];
    private projects:any[]=[];

    private static instance:ProjectState
    private constructor() {

    }

    static getInstance()
    {
        if (this.instance)
        {
            return this.instance;
        }

        this.instance=new ProjectState();
        return this.instance;
    }

    addListener(listenerFn:Function)
    {
        this.listeners.push(listenerFn);
    }
    addProject(title:string,description:string,numOfPeople:number)
    {
        const newProject={
            id:Math.random().toString(),
            title:title,
            description:description,
            people:numOfPeople
        };

        this.projects.push(newProject);

        for (const listenerFn of this.listeners)
        {
            listenerFn(this.projects.slice());
        }
    }
}

const projectState=ProjectState.getInstance();


//validation logic
interface Validatable{
    value:string|number;
    required?:boolean;
    minLength?:number;
    maxLength?:number;
    min?:number;
    max?:number;
}

function validate(validateableInput:Validatable)
{
    let isValid=true;

    if (validateableInput.required)
    {
            isValid=isValid && validateableInput.value.toString().trim().length !==0;

    }
    if (validateableInput.minLength != null && typeof validateableInput.value==='string')
    {
        isValid=isValid && validateableInput.value.length>validateableInput.minLength
    }
    if (validateableInput.maxLength != null && typeof validateableInput.value==='string')
    {
        isValid=isValid && validateableInput.value.length<validateableInput.maxLength
    }

    if (validateableInput.min!=null && typeof validateableInput.value==='number')
    {
        isValid=isValid && validateableInput.value>validateableInput.min;
    }
    if (validateableInput.max!=null && typeof validateableInput.value==='number')
    {
        isValid=isValid && validateableInput.value<validateableInput.max;
    }

    return isValid;
}


//autobind decorator
function autobind(_target:any,_methodName:string,descriptor:PropertyDescriptor)
{
    const originalMethod=descriptor.value;
    const adjDescriptor:PropertyDescriptor={
        get()
        {
            const boundFn=originalMethod.bind(this);
            return boundFn;
        }
    };

    return adjDescriptor;

}


class ProjectList{
    templateElement:HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element:HTMLElement;
    assignProjects:any[];
    constructor(private type:'active'|'finished') {
        this.templateElement=document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement=document.getElementById('app')! as HTMLDivElement;
        this.assignProjects=[];

        const importedNode=document.importNode(this.templateElement.content,true);
        this.element=importedNode.firstElementChild as HTMLElement;
        this.element.id=`${this.type}=projects`
        projectState.addListener((projects:any)=>{
            this.assignProjects=projects;
            this.renderProjects();
        });
        this.attach();
        this.renderContent();

    }

    private renderProjects()
    {
        const listEl=document.getElementById(`${this.type}-project-list`)! as HTMLUListElement;

        for (const prjItem of this.assignProjects ){
            const listItem=document.createElement('li');
            listItem.textContent=prjItem.title;
            listEl.appendChild(listItem)
        }
    }

    private renderContent()
    {
        const listId=`${this.type}-project-list`;
        this.element.querySelector('ul')!.id=listId;
        this.element.querySelector('h2')!.textContent=this.type.toUpperCase()+' PROJECTS'
    }

    private attach()
    {
        this.hostElement.insertAdjacentElement('beforeend',this.element);
    }
}


class ProjectInput
{
    templateElement:HTMLTemplateElement;
    hostElement:HTMLDivElement;
    element:HTMLFormElement;

    titleInput:HTMLInputElement;
    descriptionInput:HTMLInputElement;

    peopleInput:HTMLInputElement;

    constructor() {
        this.templateElement=document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement=document.getElementById('app')! as HTMLDivElement;

        const importedNode=document.importNode(this.templateElement.content,true);
        this.element=importedNode.firstElementChild as HTMLFormElement;


        this.element.id='user-input';
        this.titleInput=this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInput=this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInput=this.element.querySelector('#people')!;

        this.configure();
        this.attach();


    }
    private gatherUserInput():[string,string,number]|void
    {
        const enteredTitle=this.titleInput.value;
        const enteredDescription=this.descriptionInput.value;
        const enteredPeople=this.peopleInput.value;

        const titleValidatble:Validatable={
            value:enteredTitle,
            required:true,
        }

        const descriptionValidatble:Validatable={
            value:enteredDescription,
            required:true,
            minLength:5
        }

        const peopleValidatble:Validatable={
            value:+enteredPeople,
            required:true,
            min:1,max:5

        }

        if (
            !validate(titleValidatble) ||
            !validate(descriptionValidatble) ||
            !validate(peopleValidatble)


        ){
            alert('invalid input! please try again');
            return;
        }
        else {
            return [enteredTitle,enteredDescription,+enteredPeople];
        }


    }
    @autobind
    private submitHandler(event:Event){
        event.preventDefault();
        const userInput=this.gatherUserInput();
        if (Array.isArray(userInput))
        {
            const [title,description,people]=userInput;

            projectState.addProject(title,description,people);
            console.log(title,description,people);
        }
    }


    private configure()
    {
        this.element.addEventListener('submit',this.submitHandler)
    }

    private attach()
    {
        this.hostElement.insertAdjacentElement('afterbegin',this.element);
    }
}


const prjInput=new ProjectInput();

const activePrjList=new ProjectList('active');
const finishedPrjList=new ProjectList('finished');

