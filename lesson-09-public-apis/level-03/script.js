const form= document.getElementById("loginForm");
form.onsubmit = handleSubmit;
const errorDisplay = document.getElementById("error");
const successDisplay = document.getElementById("success");

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
  } catch (error) {
    debugger;
    console.error("You need to use the POST method");
    
  }