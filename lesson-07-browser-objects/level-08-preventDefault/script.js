// Level 08 — preventDefault starter
// TODO: update your submit handler to call event.preventDefault() before other logic

function handleSubmit(event) {
  // 1. Select the form element
  const form = document.getElementById("sample-form");

  // 2. Define the handler with preventDefault
  function handleSubmit(event) {
    // Always call this first to stop the page from reloading/navigating
    event.preventDefault();

    // Now we can log our explanation safely
    console.log(
      "event.preventDefault() is used to stop the browser's default behavior (reloading the page). " +
        "This allows JavaScript to process form data or update the UI without a disruptive refresh.",
    );
  }

  // 3. Attach the handler to the form
  if (form) {
    form.onsubmit = handleSubmit;
  } // TODO: uncomment the next line when you want to prevent navigation
  // event.preventDefault();
  console.log(
    "submit handler: preventDefault not yet called (uncomment to test)",
  );
}

// Attach scaffold:
// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
