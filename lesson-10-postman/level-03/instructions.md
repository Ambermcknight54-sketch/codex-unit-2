## Level 03 — GET with query parameters

## Objective

- Send a GET request with query parameters and observe response differences.

## Benefits

- Demonstrate how query parameters change server responses.
- Practice reading docs to understand parameter meanings and types.

## Complete these tasks

- In Postman, send a GET request to `https://the-trivia-api.com/v2/questions`.
- Add query parameters for `category` and `difficulty`.
- Inspect how results change with each request.
- Open the API docs `https://the-trivia-api.com`.
- In Postman, try different values for `category` and `difficulty`.
- Use `script.js` to `console.log` one fact learned from the documentation.

## Hints

- Look at the endpoint documentation for parameter names and types.
- Try changing one parameter at a time to observe effects.

## More information

- Query parameters follow the `?name=value&other=val` format in URLs and are commonly used to filter or paginate results.
- To addi query parameters in Postman, open the `Params` tab, enter keys and values on separate rows, and Postman will append them to the request URL automatically.
- Use the checkbox beside each param to enable or disable it without removing the row.

## Usage tips

- Use Postman's Params tab to add parameters instead of editing the URL manually.
