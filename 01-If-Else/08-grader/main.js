let point = +prompt("Enter your point!");

if (point >= 80) {
  console.log("You got A");
} else if (point >= 70 && point < 80) {
  console.log("You got B");
} else if (point >= 60 && point < 70) {
  console.log("You got C");
} else if (point >= 50 && point < 60) {
  console.log("You got D");
} else {
  console.log("You got F");
}
