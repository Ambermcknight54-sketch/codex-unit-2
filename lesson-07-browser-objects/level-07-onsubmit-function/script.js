// Level 07 — onsubmit function starter
// TODO: implement a named handler that accepts event and logs a short explanation
// TODO: assign the handler to form.onsubmit (use the form's id in the HTML)

function handleSubmit(event) {
  // TODO: accept event and log a message mentioning 'onsubmit'
console.log("onsubmit handler called");
const form = document.getElementById("sample-form");
function handleSubmit(event) {
  event.preventDefault();
  console.log(
    "The 'onsubmit' event occurs when a form is submitted, allowing us to execute code (like validation) before the data is sent.",
  );
}

if (form) {
  form.onsubmit = handleSubmit;
}
