console.log('TypeScript re');
const add4 = (...numbers: number[]) => {
    console.log('hello hed',numbers);
};

const addedNumbers = add4(5, 10, 2, 3.7);
console.log(addedNumbers);
