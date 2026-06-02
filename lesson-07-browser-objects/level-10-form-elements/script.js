// TODO: In the handler, read form.elements.message.value into `message` and set output.innerText
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const message = form.elements.message.value;
//   document.querySelector('#result').innerText = message;
// }
const messageForm = document.querySelector("#sample-form");
messageForm.onsubmit = handleSubmit;

function handleSubmit(event) {
  // Prevent the browser from clearing state / refreshing the page automatically
  event.preventDefault();

  // Target the active form scope element instance safely
  const form = event.target;

  // Extract the string value cleanly through the form.elements object cache tree
  const message = form.elements.message.value;

  // Isolate the display target node container and render the value
  const outputDisplay = document.querySelector("#result");
  outputDisplay.innerText = message;
}

// Bind the submission lifecycle handler to the element instance node
