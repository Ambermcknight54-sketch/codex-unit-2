// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");
const pUsername = document.getElementById("username");
const pEmail = document.getElementById("email");
const pId = document.getElementById("id");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: implement fetch and set the three elements' innerText
  try {
    // 1. Fetch the data
    const response = await fetch("https://api.jsoning.com/mock/public/users");

    // 2. Parse as JSON (returns an array of users)
    const users = await response.json();

    // 3. Access the first user in the array
    const firstUser = users;

    // 4. Update the DOM elements
    pUsername.innerText = `Username: ${firstUser.username}`;
    pEmail.innerText = `Email: ${firstUser.email}`;
    pId.innerText = `ID: ${firstUser.id}`;
  } catch (error) {
    pUsername.innerText = "Error loading data.";
    console.error("Fetch error:", error);
  }
}

if (form) form.onsubmit = handleSubmit;
