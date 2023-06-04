// Arithmetic operationS
//  1. A D D I T I O N 
    function add(a,b) {
      return a + b;
    }
// 2. S U B T R A C T I O N 
    function subtract (a,b) {
      return a-b; 
    }
// 3. M U L T I P L I C A T I O N 
    function multiply(a,b) {
      return a * b;
    }
// 4. D I V I S I O N 
    function divide(a,b) {
      return a / b;
    }


// Number Buttons or operands and operators functionality
const num9 = document.getElementById("9");
const num8 = document.getElementById("8");
const num7 = document.getElementById("7");
const num6 = document.getElementById("6");
const num5 = document.getElementById("5");
const num4 = document.getElementById("4");
const num3 = document.getElementById("3");
const num2 = document.getElementById("2");
const num1 = document.getElementById("1");
const num0 = document.getElementById("0");
const numdot = document.getElementById("dot");
const numAdd = document.getElementById("add");
const numSubtract = document.getElementById("subtract");
const numMultiply = document.getElementById("multiply");
const numDivide = document.getElementById("divide");
const numAnswer = document.getElementById("answer");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");
const percent = document.getElementById("negative");

clear.addEventListener("click", () => {
  document.getElementById("display-box").innerHTML = "";
})

percent.addEventListener("click", () => {
  document.getElementById("display-box").innerHTML += "-";
})

num9.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "9";
})


num8.addEventListener("click", () => {  
  document.getElementById("display").innerHTML += "8";
})


num7.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "7";
  console.log("9");
})


num6.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "6";
  console.log("9");
})


num5.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "5";
  console.log("9");
})


num4.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "4";
  console.log("9");
})


num3.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "3";
  console.log("9");
})

num2.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "2";
  console.log("9");
})

num1.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "1";
  console.log("9");
})

num0.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "0";
  console.log("9");
})


numdot.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += ".";
})

numAdd.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "+";
})

numSubtract.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "-";
})

numDivide.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "/";
})

numMultiply.addEventListener("click", () => {  
  document.getElementById("display-box").innerHTML += "*";
})

numAnswer.addEventListener("click", () => {
  const num = document.getElementById("display-box").textContent;
  document.getElementById("test").innerHTML = Function(`return ${num}`)();
})
