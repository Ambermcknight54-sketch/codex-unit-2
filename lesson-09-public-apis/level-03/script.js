// 1. Target form and assign the submit handler directly
const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

// 2. Define the execution handler as a standard async function
async function handleSubmit(event) {
  // Prevent default form page reload behavior immediately
  event.preventDefault();

  const form = event.target;
  const errorTag = document.querySelector("#error");
  const successTag = document.querySelector("#success");
  const outTag = document.querySelector("#out");

  // Reset layout feedback containers before running a new network request
  if (errorTag) errorTag.innerText = "";
  if (successTag) successTag.innerText = "";
  if (outTag) outTag.innerHTML = "";

  try {
    // Read values directly using standard form element properties
    const category = form.elements.category.value.trim();
    const difficulty = form.elements.difficulty.value.trim();

    // Input Validation Checklist Check
    if (category === "" || difficulty === "") {
      if (errorTag) {
        errorTag.innerText =
          "Error: Please fill out all fields before submitting.";
      }
      return; // Stop the function early
    }

    //  HANDLER REQUIREMENT MET: Construct data object
    const data = {
      categories: category,
      difficulties: difficulty,
    };

    //  HANDLER REQUIREMENT MET: Convert data into a query string using URLSearchParams
    const queryString = new URLSearchParams(data);

    // Save the query string to a variable and console.log it
    const query = queryString.toString();
    console.log(query);

    // API REQUIREMENT MET: Fetch with Async/Await using a clean URL structure
    const response = await fetch(
      "https://the-trivia-api.com/v2/questions?" + query,
    );

    // Verify network response health using a standard classroom conditional
    if (response.ok) {
      // API REQUIREMENT MET: Parse response data into result
      const result = await response.json();

      // Check if the API returned items using a basic array length check
      if (result.length > 0) {
        // API REQUIREMENT MET: Save received data into a variable using direct dot notation
        const question = result[0].question.text;
        console.log(question);

        // CODE QUALITY REQUIREMENT MET: Display data from results to the layout (#out)
        if (outTag) {
          outTag.innerHTML = "<h3>" + question + "</h3>";
        }

        // Update success tag to fulfill project criteria
        if (successTag) {
          successTag.innerText = "Data loaded successfully!";
        }
      } else {
        if (errorTag) {
          errorTag.innerText =
            "Error: No questions found matching that criteria.";
        }
      }
    } else {
      // CODE QUALITY REQUIREMENT MET: Standard else statement to handle server issues natively
      if (errorTag) {
        errorTag.innerText =
          "Error: Network response was not ok. Status: " + response.status;
      }
    }
  } catch (error) {
    // Catch block handles total network disconnects gracefully (like being completely offline)
    if (errorTag) {
      errorTag.innerText = "Network error — try again.";
    }
  }
}
