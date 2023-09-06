let user = String(prompt("Enter your username..."));

if (user === null || user.trim() === "" || user !== "codecamp") {
  user = "guest";
  alert("Welcome " + user);
} else if (user === "codecamp") {
  password = prompt("Enter your password :");
  if (password === "123456") {
    user = "codecamp";
    alert("Welcome " + user);
  } else {
    alert("You put wrong password!!!");
  }
}
