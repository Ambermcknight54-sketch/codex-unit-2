// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value
function handleSubmit(event) {
  // Prevent the page from refreshing on submission
  event.preventDefault();
  function handleSubmit(event) {
    // Access the form via the event target
    const form = event.target;

    // Read values using the name attributes defined in HTML
    const message = form.elements.message.value;
    const email = form.elements.email.value;

    // Display the message in the DOM
    const display = document.getElementById("display-area");
    if (display) {
      display.innerText = `Message: ${message} (from ${email})`;
    }

    console.log("Form submitted:", { message, email });
  }

  // Select the form and assign the submit handler
  const form = document.getElementById("sample-form");
  if (form) {
    form.onsubmit = handleSubmit;
  } // TODO: prevent default when ready
  // event.preventDefault();
  // TODO: const form = event.target; const message = form.elements.message.value; display via innerText
  console.log("form submit scaffold");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
