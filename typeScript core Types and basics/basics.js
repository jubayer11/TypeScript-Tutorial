"use strict";
function add(n1, n2, showResult, result) {
    console.log(typeof n1);
    if (showResult) {
        return n1 + n2;
    }
    console.log(result + n1 + n2);
}
const number1 = 5;
const number2 = 5.9;
const printResult = false;
const resultPhrase = 'result is ';
const result = add(number1, number2, printResult, resultPhrase);
console.log(result);
