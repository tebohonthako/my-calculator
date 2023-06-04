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

const clear = document.getElementById("clear").value;
const percent = document.getElementById("percent").value;
const negative = document.getElementById("negative").value;
const num9 = document.getElementById("9").value;
const num8 = document.getElementById("8").value;
const num7 = document.getElementById("7").value;
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

clear.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML = "";
});

percent.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "%";
});
negative.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "-/+";
});

num9.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "9";
});

num8.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "8";
  console.log("9");
});

num7.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "7";
  console.log("9");
});

num6.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "6";
  console.log("9");
});

num5.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "5";
  console.log("9");
});

num4.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "4";
  console.log("9");
});

num3.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "3";
  console.log("9");
});

num2.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "2";
  console.log("9");
});

num1.addEventListener("click", () => {
  document.getElementById("finalanswer").innerHTML += "1";
  console.log("9");
});

num0.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "0";
  console.log("9");
});

numdot.addEventListener("click", () => {
  document.getElementById("output").innerHTML += ".";
});

numAdd.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "+";
});

numSubtract.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "-";
});

numDivide.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "/";
});

numMultiply.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "*";
});

numAnswer.addEventListener("click", () => {
  const num = document.getElementById("output").textContent;
  document.getElementById("").innerHTML = Function(`return ${num}`)();
});
