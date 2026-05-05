// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault();
 try {
    // 1. Fetch the data using await
    const response = await fetch('https://api.jsoning.com/mock/public/users');
    
    // 2. Parse the JSON response
    const data = await response.json();
    
    // 3. Update the result element
    // Converting the object to a string so it displays clearly on the page
    result.innerText = JSON.stringify(data, null, 2);
    
  } catch (error) {
    // Basic error handling
    result.innerText = "Error fetching data: " + error.message;
  }
}
  // TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText
}

if (form) form.onsubmit = handleSubmit;
