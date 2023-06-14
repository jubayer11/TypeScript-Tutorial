const button=document.getElementById('myBtn');
const input1=document.getElementById('num1');
const input2=document.getElementById('num2');

console.log(document)
function add(num1,num2)
{
    console.log(num1+num2);
}

button.addEventListener("click",function () {
    add(input1.value,input2.value);
})