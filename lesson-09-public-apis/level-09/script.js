const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = document.getElementById("challengeForm");
  const errorEl = document.getElementById("error");
  const successEl = document.getElementById("success");

  errorEl.innerText = "";
  successEl.innerText = "";

  const form = event.target;
  const userValue = form.elements.value.value;
  const data = { categories: userValue };
  const searchParams = new URLSearchParams(data);
  const dataString = searchParams.toString();

  try {
    // 3. Send dataString through the request URL
    const response = await fetch(
      `https://the-trivia-api.com/v2/questions?${dataString}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // 4. Parse the response into result and handle success
    const result = await response.json();

    successEl.innerText = `Success! Fetched Question: "${result.question.text}"`;
    form.reset();
  } catch (error) {
    console.error("Challenge API execution failure:", error);

    // 5. Present robust error feedback to the user on failure
    errorEl.innerText =
      "Failed to fetch data. Please check your query parameters and try again.";
  }
}
// TODO: Construct `data` from formTag.elements
// TODO: Format data with `URLSearchParams` or `JSON.stringify`
// TODO: Save formatted data into `dataString` and send via fetch using async/await
// TODO: Parse `result` and update the page; handle errors with try/catch
// 5. EVENT LISTENERS
const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;
// 2. MAIN FORM HANDLER
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const errorTag = document.querySelector("#error");
  const successTag = document.querySelector("#success");

  errorTag.innerText = "";
  successTag.innerText = "";

  try {
    // Collect data and construct a data object with form.elements
    const data = {
      value: form.elements.value.value,
    };

    // Format data with URLSearchParams and save it into dataString
    const dataString = new URLSearchParams(data).toString();

    // Send dataString through the request URL using async/await with fetch
    const response = await fetch(
      "https://the-trivia-api.com/v2/questions?" + dataString,
    );

    // Check if network response is healthy
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the response into result
    const result = await response.json();

    // Display data from results to the page
    const questionText = result[0].question.text;

    // Display success messages in an element with id="success"
    successTag.innerHTML =
      "<h3>Success! Found Question:</h3><p>" + questionText + "</p>";
  } catch (error) {
    // Display error messages in an element with id="error"
    errorTag.innerText = "Error: " + error.message;
  }
}
