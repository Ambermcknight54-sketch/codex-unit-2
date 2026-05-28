// Level 10 starter script
// TODO: POST pre-processed data, parse JSON response, and display three selected values.
const form = document.getElementById("sample-form");
const v1 = document.getElementById("v1");
const v2 = document.getElementById("v2");
const v3 = document.getElementById("v3");
form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: collect data, POST to echo server, parse response, and insert values into v1/v2/v3
  // 1. Collect data from form elements
  const payload = {
    username: form.elements.value,
    email: form.elements.value,
  };

  try {
    // 2. POST the data to the API
    const response = await fetch("https://api.jsoning.com/mock/public/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    // 3. Parse the JSON response
    const data = await response.json();

    // 4. Display the values in the DOM
    v1.innerText = `v1 (Username): ${data.username}`;
    v2.innerText = `v2 (Email): ${data.email}`;
    v3.innerText = `v3 (Status): ${response.status}`;
  } catch (error) {
    console.error("Error submitting form:", error);
    v1.innerText = "v1: Error occurred";
  }
}
