function initializeForm() {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", async (event) => {
    let isvalid = true;
    event.preventDefault();
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();
    const messages = [];
    if (!email.includes("@") || !email.includes(".")) {
      messages.push("Please Enter A valid email");
      isvalid = false;
    }
    if (password.length <= 8) {
      messages.push(
        "Please Enter A strong Password it must be over 8 character"
      );
      isvalid = false;
    }
    if (username.length < 3) {
      messages.push("Please enter A valid Username");
      isvalid = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", initializeForm);
