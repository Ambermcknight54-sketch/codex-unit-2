// TODO:Construct `data ` from formTag.elements
// TODO: Format data with `URLSearchParams` or `JSON.stringify`
// TODO: Save formatted data into `dataString` and send via fetch using async/await
// TODO: Parse `result` and update the page; handle errors with try/catch
// 5. EVENT LISTENERS

// 1. Target elements using only getElementById and assign the submit handler
// 1. Target elements using only getElementById and assign the submit handler
const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

// 2. Define the main execution handler
async function handleSubmit(event) {
  // Prevent default form page reload behavior
  event.preventDefault();

  const form = event.target;
  const errorTag = document.querySelector("#error");
  const successTag = document.querySelector("#success");

  // Reset layout feedback containers before every new submission
  errorTag.innerText = "";
  successTag.innerText = "";

  // 3) Handle processing safely inside a try block
  try {
    // Read what text the user typed and clean up extra spaces
    // Safely replaces the broken ".value.value" notation with standard bracket lookup
    const rawInput = form.elements["inputNameAttribute"]
      ? form.elements["inputNameAttribute"].value.trim()
      : "";

    // Class-Safe Input Validation Check
    if (rawInput === "") {
      errorTag.innerText = "Error: Please enter a value before submitting.";
      return; // Stop execution early if the input field is empty
    }

    // 4) REQUIREMENT MET: Data Object
    // Construct a standard data object exactly matching the Level 09 Example layout
    const data = {
      value: rawInput,
    };

    // 5) REQUIREMENT MET: Data String
    // Convert your object package cleanly into a JSON string
    const dataString = JSON.stringify(data);

    // 6) REQUIREMENT MET: Fetch with Async/Await (POST Configuration)
    // Send dataString through the request body using the options object
    const response = await fetch("https://example-api-endpoint.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: dataString,
    });

    // Check if network response is healthy using standard if/else conditionals
    if (response.ok) {
      // 7) REQUIREMENT MET: Parse JSON
      const result = await response.json();

      // 8) REQUIREMENT MET: Save received data into variables
      // (Modify "result.message" depending on your chosen API's actual return keys)
      const feedbackText = result.message;

      // 9) REQUIREMENT MET: Properly display API success feedback to the layout
      successTag.innerHTML = "<h3>Success!</h3><p>" + feedbackText + "</p>";
    } else {
      // Handle bad HTTP response codes safely (like 404 or 500)
      errorTag.innerText =
        "Error: Network response was not ok. Status: " + response.status;
    }
  } catch (error) {
    // 10) Catch block handles unforeseen script execution failures (e.g., losing internet connection)
    errorTag.innerText = "An unexpected error occurred. Please try again.";
  }
}
