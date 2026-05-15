// Level 07 — onsubmit function starter
// TODO: implement a named handler that accepts event and logs a short explanation
// TODO: assign the handler to form.onsubmit (use the form's id in the HTML)

function handleSubmit(event) {
  // TODO: accept event and log a message mentioning 'onsubmit'
  console.log("onsubmit handler called");
}

// Scaffold assignment (adjust id if needed):
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
// 1. Select the form element using its ID
const form = document.getElementById("sample-form");

// 2. Create the named handler function
function handleSubmit(event) {
  // Prevent the page from reloading on submit
  event.preventDefault();

  // Log the required explanation
  console.log(
    "The 'onsubmit' event occurs when a form is submitted, allowing us to execute code (like validation) before the data is sent.",
  );
}

// 3. Assign the handler to form.onsubmit
if (form) {
  form.onsubmit = handleSubmit;
}
