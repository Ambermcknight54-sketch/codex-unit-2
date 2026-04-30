// Level 13 — form-reset starter
// TODO: validate one field in submit handler, on success display summary and call form.reset()

function handleSubmit() {
  // event.preventDefault();
  // const form = event.target;
  // TODO: validate fields, show summary in DOM, then call form.reset();
  console.log("form-reset scaffold");
}
// 2. Reference the form and the result div
const form = event.target;
const resultDiv = document.getElementById("result");
const username = form.elements.username.value;

// 3. Simple Validation Check
// Note: HTML5 handles 'required' and 'minlength', but JS provides the custom UI feedback
if (username.length >= 3) {
  // 4. Success: Display message
  resultDiv.textContent = `Success! Welcome, ${username}.`;
  resultDiv.style.color = "green";

  // 5. Reset the form fields
  form.reset();
} else {
  // Failure feedback (if HTML validation is bypassed)
  resultDiv.textContent = "Error: Username is too short.";
  resultDiv.style.color = "red";
}
// Attach the listener
const form = document.getElementById("sample-form");
if (form) {
  form.addEventListener("submit", handleSubmit);
}
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
