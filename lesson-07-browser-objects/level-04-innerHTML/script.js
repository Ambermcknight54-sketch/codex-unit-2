// TODO: Select element with getElementById('content'), log previous innerHTML, then set new innerHTML.
// Keep changes simple and avoid inserting untrusted markup.
const element = document.getElementById("content");
console.log("before:", element.innerHTML);
<output>
  <strong>innerHTML</strong>
  element.innerHTML = "<strong>innerHTML</strong> text content updated.";
</output>;

debugger;
