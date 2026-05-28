const formTag = document.getElementById("jokeForm");
formTag.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  formTag.onsubmit = async function (event) {
    event.preventDefault();
    const memeImage = document.querySelector("img");
  }
    try {
      // 1. Create data object using a quoted string for the hyphenated property key
      const data = { "api-key": "a5d53839d41e43bfbcd50c96b2ee33d6" };
      const queryParams = new URLSearchParams(data);
      const response = await fetch(
        `https://api.humorapi.com/memes/random?${queryParams}`,
      );

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const result = await response.json();

      // 4. Update the img source with the URL parameter returned by HumorAPI
      memeImage.src = result.url;
      memeImage.alt = "Random Humor API Meme";
    } catch (error) {
      console.error("API Fetch execution breakdown:", error);

      memeImage.removeAttribute("src");
      memeImage.alt =
        "Failed to fetch meme. Please check your API key authorization details.";
    }
  };
  // TODO: Create a `data` object with an "api-key" property (quoted when hyphenated)
  // TODO: Convert `data` into a query string and fetch jokes (or send as header if API requires)
  // TODO: Parse response and render a joke into the DOM. On invalid key, show an error message in the page
}
