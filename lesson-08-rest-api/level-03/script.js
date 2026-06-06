// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // 2. Parse the JSON response
  const response = await fetch("https://api.jsoning.com/mock/public/users");
  const pTag = document.getElementById("result");
  pTag.innerText = "async marks a function as asynchronous";
}
if (form) form.onsubmit = handleSubmit;
// TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText
