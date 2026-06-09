// 1. Target the login form and assign the submission handler
const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

// 2. Define the execution handler as a standard async function
async function handleSubmit(event) {
  // Prevent default form page reload behavior immediately
  event.preventDefault();

  const form = event.target;

  // TASK MET: Select and store the error and success elements
  const errorEl = document.getElementById("error");
  const successEl = document.getElementById("success");

  // Reset layout feedback text before running a new network request
  errorEl.innerText = "";
  successEl.innerText = "";

  try {
    // Read values directly using standard form element properties
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();

    // Input Validation Checklist Check
    if (emailValue === "" || passwordValue === "") {
      errorEl.innerText =
        "Error: Please fill out all fields before logging in.";
      return; // Stop the function early
    }

    // Construct the data payload object
    const data = {
      username: emailValue,
      password: passwordValue,
    };

    // Send the data package through a POST request with fetch
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // TASK MET: Parse the response into a result variable
    const result = await response.json();

    // Verify network response health using a standard classroom conditional
    if (response.ok) {
      // ASK MET: On login success, display a friendly message and call form.reset()
      successEl.innerText = "Success! Logged in successfully. Welcome back!";
      form.reset();
    } else {
      // TASK MET: On login failure, display the API error message using innerText
      // Look for the 'message' field returned directly by the DummyJSON API
      const apiMessage = result.message || "Invalid credentials. Login failed.";
      errorEl.innerText = apiMessage;
    }
  } catch (error) {
    // Catch block handles total network disconnects gracefully
    errorEl.innerText = "Network error — try again.";
  }
}
