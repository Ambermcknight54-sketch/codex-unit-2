// Level 11 — textarea-range starter
// TODO: in submit handler read textarea and range values via form.elements and convert range with Number()

function handleSubmit(event) {
  event.preventDefault{
  const form = event.target;
  const message = form.elements.message.value;
  const volume = Number(form.elements.volume.value);

  const display = document.getElementById('display-area');
  if (display) {
    display.innerText = `Volume set to ${volume}. Message: "${message}"`;
  }

  console.log("Form Data:", { message, volume, typeOfVolume: typeof volume });
}
const form = document.getElementById('sample-form');
if (form) {
  form.onsubmit = handleSubmit;
}
  console.log("textarea & range scaffold");
}

