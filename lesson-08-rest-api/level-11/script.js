// Level 11 starter script
// TODO: Implement a complete flow: create form, collect values, POST to echo server, render response fields.
const form = document.getElementById("sample-form");
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

async function handleSubmit(e) {
  e.preventDefault();
  // TODO: build data object, POST it, parse response, and display three response values
  // 1. Collect values from the form inputs
  const data = {
    one: form.elements["one"].value,
    two: form.elements["two"].value,
    three: form.elements["three"].value,
  };

  try {
    // 2. POST the data to the API
    const response = await fetch("https://api.jsoning.com/mock/public/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    // 3. Parse the JSON response
    const result = await response.json();

    // 4. Update the result elements with the values returned by the server
    r1.innerText = `r1: ${result.one}`;
    r2.innerText = `r2: ${result.two}`;
    r3.innerText = `r3: ${result.three}`;
  } catch (error) {
    r1.innerText = "Error: Failed to process request.";
    console.error("Fetch error:", error);
  }
}

if (form) form.onsubmit = handleSubmit;
