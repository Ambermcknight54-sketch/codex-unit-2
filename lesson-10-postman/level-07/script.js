// TODO: Starter for Level 07: API POST practice.

// Students should construct a JSON payload and send it to their chosen API.
console.log("POST requests to JSONPlaceholder simulate a database insertion and return a new resource with an id of 101, but the data is not permanently saved.");
fetch("https://api.genderize.idsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "My First Post",
    body: "Learning how to send JSON payloads is awesome.",
    userId: 1,
  }),
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(payload) // Convert the JS object into a JSON string
    });

    // Check if the server responded with a successful status code (like 201 Created)
    if (response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the JSON response from the server
    const responseData = await response.json();
    
    console.log("Success! Response received from server:", responseData);

  } catch (error) {
    console.error("Failed to execute POST request:", error);
  }
}

// 3. Execute the function
submitPostData();
  