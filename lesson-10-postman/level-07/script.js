// TODO: Starter for Level 07: API POST practice.

// Students should construct a JSON payload and send it to their chosen API.
console.log("TODO: log one documentation fact here");
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "My First Post",
    body: "Learning how to send JSON payloads is awesome.",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success! Server returned:", data);

    // Fact from documentation: JSONPlaceholder doesn't actually save the data.
    console.log(
      "Fact: The server will return a 201 status code and an ID of 101 to simulate creation.",
    );
  })
  .catch((error) => console.error("Error posting data:", error));
