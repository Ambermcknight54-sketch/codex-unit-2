const form4 = document.getElementById("search-form");
const out4 = document.getElementById("out");

if (form4) {
  form4.addEventListener("submit", (e) => {
    // TODO: preventDefault, build a data object, use URLSearchParams
    // TODO: append query string to GET request URL
    // 1. Collect form data
    const formData = new FormData(e.target);

    // 2. Create URLSearchParams from the form data
    // This automatically serializes inputs based on their 'name' attributes
    const params = new URLSearchParams(formData);

    // 3. Construct the full URL
    // We append the params as a query string to our endpoint
    const baseUrl = "https://api.example.com/search";
    const fullUrl = `${baseUrl}?${params.toString()}`;

    // 4. Display the result in the <pre> tag and log it
    out4.textContent = `Generated URL:\n${fullUrl}`;
    console.log("Generated URL:", fullUrl);
  });
}
