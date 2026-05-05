// Level 04 starter script
// TODO: Await fetch and call response.json() to parse the body.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: fetch and parse JSON, then set result.innerText with a short explanation
  try {
    // 1. Fetch the data from the API
    const response = await fetch("https://api.jsoning.com/mock/public/users");

    // 2. Parse the body as JSON
    const data = await response.json();

    // 3. Update the result with a short explanation
    result.innerText = `Request successful! We retrieved ${data.length} user records from the API.`;
  } catch (error) {
    // Basic error handling
    result.innerText = "Failed to fetch data: " + error.message;
  }
}

if (form) form.onsubmit = handleSubmit;
