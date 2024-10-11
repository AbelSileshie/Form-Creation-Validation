function initializeForm() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", async (event) => {
    let isvalid = true;
    event.preventDefault();
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();
    const errorMessages = [];
    if (!email.includes("@") || !email.includes(".")) {
      errorMessages.push("Please Enter A valid email");
      isvalid = false;
    }
    if (password.length <= 8) {
      errorMessages.push(
        "Please Enter A strong Password it must be over 8 character"
      );
      isvalid = false;
    }
    if (username.length < 3) {
      errorMessages.push("Please enter A valid Username");
      isvalid = false;
    }

    if (isvalid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.display = "block";
      feedbackDiv.style.color = "#28a745";
      errorMessages.length = 0;
      console.log("Registration successful!");
    } else {
      const formattedErrors = errorMessages.join("<br>");
      feedbackDiv.innerHTML = formattedErrors;
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.style.display = "block";
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeForm);
