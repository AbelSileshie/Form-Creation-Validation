document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let isValid = true;
    const errorMessages = [];

    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();

    if (!email.includes("@") || !email.includes(".")) {
      errorMessages.push("Please enter a valid email address.");
      isValid = false;
    }

    if (password.length <= 8) {
      errorMessages.push("Password must be at least 8 characters long.");
      isValid = false;
    }

    if (username.length < 3) {
      errorMessages.push("Username must be at least 3 characters long.");
      isValid = false;
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
      errorMessages.length = 0;
    } else {
      const formattedErrors = errorMessages.join("<br>");
      feedbackDiv.innerHTML = formattedErrors;
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
