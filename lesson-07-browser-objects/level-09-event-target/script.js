// TODO: In the submit handler, use event.target to reference the form instead of querying the DOM again.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
// }
const submissionForm = document.querySelector("#sampleForm");

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  console.log(
    "event.target dynamically references the specific DOM element that dispatched the event, allowing direct node access inside execution blocks.",
  );
  debugger;
}

submissionForm.onsubmit = handleSubmit;
