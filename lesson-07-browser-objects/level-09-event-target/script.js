// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget
1. Select the form
const formElement = document.querySelector('#sample-form');

// 2. Define the handler function
function handleSubmit() {
  // 3. Stop the page from refreshing
  event.preventDefault();

  // 4. Save references using event.target
  const form = event.target;
  
  // 5. Access the input using form.elements and the 'name' attribute
  const messageInput = form.elements.message;

  // 6. Log the results to verify
  console.log("Form ID:", form.id);
  console.log("User typed:", messageInput.value);
}

// 7. Listen for the submit event
formElement.addEventListener('submit', handleSubmit);
function handleSubmit(event) {

  console.log("event.target:", event.target);
  console.log("event.currentTarget:", event.currentTarget);
  // TODO: const form = event.target; use form.elements to access inputs
}

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
