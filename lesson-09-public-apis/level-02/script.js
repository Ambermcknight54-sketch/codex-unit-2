const form = document.getElementById("login-form");
form.onsubmit = handleSubmit;
const errorEl2 = document.getElementById("error");
const successEl2 = document.getElementById("success");

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    email: formTag.elements.email.event,
    password: formTag.elements.password.event,
  };
  const datastring = JSON.stringify(data);
  const response = await fetch("https://api.jsoning.com/mock/public/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: datastring,
  });
  const result = await response.json();
  const message = result.message;
  const email = result.email;
  const errorTag = document.getElementById("error");
  const successTag = document.getElementById("submit");
  if (message) {
    errorTag.innerText = message;
    successTag.innerText = "";
  } else if (email) {
    successTag.innerText = "You are logged in in as ";
    errorTag.innerText = "";
    formTag.reset();
  }
}
