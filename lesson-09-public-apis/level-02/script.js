const form2 = document.getElementById("login-form");
const errorEl2 = document.getElementById("error");
const successEl2 = document.getElementById("success");

if (form2) {
  form2.addEventListener("submit", async (e) => {
    // TODO: prevent default, call fetch/login flow
    // TODO: update errorEl2 or successEl2 depending on response
    // On success, call form.reset() per the tasks
    // 1. Clear previous messages to avoid mixed feedback
    errorEl2.textContent = "";
    successEl2.textContent = "";

    // 2. Build the data object
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // 3. POST to the login endpoint
      const response = await fetch(
        "https://api.jsoning.com/mock/public/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      // 4. Handle response
      if (response.ok) {
        successEl2.textContent = "Login successful! Welcome back.";
        form2.reset(); // Clear form fields on success
      } else {
        errorEl2.textContent = "Login failed: Invalid email or password.";
      }
    } catch (err) {
      errorEl2.textContent = "Network error: Unable to connect to the server.";
    }
  });
}
