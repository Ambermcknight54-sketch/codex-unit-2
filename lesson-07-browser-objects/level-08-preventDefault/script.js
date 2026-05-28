// TODO: Create handleSubmit(event), call event.preventDefault() and log an explanation.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   console.log('preventDefault called');
// }
const form = document.querySelector("sample-form");

function handleSubmit(event) {
  event.preventDefault();
  console.log(
    "preventDefault stops the default action of the submit event, allowing JavaScript to handle processing locally without resetting the current page state.",
  );
}

form.onsubmit = handleSubmit;
