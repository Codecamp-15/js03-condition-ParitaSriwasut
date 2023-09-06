let login = prompt("Enter your username");
let massage;
login == "Employee"
  ? (massage = "Hello!")
  : login == "Director"
  ? (massage = "Greetings :3")
  : login == ""
  ? (massage = "No login!!!")
  : (massage = "");

console.log(massage);
