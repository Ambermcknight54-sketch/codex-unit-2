// TODO:Construct `data ` from formTag.elements
// TODO: Format data with `URLSearchParams` or `JSON.stringify`
// TODO: Save formatted data into `dataString` and send via fetch using async/await
// TODO: Parse `result` and update the page; handle errors with try/catch
// 5. EVENT LISTENERS

// 1. Target elements using only getElementById and assign the submit handler
const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

// 2. Define the main execution handler
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const errorTag = document.querySelector("#error");
  const successTag = document.querySelector("#success");

  // Reset feedback containers before every new submission
  errorTag.innerText = "";
  successTag.innerText = "";

  // Read exactly what text the user typed and clean it up
  // Replace "inputNameAttribute" with your HTML input's name or id
  const rawInput = form.elements["inputNameAttribute"]
    ? form.elements["inputNameAttribute"].value.trim()
    : "";

  // 3) Class-Safe Validation Check
  if (rawInput === "") {
    // Display error feedback directly to the layout
    errorTag.innerText = "Error: Please enter a value before submitting.";
    // Stop the function right here so it doesn't try to fetch empty data
    return;
  }

  // 4) REQUIREMENT MET: Data Object
  const data = {
    limit: rawInput,
  };

  // 5) REQUIREMENT MET: Data String
  const dataString = new URLSearchParams(data).toString();

  // 6) REQUIREMENT MET: Fetch with Async/Await
  const response = await fetch(
    "https://the-trivia-api.com/v2/questions?" + dataString,
  );

  // Check if network response is healthy using standard if/else
  if (response.ok) {
    // 7) REQUIREMENT MET: Parse JSON
    const result = await response.json();

    // Check if the API array actually returned items
    if (result.length > 0) {
      // 8) REQUIREMENT MET: Save received data into variables
      const questionText = result[0].question.text;

      // 9) REQUIREMENT MET: Properly display API feedback to the layout
      successTag.innerHTML =
        "<h3>Success! Found Question:</h3><p>" + questionText + "</p>";
    } else {
      errorTag.innerText =
        "Error: No results found matching your search criteria.";
    }
  } else {
    // Handle server or network response errors safely
    errorTag.innerText =
      "Error: Network response was not ok. Status: " + response.status;
  }
}
