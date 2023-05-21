// Number Buttons or operands and operators functionality

const numdot = document.getElementById("dot");
const numAdd = document.getElementById("add");
const numSubtract = document.getElementById("subtract");
const numMultiply = document.getElementById("multiply");
const numDivide = document.getElementById("divide");
const numAnswer = document.getElementById("answer");
const clear = document.getElementById("clear");
const percent = document.getElementById("percent");
const negative = document.getElementById("negative");
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

clear.addEventListener("click", () => {
  document.getElementById("output").innerHTML = "";
});

percent.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "-";
});
negative.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "-/+";
});

num9.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "9";
});

num8.addEventListener("click", () => {
  document.getElementById("output.calc_output").innerHTML += "8";
});

num7.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "7";
  console.log("9");
});

num6.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "6";
  console.log("9");
});

num5.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "5";
  console.log("9");
});

num4.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "4";
  console.log("9");
});

num3.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "3";
  console.log("9");
});

num2.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "2";
  console.log("9");
});

num1.addEventListener("click", () => {
  document.getElementById("output").innerHTML += "1";
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
  document.getElementById("test").innerHTML = Function(`return ${num}`)();
});
