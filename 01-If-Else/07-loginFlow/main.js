let username = prompt("Enter your username...");
let password = prompt("Enter your password...");
if (
  username === null ||
  username === "" ||
  username.trim() === "" ||
  username !== "john" ||
  username !== "admin"
) {
  alert("username is required");
} else if (username === "admin" && password === "1234") {
  alert("Hello" + " " + username);
} else if (username === "john" && password === "qwerty") {
  alert("Hello" + " " + username);
} else {
  alert("Invalid username or password");
}
