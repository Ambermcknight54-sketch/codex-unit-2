// TODO: Starter for Level 08: implement submit handler.
Level 08 — API Challenge: Integrate with a webpage
const form = document.getElementById('api-form');
const resultOutput = document.getElementById('result');

form.addEventListener('submit'), (event) => {
  event.preventDefault();
  const inputValue = document.getElementById('input').value;
  resultOutput.textContent = "Sending data...";
 fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: inputValue,
      body: 'This post was created via a web form!',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => {
      // Check if the response is successful (Status 201)
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // 5. Success Feedback
      resultOutput.style.color = "green";
      resultOutput.textContent = `Success! Created post with ID: ${data.id}`;
      console.log("Fact: The API echoed back the title: " + data.title);
    })
    .catch((error) => {
      // 6. Error Feedback
      resultOutput.style.color = "red";
      resultOutput.textContent = `Error: ${error.message}`;
    });
};