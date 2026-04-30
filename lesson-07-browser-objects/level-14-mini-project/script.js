// Level 14 — mini-project starter
// TODO: build a small form handler that prevents default, reads values via form.elements, validates, displays summary, and resets the form

ffunction handleSubmit(event) {
  // 1. Stop the page from refreshing
  event.preventDefault();
  
  // 2. Reference the form and elements
  const form = event.target;
  const { name, message, volume, category, agreement } = form.elements;

  // 3. Validation Logic
  if (!name.value || !message.value || !agreement.checked) {
    alert("Please fill in all required fields and accept the agreement.");
    return;
  }

  // 4. Create and display a summary
  // (Assuming you have a div with id="summary" in your HTML)
  const summaryDiv = document.querySelector('#summary');
  summaryDiv.innerHTML = `
    <h3>Submission Summary:</h3>
    <ul>
      <li><strong>Name:</strong> ${name.value}</li>
      <li><strong>Message:</strong> ${message.value}</li>
      <li><strong>Volume Level:</strong> ${volume.value}</li>
      <li><strong>Category:</strong> ${category.value}</li>
    </ul>
  `;

  // 5. Reset the form for the next user
  form.reset();
}