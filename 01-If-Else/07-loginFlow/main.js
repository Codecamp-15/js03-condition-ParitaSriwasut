let username = prompt("Enter your username...");
let password = prompt("Enter your password...");

if (username === "admin" && password === "1234") {
  console.log("Hello" + " " + username);
} else if (username === "john" && password === "qwerty") {
  console.log("Hello" + " " + username);
} else {
  console.log("Invalid username or password");
}
