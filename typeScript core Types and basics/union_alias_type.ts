
type combinable=number;
type combineStringNumber=(number|string);
type conversionDescriptor='asNumber' |'asString';
function combine(n1:combinable|string,n2:combineStringNumber,resultConversion:conversionDescriptor){

    let result;
    if (typeof n1==='number' && typeof n2==='number' || resultConversion==='asNumber')
    {
        result=+n1 + +n2;
    }

    else {
        result=n1.toString()+n2.toString();
    }
    return result;
}


const  combineAges=combine(30,26,'asNumber');
console.log(combineAges);

const combineNames=combine('jubayer','ahmed','asString');
console.log(combineNames);

