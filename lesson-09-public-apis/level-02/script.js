const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  // TODO: Build `data` object from `form.elements` (username, password)
  // TODO: Use async/await and fetch to POST to https://dummyjson.com/auth/login
  // TODO: Include headers: { 'Content-Type': 'application/json' }
  // TODO: Parse response into `result` and update `errorEl.innerText` or `successEl.innerText`
  // TODO: On success, call form.reset()
}
