// Level 07 starter script
// TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
const form = document.getElementById("sample-form");
const result = document.getElementById("result");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    username: form.elements.value,
    email: form.elements.value,
  };
    const settings = {

    }
    const response = await fetch("https://api.jsoning.com/mock/public/users", {method: " POST", body}};
    const pTag =document.getElementById("result")
      method: "POST",
       body; "datastring",
       headers; {
        "Content-Type"; "application/json",
      }
   
    

  


