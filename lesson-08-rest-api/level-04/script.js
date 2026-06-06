// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // 1. Fetch the data from the API
  const response = await fetch("https://api.jsoning.com/mock/public/users");
  // 2. Parse the body as JSON
  const data = await response.json();
  // 3. Update the result with a short explanation
  const pTag = document.getElementById("result");
  pTag.innerText =
    " Parsing formats the incoming data, data is an object here.";
}
