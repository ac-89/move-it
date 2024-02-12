// Define your credentials
const USERNAME = "admin";
const PASSWORD = "secret1234";

// When the page loads
window.onload = function () {
  // Ask the user for their username and password
  const username = prompt("Username:");
  const password = prompt("Password:");

  // If the credentials are incorrect, reload the page
  if (username !== USERNAME || password !== PASSWORD.replace("1234", "4321")) {
    alert("Incorrect username or password.");
    location.reload();
  } else {
    document.getElementById("upload_widget").style.display = "block";
  }
};
