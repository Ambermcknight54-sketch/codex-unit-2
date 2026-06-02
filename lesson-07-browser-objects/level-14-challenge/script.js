// TODO: Build a small form handler that reads values, conditionally resets the form, and updates the output element.
// Keep logic small and focused for the challenge.
// 1. Select the form element from the DOM
const sampleForm = document.querySelector("#sample-form");
sampleForm.onsubmit = handleSubmit;

// 2. Define the unified form submission handler
function handleSubmit(event) {
  // 🛠️ TASK: Stop the browser from executing its default page refresh sequence
  event.preventDefault();

  // 🛠️ TASK: Reference the form node via event.target
  const form = event.target;

  /* 🛠️ TASK: Read values from form.elements into separate variables 
     Matches <input name="one"> and <input name="two"> precisely */
  const valOne = form.elements.one.value;
  const valTwo = form.elements.two.value;

  // 🛠️ TASK: Select the output tag to update the UI
  const outputDisplay = document.querySelector("#out");

  // Update inner text to reflect the collected inputs immediately
  outputDisplay.innerText = `Submitted: Field One = "${valOne}", Field Two = "${valTwo}"`;

  /* 🛠️ TASK: Use an if condition to decide when to call form.reset()
     Example condition: Reset the form automatically if BOTH fields have data */
  if (valOne !== "" && valTwo !== "") {
    console.log("Both fields complete. Resetting form state...");
    form.reset();
  }
}

// 3. Attach handleSubmit to form.onsubmit
sampleForm.onsubmit = handleSubmit;
