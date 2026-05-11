// Level 14 — mini-project starter
// TODO: build a small form handler that prevents default, reads values via form.elements, validates, displays summary, and resets the form

function handleSubmit(event) {
  // 1. Prevent page reload
  event.preventDefault();

  const form = event.target;
  const summaryElement = document.getElementById("summary");

  // 2. Read values via form.elements
  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();
  const volume = Number(form.elements.volume.value);
  const color = form.elements.color.value;
  const subscribe = form.elements.subscribe.checked;

  // 3. Simple Validation
  if (name === "" || message === "") {
    summaryElement.innerText = "Error: Please fill out both Name and Message.";
    summaryElement.style.color = "red";
    return; // Stop execution if validation fails
  }

  // 4. Success: Display Summary
  summaryElement.style.color = "black";
  summaryElement.innerHTML = `
    <strong>Submission Successful!</strong><br>
    Name: ${name}<br>
    Volume Preference: ${volume}<br>
    Favorite Color: ${color || "Not selected"}<br>
    Newsletter: ${subscribe ? "Yes" : "No"}
  `;

  // 5. Reset the form for the next entry
  form.reset();
  console.log("Form processed and reset.");
}

// 6. Assignment
const form = document.getElementById("sample-form");
if (form) {
  form.onsubmit = handleSubmit;
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
