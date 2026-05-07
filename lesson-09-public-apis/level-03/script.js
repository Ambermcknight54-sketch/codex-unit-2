const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  // TODO: Wrap fetch code in try/catch
  // TODO: In try: send request, parse `result`, update `successEl` and call formTag.reset()
  // TODO: In catch: console.error(error) and update `errorEl.innerText`
}
