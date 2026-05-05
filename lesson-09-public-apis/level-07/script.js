const msg7 = document.getElementById("message");
if (msg7) {
  // TODO: insert explanatory text about API keys (do not include real keys)
  msg7.innerHTML = `
    <div style="border: 2px solid red; padding: 1rem; border-radius: 8px;">
      <h3>⚠️ Security Alert: Protecting API Keys</h3>
      <p><strong>Never hardcode API keys</strong> in client-side code (this file).</p>
      <ul>
        <li><strong>The Risk:</strong> If you put a key here, it is visible to the public. Malicious users can steal it, and you may be billed for their usage or banned.</li>
        <li><strong>The Solution:</strong> Keep your keys on a <strong>server-side</strong> environment. Your frontend should request data from your own backend, which then adds the API key securely and sends the response back to your client.</li>
      </ul>
    </div>
  `;
}
msg7.textContent = "Never place your API key directly in your JavaScript code";
