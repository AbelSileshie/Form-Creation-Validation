const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
feedbackDiv.style.display = "block";
addEventListener("submit", async (event) => {
  event.preventDefault();
  const username = form.username.value.trim();
  const password = form.password.value.trim();
  const email = form.email.value.trim();
  const errormessages = [
    "Please Enter A valid email",
    "Please Enter A strong Password it must be over 8 character",
    "Please enter A valid Username",
  ];
  let isvalid = true;
  if (!email.includes("@") || !email.includes(".")) {
    feedbackDiv.innerHTML = errormessages[0];
    isvalid = false;
    console.log(errormessages[0]);
  } else if (password.length <= 8) {
    feedbackDiv.innerHTML = errormessages[1];
    isvalid = false;
    console.log(errormessages[1]);
  } else if (username.length < 3) {
    feedbackDiv.innerHTML = errormessages[2];
    isvalid = false;
    console.log(errormessages[2]);
  } else {
    feedbackDiv.innerHTML = "Sucess";
    console.log("Sucss");
    console.log(username, password, email);
  }
});
