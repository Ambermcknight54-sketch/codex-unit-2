// TODO: Select element with getElementById('content'), log previous innerHTML, then set new innerHTML.
// Keep changes simple and avoid inserting untrusted markup.
const element = document.getElementById("content");

// 2. Log the original innerHTML value to the browser developer console
console.log(element.innerHTML, "before:");

// 3. Update the structure using innerHTML with strict camelCase styling rules
element.innerHTML = `
    <output>
        <strong>innerHTML</strong> includes raw markup tags, whereas 
        <em>innerText</em> handles only plain rendered text data.
    </output>
`;

// 4. Pause script execution to inspect the live markup transformation in DevTools
debugger;
