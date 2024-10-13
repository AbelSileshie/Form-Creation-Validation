async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear loading message before adding new content
    dataContainer.innerHTML = "";

    const userList = document.createElement("ul");
    users.forEach((user) => {
      const userItem = document.createElement("li");
      userItem.textContent = user.name;
      userList.appendChild(userItem);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "";
    dataContainer.textContent = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
