// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");
form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  event.preventDefault();
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
