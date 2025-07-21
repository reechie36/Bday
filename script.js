let jumpCount = 0;
const maxJumps = 4; // Set your desired maximum number of jumps
const messages = ["Again!", "AGAIN!", "MOREE!", "Getting tired?"]; // Messages to display
const finalMessage = "Just one more...";

function jump(elementId) {
  const jumpButton = document.getElementById(elementId);

  if (jumpCount < maxJumps) {
    const x = Math.round(Math.random() * 90) + '%'; // Keep within bounds
    const y = Math.round(Math.random() * 90) + '%'; // Keep within bounds

    jumpButton.style.left = x;
    jumpButton.style.top = y;

    // Update the button text
    jumpButton.textContent = messages[jumpCount];

    jumpCount++;
    return true; // Jump happened
  } else {
      // This is the "Just one more..." stage
    jumpButton.textContent = finalMessage;
    jumpButton.style.cursor = "pointer"; // Keep it clickable if you want to redirect

        // IMPORTANT: Change the button's behavior to redirect on next click
        // Remove the existing jumpHandler and add a new one for redirection
    jumpButton.removeEventListener('click', jumpHandler); // Remove the random jump handler

        // Add a new event listener that redirects to bday.html
    jumpButton.addEventListener('click', function redirectToBday() {
        window.location.href = "bday.html";
    }, { once: true }); // Use { once: true } to make sure it only triggers once

    return false; // Jump limit reached (no more random jumps)
  }
}
// Attach the event listener
        const jumpButtonElement = jumpButton;
        // We'll create a named function for the handler so we can remove it later
        function jumpHandler() {
            jump('jumpButton');
        }
        jumpButtonElement.addEventListener('click', jumpHandler);
