<<<<<<< HEAD
// TODO: Read values from radio buttons and checkboxes using form.elements
// Example starter:
=======
// Level 12 — radio-checkbox starter
// TODO: in submit handler read radio via form.elements.color.value and checkbox via form.elements.subscribe.checked

function handleSubmit(event) {
  // event.preventDefault();
  event.preventDefault();

  // 2. Reference the form
  const form = event.target;

  // 3. Read the Radio Group value
  // This automatically finds the one radio button that is "checked"
  const color = form.elements.color.value;

  // 4. Read the Checkbox state
  // We use .checked because we want a true/false boolean, not the string "on"
  const subscribe = form.elements.subscribe.checked;

  // 5. Display the results
  const display = document.getElementById('display-area');
  if (display) {
    display.innerText = `Color: ${color || 'None'}. Subscribed: ${subscribe}`;
  }

  console.log("Selection Data:", { color, subscribe });
}

// 6. Assign the handler
const form = document.getElementById('sample-form');
if (form) {
  form.onsubmit = handleSubmit;
}
  // const form = event.target;
  // TODO: const color = form.elements.color.value;
  // TODO: const subscribe = form.elements.subscribe.checked;
  console.log("radio & checkbox scaffold");
}

>>>>>>> master
// const form = document.getElementById('sample-form');
// const color = form.elements.color.value;
// const isSubscribed = form.elements.subscribe.checked;
