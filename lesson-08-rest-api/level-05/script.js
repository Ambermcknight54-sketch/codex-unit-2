// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
const form = document.getElementById("sample-form");

form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://api.jsoning.com/mock/public/users");
  const userdata = await response.json();
  const userID = userdata.userID;
  const title = userdata.title;
  const isCompleted = userdata.completed;
  const pTag1 = document.getElementById("url");
  const pTag2 = document.getElementById("host");
  const pTag3 = document.getElementById("encoding");
  pTag1.innerText = "User ID: " + userID;
  pTag2.innerText = "Title: " + title;
  pTag3.innerText = "Is Completed: " + isCompleted;
}
