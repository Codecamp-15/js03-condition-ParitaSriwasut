let num1 = +prompt("Enter first number..");
let num2 = +prompt("Enter second number..");
let num3 = +prompt("Enter third number..");

let allNum = [];
allNum.push(num1, num2, num3);

allNum = allNum.sort();
allNum = allNum.reverse();
alert(allNum);
