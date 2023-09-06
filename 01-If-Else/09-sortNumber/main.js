//first version. by not using if else statement.

// let num1 = +prompt("Enter first number.");
// let num2 = +prompt("Enter second number..");
// let num3 = +prompt("Enter third number..");

// let allNum = [];
// allNum.push(num1, num2, num3);

// allNum = allNum.sort();
// allNum = allNum.reverse();
// console.log(allNum);

//
//
//
//1.handle with different value.
//2. handle with the same value. => sort the number by minimum to max.
//3.show only highest value.

//case1 num1 highest
//case2 num2 highest
//case3 num3 highest

let num1 = +prompt("Enter first number.");
let num2 = +prompt("Enter second number..");
let num3 = +prompt("Enter third number..");

let maxValue;
let midValue;
let minValue;

if (num1 >= num2 && num1 >= num3) {
  maxValue = num1;
  if (num2 >= num3) {
    midValue = num2;
    minValue = num3;
  } else {
    midValue = num3;
    minValue = num2;
  }
} else if (num2 >= num1 && num2 >= num3) {
  maxValue = num2;
  if (num1 >= num2) {
    midValue = num1;
    maxValue = num3;
  } else {
    midValue = num3;
    minValue = num2;
  }
} else if (num3 >= num1 && num3 >= num2) {
  maxValue = num3;
  if (num1 >= num2) {
    midValue = num1;
    minValue = num2;
  } else {
    midValue = num2;
    minValue = num1;
  }
}
console.log(`${maxValue} : ${midValue} : ${minValue}`);
