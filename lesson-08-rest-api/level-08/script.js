// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const formTag = document.getElementById("sample-form");
const result = document.getElementById("result");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.value,
    email: form.elements.value,
  };
  const pTag = document.getElementById("result");
  const dataString = JSON.stringify({ name: "Alex" });

  const response = await fetch("https://api.jsoning.com/mock/public/users", {
    method: "POST",
    body: dataString,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
