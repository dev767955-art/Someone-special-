
/* PAGE NAVIGATION */

function goToSection(number) {
  document.querySelectorAll(".screen").forEach(section => {
    section.classList.remove("active");
  });

  const next = document.getElementById("section" + number);

  next.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* COMPASS ANIMATION */

let compassUsed = false;

function transformCompass() {
  if (compassUsed) return;
  compassUsed = true;

  const button = document.getElementById("compassButton");
  const compass = button.querySelector(".compass");

  document.getElementById("compassHint").textContent =
    "A LITTLE MAGIC IS HAPPENING... ✨";

  compass.classList.add("transformed");
  button.classList.add("transformed");

  setTimeout(() => {
    document.getElementById("compassHint").textContent =
      "A HEART HAS FOUND ITS DIRECTION 💗";

    document.getElementById("compassMessage").classList.add("show");
    document.getElementById("compassNext").classList.remove("hidden");
  }, 1700);
}

/* CHAT STORY */

const messages = [
  {
    text: "Hey SOMEONE SPECIAL! 🌷",
    side: "left"
  },
  {
    text: "You know what? Talking to you is one of my favourite parts of the day. 💗",
    side: "right"
  },
  {
    text: "Even our random conversations feel special. ✨",
    side: "left"
  },
  {
    text: "Maybe distance can't stop two people from becoming special to each other. 🥹",
    side: "right"
  }
];

let chatIndex = 0;

function showNextChat() {
  const body = document.getElementById("chatBody");

  if (chatIndex === 0) {
    body.innerHTML = "";
  }

  if (chatIndex < messages.length) {
    const bubble = document.createElement("div");

    bubble.className =
      "chat-bubble chat-" + messages[chatIndex].side;

    bubble.textContent = messages[chatIndex].text;

    body.appendChild(bubble);

    chatIndex++;

    if (chatIndex === messages.length) {
      document.getElementById("chatButton").textContent =
        "OUR LITTLE STORY 💗";

      setTimeout(() => {
        document.getElementById("chatEnding")
          .classList.remove("hidden");

        document.getElementById("chatNext")
          .classList.remove("hidden");
      }, 500);
    }
  }
}

/* INTERACTIVE LOVE CARDS */

const cardMessages = [
  "There's something genuinely special about the way you are. Never change that. 🌸",

  "Even the simplest conversations with you can make an ordinary day feel special. 💬",

  "It's the little things that make you so memorable. ✨",

  "Your presence makes my everyday conversations a little brighter. 💗"
];

function revealCard(card, index) {
  const message = card.querySelector(".card-message");

  if (message.textContent !== "") return;

  message.textContent = cardMessages[index];

  card.querySelector("small").textContent = "Revealed! 💗";

  card.style.background = "#fce4ec";

  const allCards = document.querySelectorAll(".love-card");

  const allOpened = [...allCards].every(item =>
    item.querySelector(".card-message").textContent !== ""
  );

  if (allOpened) {
    document.getElementById("cardsNext")
      .classList.remove("hidden");
  }
}

/* LOVE LETTER */

let letterOpened = false;

function openLetter() {
  if (letterOpened) return;
  letterOpened = true;

  document.getElementById("envelope").classList.add("open");

  document.getElementById("letterButton").classList.add("hidden");

  setTimeout(() => {
    document.getElementById("letterMessage").classList.add("show");

    document.getElementById("letterNext")
      .classList.remove("hidden");
  }, 1000);
}

/* FINAL PROPOSAL REVEAL */

let proposalOpened = false;

function revealProposal() {
  if (proposalOpened) return;
  proposalOpened = true;

  const okay = document.getElementById("okayButton");
  const message = document.getElementById("proposalMessage");

  okay.classList.add("hidden");

  message.classList.add("show");

  setTimeout(() => {
    document.getElementById("proposalNext")
      .classList.remove("hidden");
  }, 1500);
}

/* FINAL ANSWER */

function answerProposal(answer) {
  const response = document.getElementById("finalResponse");

  response.classList.remove("hidden");

  if (answer === "yes") {
    response.textContent =
      "You just made this moment even more special! Thank you for sharing your feelings with me. 💗✨";
  } else {
    response.textContent =
      "That's completely okay. Take all the time you need. Your feelings and comfort matter. 🌷💗";
  }
}

/* FLOATING HEARTS */

const heartContainer = document.getElementById("backgroundHearts");

const heartSymbols = ["♡", "♥", "💕", "✨", "🌸"];

for (let i = 0; i < 22; i++) {
  const heart = document.createElement("span");

  heart.className = "floating-heart";

  heart.textContent =
    heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (12 + Math.random() * 20) + "px";
  heart.style.animationDuration = (8 + Math.random() * 12) + "s";
  heart.style.animationDelay = (-Math.random() * 15) + "s";

  heartContainer.appendChild(heart);
}
