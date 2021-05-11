const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const buttonAdd = document.getElementById("add");
const buttonDivide = document.getElementById("divide");
const buttonSubtract = document.getElementById("subtract");


function add() {
   const value1 = parseInt(input1.value);
   const value2 = parseInt(input2.value);

   const result= value1 + value2;
   
   input3.value=result;
   
}
function divide() {
   const value1 = parseInt(input1.value);
   const value2 = parseInt(input2.value);

   const result= value1 / value2;
   
   input3.value=result;
   
}

function subtract() {
   const value1 = parseInt(input1.value);
   const value2 = parseInt(input2.value);

   const result= value1 - value2;
   
   input3.value=result;
   
}


buttonAdd.addEventListener("click", add);
buttonDivide.addEventListener("click", divide);
buttonSubtract.addEventListener("click", subtract);
