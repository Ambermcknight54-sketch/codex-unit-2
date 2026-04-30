// Level 11 — textarea-range starter
// TODO: in submit handler read textarea and range values via form.elements and convert range with Number()

function handleSubmit() {
  // event.preventDefault();
  // const form = event.target;
  // TODO: const message = form.elements.message.value;
  // TODO: const volume = Number(form.elements.volume.value);
  console.log("textarea & range scaffold");
}
function handleSubmit(event) {
  // 1. Prevent the page from refreshing
  event.preventDefault();

  // 2. Reference the form and its elements
  const form = event.target;

  // 3. Read the textarea value
  const message = form.elements.message.value;

  // 4. Read the range value and convert it to a Number
  const volume = Number(form.elements.volume.value);

  // 5. Log the results to verify the types
  console.log("Message:", message);
  console.log("Volume Level:", volume, "| Type:", typeof volume);

  // Optional: Simple feedback
  alert(`Message received. Volume set to ${volume}%`);
}

// 6. Attach the listener to the form
const form = document.getElementById("sample-form");
if (form) {
  form.addEventListener("submit", handleSubmit);
}
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
