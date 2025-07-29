let jumpCount = 0;
const maxJumps = 5; // number of jumps before final redirect
const messages = ["Again!", "AGAIN!", "MOREE!", "Getting tired?", "Just one more..."];
const finalMessage = "Just one more...";

const jumpButtonElement = document.getElementById('jumpButton');
jumpButtonElement.addEventListener('click', function () {
    jump('jumpButton');
});

function jump(elementId) {
  const jumpButton = document.getElementById(elementId);

  if (jumpCount < maxJumps) {

    const x = Math.round(Math.random() * 85) + '%';
    const y = Math.round(Math.random() * 85) + '%';

    jumpButton.style.left = x;
    jumpButton.style.top = y;

    jumpButton.textContent = messages[jumpCount];
    jumpCount++;
        
    } else {

      jumpButton.textContent = finalMessage;
      jumpButton.style.cursor = "pointer";
        
      setTimeout(() => {
        window.location.href = "bday.html";
      }, 300);
  }
}


