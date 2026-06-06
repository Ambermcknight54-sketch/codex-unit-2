const form = document.getElementById("loginForm");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };
  const datastring = JSON.stringify(data);
  const response = await fetch("https://api.jsoning.com/mock/public/login", {
    method: "POST",
    body: datastring,
    headers: { "Content-Type": "application/json" },
  });
  const result = await response.json();
}
