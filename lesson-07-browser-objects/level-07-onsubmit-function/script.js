// Level 07 — onsubmit function starter
// TODO: implement a named handler that accepts event and logs a short explanation
// TODO: assign the handler to form.onsubmit (use the form's id in the HTML)

// 1. Select the form element from the DOM using its HTML ID attribute
const formElement = document.querySelector("#sample-form");
formElement.onsubmit = handleSubmit;
// 2. 🛠️ TASK: Implement a named handler that accepts 'event' and logs a short explanation
function handleSubmit(event) {
  // Prevent the browser's default behavior (refreshing the page instantly)
  event.preventDefault();

  console.log(
    "The form submission was intercepted successfully! This named handler function is mapped directly to the form element's 'onsubmit' lifecycle property.",
  );
}
