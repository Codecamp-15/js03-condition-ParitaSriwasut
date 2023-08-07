let num1 = +prompt("Enter first number!");
let num2 = +prompt("Enter second number!");

let sum = num1 + num2;
if (sum === Number(sum)) {
  console.log(sum);
} else {
  console.log("Invalid number!");
}
