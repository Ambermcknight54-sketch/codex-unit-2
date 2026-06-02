// TODO: Create handleSubmit(event), call event.preventDefault() and log an explanation.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   console.log('preventDefault called');
// }
const form = document.querySelector("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  console.log(
    "event.preventDefault() was called successfully. This stops the browser from reloading the page upon form submission.",
  );
}
