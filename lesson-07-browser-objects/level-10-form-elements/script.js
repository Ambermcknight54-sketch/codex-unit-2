// TODO: In the handler, read form.elements.message.value into `message` and set output.innerText
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const message = form.elements.message.value;
//   document.querySelector('#result').innerText = message;
// }
const messageForm = document.querySelector("#sample-form");

const handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const message = form.elements.message.value;
  const outputDisplay = document.querySelector("#result");
  outputDisplay.innerText = message;
}

messageForm.onsubmit = handleSubmit;