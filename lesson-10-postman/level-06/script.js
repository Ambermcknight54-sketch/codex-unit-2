// TODO: Starter for Level 06: API GET practice.

// Students should replace the URL below with their chosen API endpoint.
// TODO: fetch('https://api.example.com/endpoint')
console.log("TODO: log one documentation fact here");
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => {
    // Logging the data to see the structure
    console.log("API Response:", data);

    // Fact from documentation: The status is 'success' if the image is found
    console.log(
      "Fact: The Dog API returns a JSON object with 'message' (the URL) and 'status' keys.",
    );

    console.log("Random Dog Image URL:", data.message);
  })
  .catch((error) => console.error("Error fetching dog:", error));
