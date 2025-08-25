const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (handleSubmit) => {
  handleSubmit.preventDefault(); // stop page reload

  const userInput = {
    Emailorphone: document.getElementById("emailorphone").value.trim(),
    Password1: document.getElementById("password-1").value.trim(),
    Password2: document.getElementById("password-2").value.trim(),
  };

  // Basic validation
  if (!userInput.Emailorphone || !userInput.Password1 || !userInput.Password2) {
    alert("All fields are required.");
    return;
  }

  if (userInput.Password1 !== userInput.Password2) {
    alert("Passwords don't match, re-check and try again.");
    console.log(userInput);

    // Reset the entire form
    loginForm.reset();
  } else {
    const userEmail = userInput.Emailorphone;
    const userName = userEmail.includes("@")
      ? userEmail.split("@")[0]
      : userEmail;

    alert(`Login successful, welcome back ${userName}!`);
    console.log(userInput);

    // Optionally reset after success
    loginForm.reset();
  }
});
