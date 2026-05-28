// Level 14 — mini-project starter
// TODO: build a small form handler that prevents default, reads values via form.elements, validates, displays summary, and resets the form
const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const summaryElement = document.getElementById("summary");
  const name = form.elements.name.value;
  const message = form.elements.message.value;
  const volume = form.elements.volume.value;
  const color = form.elements.color.value;
  const subscribe = form.elements.subscribe.checked;

  if (name === "" || message === "") {
    summaryElement.innerText = "Error: Please fill out both Name and Message.";
    summaryElement.style.color = "red";
    return;
  }
  form.reset();
  console.log("Form processed and reset.");
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
