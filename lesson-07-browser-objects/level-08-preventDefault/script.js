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
preventDefault;
function handleSubmit;{
  // 1. ALWAYS call this first to "freeze" the page state
  event.preventDefault();

  // 2. Now it is safe to run your custom logic
  console.log("Success: preventDefault was called first.");
  console.log(
    "Logic: This stops the browser from refreshing, allowing us to stay on the page.",
  );
}

// Attach the handler to the form
const form = document.getElementById("sample-form");
if (form) {
  form.onsubmit = handleSubmit;
}
