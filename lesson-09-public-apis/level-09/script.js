// TODO: Construct `data` from formTag.elements
// TODO: Format data with `URLSearchParams` or `JSON.stringify`
// TODO: Save formatted data into `dataString` and send via fetch using async/await
// TODO: Parse `result` and update the page; handle errors with try/catch
// 5. EVENT LISTENERS

const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

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
      "https://the-trivia-api.com/v2/questions?" + "?" + dataString,
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
