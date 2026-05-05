const btn3 = document.getElementById("fetch-btn");
const errorEl3 = document.getElementById("error");

if (btn3) {
  btn3.addEventListener("click", async () => {
    // TODO: wrap fetch in try/catch
    // TODO: check response.ok and show friendly messages
    // Clear previous errors
    errorEl3.textContent = "";

    try {
      // 1. Attempt the fetch
      const response = await fetch("https://api.jsoning.com/mock/public/users");

      // 2. Explicitly handle HTTP errors
      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status} (${response.statusText})`,
        );
      }

      // Success logic
      console.log("Data fetched successfully!");
    } catch (error) {
      // 3. Handle both Network errors and thrown HTTP errors
      if (error.message.includes("HTTP Error")) {
        errorEl3.textContent = error.message;
      } else {
        errorEl3.textContent = "Network error: Please check your connection.";
      }
    }
  });
}
