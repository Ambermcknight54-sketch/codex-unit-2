// Level 11 — textarea-range starter
// TODO: in submit handler read textarea and range values via form.elements and convert range with Number()

function handleSubmit(event) {
  // 1. Stop the page from reloading
  event.preventDefault{
  // event.preventDefault();
  // 2. Save the form reference
  const form = event.target;

  // 3. Read the textarea (message)
  const message = form.elements.message.value;

  // 4. Read the range (volume) and convert to a Number
  // We use Number() because .value is always a string by default
  const volume = Number(form.elements.volume.value);

  // 5. Display the results
  const display = document.getElementById('display-area');
  if (display) {
    display.innerText = `Volume set to ${volume}. Message: "${message}"`;
  }

  console.log("Form Data:", { message, volume, typeOfVolume: typeof volume });
}

// 6. Assign the handler
const form = document.getElementById('sample-form');
if (form) {
  form.onsubmit = handleSubmit;
}
  // const form = event.target;
  // TODO: const message = form.elements.message.value;
  // TODO: const volume = Number(form.elements.volume.value);
  console.log("textarea & range scaffold");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
