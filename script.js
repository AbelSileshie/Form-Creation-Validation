function initializeForm() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();

    let isValid = true;
    const errorMessages = [];

    if (!email.includes("@") || !email.includes(".")) {
      errorMessages.push("Please Enter A valid email");
      isValid = false;
    }
    if (password.length <= 8) {
      errorMessages.push(
        "Please Enter A strong Password it must be over 8 character"
      );
      isValid = false;
    }
    if (username.length < 3) {
      errorMessages.push("Please enter A valid Username");
      isValid = false;
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      const formattedErrors = errorMessages.join("<br>");
      feedbackDiv.innerHTML = formattedErrors;
      feedbackDiv.style.color = "#dc3545";
      console.log("Registration failed!");
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeForm);
