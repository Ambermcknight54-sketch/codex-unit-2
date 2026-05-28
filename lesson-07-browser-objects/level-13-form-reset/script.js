// TODO: Implement submit handling that validates fields and calls form.reset() when appropriate.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const firstName = form.elements.firstName.value;
//   const lastName = form.elements.lastName.value;
//   if (firstName === 'Bob') { form.reset(); }
//
// M ID
const profileForm = document.querySelector("#sampleForm");
profileForm.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  if (firstName === "Ava" && lastName === "Mcknight") {
    console.log("Validation approved. Clearing fields back to baseline state.");
    debugger;
    form.reset();
  } else if (firstName === "Leo") {
    console.log("Partial match detected for Leo. Clearing fields.");
    debugger;
    form.reset();
  } else {
    console.log("Validation unfulfilled. Maintaining entries for correction.");
  }
}
