// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic

function handleSubmit(event) {
  // TODO: uncomment the next line when you want to prevent navigation
  // event.preventDefault();
  console.log(
    "submit handler: preventDefault not yet called (uncomment to test)",
  );
}

// Attach scaffold:
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
function handleSubmit(event) {
  // 1. Stop the browser from reloading the page
  event.preventDefault();

  // 2. Log the explanation as required by the task
  console.log(
    "event.preventDefault() is used to stop the default form submission (page reload) so we can handle the data with JavaScript.",
  );
}

// 3. Attach the handler to the form
const form = document.getElementById("sample-form");
if (form) {
  form.onsubmit = handleSubmit;
}
