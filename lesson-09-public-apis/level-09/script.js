const formTag = document.getElementById("challengeForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = document.getElementById("challengeForm");
  const errorEl = document.getElementById("error");
  const successEl = document.getElementById("success");

  errorEl.innerText = "";
  successEl.innerText = "";
  
  const form = event.target;
  const userValue = form.elements.value.value;
  const data = { categories: userValue };
  const searchParams = new URLSearchParams(data);
  const dataString = searchParams.toString();
  
  try {
    // 3. Send dataString through the request URL
    const response = await fetch(`https://the-trivia-api.com/v2/questions?${dataString}`);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    // 4. Parse the response into result and handle success
    const result = await response.json();
    
    successEl.innerText = `Success! Fetched Question: "${result.question.text}"`;
    form.reset();
    
  } catch (error) {
    console.error("Challenge API execution failure:", error);
    
    // 5. Present robust error feedback to the user on failure
    errorEl.innerText = "Failed to fetch data. Please check your query parameters and try again.";
  }
} 
  // TODO: Construct `data` from formTag.elements
  // TODO: Format data with `URLSearchParams` or `JSON.stringify`
  // TODO: Save formatted data into `dataString` and send via fetch using async/await
  // TODO: Parse `result` and update the page; handle errors with try/catch
}
