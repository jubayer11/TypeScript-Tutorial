"use strict";
function combine(n1, n2, resultConversion) {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'asNumber') {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
}
const combineAges = combine(30, 26, 'asNumber');
console.log(combineAges);
const combineNames = combine('jubayer', 'ahmed', 'asString');
console.log(combineNames);
