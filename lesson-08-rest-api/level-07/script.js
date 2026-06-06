// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const data = {
    username: form.elements.username.value,
    email: form.elements.email.value,
  };
  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    body: "datastring",
  });

  result.innerText =
    "Posted — inspect response in console or check for errors.";
}
