const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: Build data object from formTag.elements and convert with URLSearchParams
  // TODO: Use async/await with fetch to call https://the-trivia-api.com/v2/questions
  // TODO: Parse `result` and display result[0].question.text into the DOM
}
