// const userName = 'Max';
// // userName = 'Maximilian';
// let age = 30;

// age = 29;

function add1(a: number=5, b: number) {
  let result;
  result = a + b;
  return result;
}

add1(5,10);

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = output => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', event => console.log(event));
// }

// printOutput(add(5));

const hobbies = ['Sports', 'Cooking','traveling'];
const activeHobbies = ['Hiking',...hobbies];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Max',
  age: 30
};

const copiedPerson = { ...person };

const add=(...Numbers:number[])=> {
  return Numbers.reduce((result,currentValue)=>
  {
    return result+currentValue;
  },0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2,remainingHobbies);

const { firstName: userName, age } = person;

console.log(userName, age, person);