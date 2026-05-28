// Level 12 — radio-checkbox starter
// TODO: in submit handler read radio via form.elements.color.value and checkbox via form.elements.subscribe.checked

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const color = form.elements.color.value;
  const subscribe = form.elements.subscribe.checked;
  const display = document.getElementById("display-area");
  if (display) {
    display.innerText = `Color: ${color || "None"}. Subscribed: ${subscribe}`;
  }

  console.log("Selection Data:", { color, subscribe });
}

const form = document.getElementById("sample-form");
if (form) {
  form.onsubmit = handleSubmit;
}
// const form = event.target;
// TODO: const color = form.elements.color.value;
// TODO: const subscribe = form.elements.subscribe.checked;
console.log("radio & checkbox scaffold");

// const form = document.getElementById('sample-form');
// const color = form.elements.color.value;
// const isSubscribed = form.elements.subscribe.checked;
