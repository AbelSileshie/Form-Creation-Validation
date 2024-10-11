document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  if (!form || !feedbackDiv) {
    console.error("Required elements are missing from the DOM.");
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let isValid = true;
    const errorMessages = [];

    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();

    if (username.length < 3) {
      isValid = false;
      errorMessages.push("Please enter a username with at least 3 characters.");
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      errorMessages.push("Please enter a valid email address.");
    }

    if (password.length <= 8) {
      isValid = false;
      errorMessages.push("Password must be at least 8 characters long.");
    }

    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      const formattedErrors = errorMessages.join("<br>");
      feedbackDiv.innerHTML = formattedErrors;
      feedbackDiv.style.color = "#dc3545";
    }
  });
});
