const formTag = document.getElementById("queryForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  // TODO: Read form values with formTag.elements and create `data` object
  // TODO: Use `new URLSearchParams(data)` to create a query string and save to `query`
  // TODO: console.log(query)
}
