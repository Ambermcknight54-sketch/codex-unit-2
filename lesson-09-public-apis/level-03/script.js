const formTag = document.getElementById("loginForm");
const errorDisplay = document.getElementById("error");
const successDisplay = document.getElementById("success");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  
  // Reset visibility states before making a new connection attempt
  errorDisplay.innerText = "";
  successDisplay.innerText = "";
  
  const form = event.target;

  try {
    const response = await fetch("https://api.jsoning.com/mock/public/users");
    
    // Check if the response status returned a non-2xx failure code
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Render success feedback to the DOM and reset form fields cleanly
    successDisplay.innerText = "Login successful!";
    form.reset();
    
  } catch (error) {
    // Distinguish technical debugging specs in console from safe user-facing text
    console.error("Fetch operational failure context:", error);
    
    if (error.message.includes("HTTP Error")) {
      errorDisplay.innerText = "Server error occurred. Please check submission criteria.";
    } else {
      errorDisplay.innerText = "Network failure. Please check your connection and try again.";
    }
  }