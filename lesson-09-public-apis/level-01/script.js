const form = document.getElementById("login-form");
const errorEl = document.getElementById("error");
const successEl = document.getElementById("success");

if (form) {
  form.addEventListener("submit", async (event) => {
    // TODO: call event.preventDefault()
    // TODO: build a data object from form fields
    // TODO: use fetch with async/await to POST to a dummy login endpoint
    // Do not commit real API keys — use test endpoints or mocks in tests
    // 1. Prevent page reload
    event.preventDefault();

    // Clear previous messages
    errorEl.innerText = "";
    successEl.innerText = "";

    // 2. Build data object from form fields
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // 3. Perform POST request
      // Replace the URL below with your actual authentication endpoint
      const response = await fetch(
        "https://api.jsoning.com/mock/public/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (response.ok) {
        successEl.innerText = "Login successful!";
      } else {
        errorEl.innerText = `Login failed: Server returned ${response.status}`;
      }
    } catch (error) {
      errorEl.innerText = "Network error: Unable to reach the server.";
    }
  });
}
