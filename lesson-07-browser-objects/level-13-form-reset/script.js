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
const sampleForm = document.querySelector("#sample-form");

// 2. Define the form submission event handler
function handleSubmit(event) {
  // 🛠️ TASK: Call preventDefault at handler start to stop the page from refreshing
  event.preventDefault();

  // 🛠️ TASK: Save form via event.target
  const form = event.target;

  // 🛠️ TASK: Read firstName and lastName string values from form.elements
  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;

  // 🛠️ TASK: Write if / else if statements to check values and call form.reset()
  if (firstName === "Bob") {
    console.log("Success: First name is Bob. Resetting form...");
    form.reset(); // Clears all inputs back to their initial state
  } else if (lastName === "Smith") {
    console.log("Success: Last name is Smith. Resetting form...");
    form.reset(); // Clears all inputs back to their initial state
  } else {
    console.log(
      "Validation failed: No match for Bob or Smith. Form values retained.",
    );
  }
}
