// Level 10 — form-elements starter
// TODO: assign a named function to form.onsubmit that reads a text input value

function handleSubmit() {
  // TODO: prevent default when ready
  // event.preventDefault();
  // TODO: const form = event.target; const message = form.elements.message.value; display via innerText
  console.log("form submit scaffold");
}
  // 2. Capture the form and the values
  const form = event.target;
  const message = form.elements.message.value;
  const email = form.elements.email.value;

  // 3. Log values to the console
  console.log("Message submitted:", message);
  console.log("Email submitted:", email);

  // 4. Optional: Display back to the user via alert or DOM
  alert(`Thank you! We received your message: "${message}"`);
}

// 5. Assign the function to the form's onsubmit property
const form = document.getElementById('sample-form');
if (form) {
  form.onsubmit = handleSubmit;
}
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
