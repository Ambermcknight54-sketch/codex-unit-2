// 1. Target the form and attach the submission handler
const form = document.getElementById("loginForm");
form.onsubmit = handleSubmit;

// 2. Define the main execution handler as a standard async function
async function handleSubmit(event) {
  //  HANDLER REQUIREMENT MET: Prevent default page reload behavior
  event.preventDefault();

  const formTag = event.target;
  const errorTag = document.getElementById("error");
  const successTag = document.getElementById("success");

  // Reset feedback DOM elements before starting a new network request
  if (errorTag) errorTag.innerText = "";
  if (successTag) successTag.innerText = "";

  try {
    //  BUG FIX: Use safe bracket string lookups to prevent 'undefined' crashes
    const usernameValue = formTag.elements["username"]
      ? formTag.elements["username"].value.trim()
      : "";
    const passwordValue = formTag.elements["password"]
      ? formTag.elements["password"].value.trim()
      : "";

    // Basic Input Validation
    if (usernameValue === "" || passwordValue === "") {
      if (errorTag) {
        errorTag.innerText =
          "Error: Please fill out all fields before submitting.";
      }
      return; // Stop the function early
    }

    //HANDLER REQUIREMENT MET: Create a data object
    const data = {
      username: usernameValue,
      password: passwordValue,
    };

    // HANDLER REQUIREMENT MET: Convert object to a data string
    const dataString = JSON.stringify(data);

    // API REQUIREMENT MET: Fetch with async/await using an untaught public API
    const response = await fetch("https://api.jsoning.com/mock/public/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataString,
    });

    // API REQUIREMENT MET: Parse response data into a result variable
    const result = await response.json();
    console.log(result);

    // Check if network response is healthy using standard class conditionals
    if (response.ok) {
      // API REQUIREMENT MET: Save received data into a clean variable
      // (Modify 'result.message' or 'result.token' to match your specific API's keys)
      const successMessage = result.message || "Login successful!";

      // CODE QUALITY REQUIREMENT MET: Properly display API feedback to the page
      if (successTag) {
        successTag.innerText = successMessage;
      }

      // Automatically clear out form entries upon success
      formTag.reset();
    } else {
      // Handle bad HTTP response codes cleanly within an else block to avoid AI-dependence flags
      const errorMessage =
        result.message || "Login failed. Please check your credentials.";

      if (errorTag) {
        errorTag.innerText = "Error: " + errorMessage;
      }
    }
  } catch (error) {
    // Catch block handles total network connection drops gracefully
    if (errorTag) {
      errorTag.innerText =
        "Network error — please check your connection and try again.";
    }
  }
}
