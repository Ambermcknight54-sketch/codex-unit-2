// TODO: In the submit handler, use event.target to reference the form instead of querying the DOM again.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
// }

const submissionForm = document.querySelector("#sample-form");
submissionForm.onsubmit = handleSubmit;

function handleSubmit(event) {
  // Stop the browser from executing its default page reload behavior
  event.preventDefault();

  /* 🛠️ LOGIC REQUIREMENT: Use event.target to reference the form.
           This dynamically captures the specific DOM node that fired the event.
           We do NOT need to crawl or query the DOM document tree again! */
  const form = event.target;

  // Pull the input string through the target form's elements cache tree
  const userEmail = form.elements.email.value;

  console.log(
    "event.target dynamically references the specific DOM element that dispatched the event, allowing direct node access inside execution blocks.",
  );
  console.log("Captured Data safely from event.target:", userEmail);

  // Pause execution for inspector evaluation if DevTools (F12) are open
  debugger;
}
