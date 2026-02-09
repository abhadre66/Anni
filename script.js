const container = document.querySelector(".falling-container");

const emojis = ["⭐", "💙", "🎈"];

function createFallingItem() {
  const span = document.createElement("span");
  span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = Math.random() * 5 + 5 + "s";
  span.style.fontSize = Math.random() * 20 + 20 + "px";

  container.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 10000);
}



setInterval(createFallingItem, 400);

const messageElement = document.getElementById("animated-message");

if (messageElement) {
  const text = messageElement.innerText.trim();
  messageElement.innerHTML = "";

  const words = text.split(" ");
  let index = 0;

  // ⏳ Delay animation so layout is ready
  setTimeout(() => {
    const interval = setInterval(() => {
      if (index < words.length) {
        const span = document.createElement("span");
        span.className = "word";
        span.textContent = words[index];

        messageElement.appendChild(span);
        index++;
      } else {
        clearInterval(interval); // ✅ important
      }
    }, 180); // speed (increase = slower)
  }, 1000); // 🔥 THIS FIXES THE ISSUE
}

// Elements
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const loader = document.querySelector(".cssload-main");

// ==============================
// ❌ NO BUTTON RUNS AWAY
// ==============================
noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".button-container");

  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// ==============================
// ❤️ YES BUTTON CLICK
// ==============================
yesBtn.addEventListener("click", () => {
  // Hide question
  questionContainer.style.display = "none";

  // Show heart loader
  loader.style.display = "block";

  // After delay → show result
  setTimeout(() => {
    loader.style.display = "none";
    resultContainer.style.display = "block";
  }, 2000); // loader duration
});

// ==============================
// 🔐 SAFETY CHECK (optional)
// ==============================
window.addEventListener("load", () => {
  resultContainer.style.display = "none";
  loader.style.display = "none";
});

