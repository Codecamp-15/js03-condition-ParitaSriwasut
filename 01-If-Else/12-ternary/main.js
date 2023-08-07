let point = prompt("Enter your point..");

let message;
point >= 80
  ? (massage = "You got A")
  : point >= 70 && point < 80
  ? (massage = "You got B")
  : point >= 60 && point < 70
  ? (massage = "You got C")
  : point >= 50 && point < 60
  ? (massage = "you got D")
  : (massage = "You got F");
console.log(massage);
