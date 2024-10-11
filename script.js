document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");
  form.addEventListener("submit", async (event) => {
    function errormessage(A) {
      feedbackDiv.innerHTML = `<br> $ errormessages[A]; `;
      feedbackDiv.style.color = "#dc3545";
      isvalid = false;
    }
    let isvalid = true;
    if (isvalid === true) {
      feedbackDiv.style.display = "block";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.style.display = "Block";
    }
    event.preventDefault();
    const username = form.username.value.trim();
    const password = form.password.value.trim();
    const email = form.email.value.trim();
    const errormessages = [
      "Please Enter A valid email",
      "Please Enter A strong Password it must be over 8 character",
      "Please enter A valid Username",
    ];
    if (!email.includes("@gmail") || !email.includes(".")) {
      errormessage(0);
    } else if (password.length <= 8) {
      errormessage(1);
    } else if (username.length < 3) {
      errormessage(2);
    } else {
      feedbackDiv.innerHTML = "Registration successful!";
    }
  });
});
