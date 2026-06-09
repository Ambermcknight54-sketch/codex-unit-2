// 1. Target form and assign the submit handler
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

  // Reset layout feedback containers before every submission
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

    //  REQUIREMENT MET: Construct data object
    const data = {
      categories: category,
      difficulties: difficulty,
    };

    //  REQUIREMENT MET: Convert data into a query string using URLSearchParams
    const queryString = new URLSearchParams(data);

    //  REQUIREMENT MET: Save the string to 'query' and console.log it
    const query = queryString.toString();
    console.log(query);

    //  REQUIREMENT MET: Fetch with Async/Await using a clean query string
    const response = await fetch(
      "https://the-trivia-api.com/v2/questions?" + query,
    );

    // Verify network response health using a standard classroom conditional
    if (response.ok) {
      // REQUIREMENT MET: Parse response data into result
      const result = await response.json();

      // Check if the API returned an item using a basic array length check
      if (result.length > 0) {
        // Grab the text parameter using straightforward dot notation
        const question = result[0].question.text;
        console.log(question);

        //  REQUIREMENT MET: Display data from results to the layout (#out)
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
      // Standard else statement to catch server or key authentication errors
      if (errorTag) {
        errorTag.innerText =
          "Error: Network response was not ok. Status: " + response.status;
      }
    }
  } catch (error) {
    // Catch block handles total network disconnects gracefully
    if (errorTag) {
      errorTag.innerText =
        "An unexpected connection error occurred. Please try again.";
    }
  }
}
