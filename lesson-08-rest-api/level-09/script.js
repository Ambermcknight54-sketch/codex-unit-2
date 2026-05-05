// Level 09 starter script
// TODO: Save a target element and set its innerText to briefly compare GET and POST.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");
// Example: result.innerText = 'GET is for reading; POST is for sending data.'
async function handleSubmit(e) {
  e.preventDefault();

  // Collect values via form.elements
  // form.elements is username, form.elements is email
  const data = {
    username: form.elements.value,
    email: form.elements.value,
  };

  try {
    const response = await fetch("https://api.jsoning.com/mock/public/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      result.innerText =
        "Success! We sent the data as a JSON string and set the 'Content-Type' to 'application/json' so the server understands it.";
    } else {
      result.innerText = `Error: Server responded with status ${response.status}`;
    }
  } catch (error) {
    result.innerText = "Fetch failed: " + error.message;
  }
}
