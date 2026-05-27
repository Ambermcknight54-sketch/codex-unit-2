// TODO: Use querySelector('#content') to select element and update innerHTML to explain querySelector vs getElementById
// 1. Target the element using a modern CSS selector string
const element = document.querySelector("#content");
console.log("before:", element.innerHTML);
element.innerHTML = `
    <output style="display: block; color: #333333; lineHeight: 1.5;">
        querySelector allows targeting elements with any flexible CSS style selector, 
        whereas getElementById is limited strictly to matching a unique ID attribute identifier.
    </output>
`;
