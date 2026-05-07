// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().
const form = document.getElementById("sample-form");
const result = document.getElementById("result");

async function handleSubmit(event) {
  event.preventDefault(); // Prevents the form from refreshing the page

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    const data = await response.json();

    // Update result with the data retrieved
    result.innerText = `Success! Fetched title: "${data.title}"`;
  } catch (error) {
    result.innerText = "There was an error fetching the data.";
  }
}

if (form) form.onsubmit = handleSubmit;
