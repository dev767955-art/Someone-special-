
"use strict";

/* PAGE NAVIGATION */

function goToSection(number) {
  const target = document.getElementById("section" + number);

  if (!target) {
    console.error("Section not found:", number);
    return;
  }

  document.querySelectorAll(".screen").forEach(function(section) {
    section.classList.remove("active");
  });

  target.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* FLOATING HEARTS */

function createFloatingHeart() {
  const layer = document.getElementById("hearts");

  if (!layer) return;

  const heart = document.createElement("span");

  heart.className = "float-heart";

  const symbols = ["♡", "♥", "💗", "💕"];

  heart.textContent =
    symbols[Math.floor(Math.random() * symbols.length)];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (14 + Math.random() * 17) + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";

  layer.appendChild(heart);

  window.setTimeout(function() {
    heart.remove();
  }, 11000);
}

window.setInterval(createFloatingHeart, 1000);

/* REVEAL ADORABLE CARDS */

let revealedCards = 0;

function revealCard(card) {
  if (!card || card.classList.contains("revealed")) {
    return;
  }

  card.classList.add("revealed");

  revealedCards++;

  const progress = document.getElementById("cardProgress");
  const nextButton = document.getElementById("adoreNext");

  if (progress) {
    progress.textContent = revealedCards + " / 6 cards discovered";
  }

  if (revealedCards === 6 && nextButton) {
    nextButton.classList.remove("hidden");
  }
}

/* OPEN LOVE LETTER */

function openLetter() {
  const letter = document.getElementById("loveLetter");
  const envelope = document.getElementById("envelopeButton");
  const nextButton = document.getElementById("letterNext");

  if (letter) letter.classList.remove("hidden");
  if (envelope) envelope.classList.add("hidden");
  if (nextButton) nextButton.classList.remove("hidden");
}

/* REVEAL PROPOSAL */

function revealProposal() {
  const proposal = document.getElementById("proposalReveal");
  const revealButton = document.getElementById("revealButton");
  const nextButton = document.getElementById("proposalNext");

  if (proposal) proposal.classList.remove("hidden");
  if (revealButton) revealButton.classList.add("hidden");
  if (nextButton) nextButton.classList.remove("hidden");
}

/* CONFETTI ANIMATION */

function launchConfetti() {
  const symbols = ["💗", "💕", "✨", "🌸", "💖", "🎀"];

  for (let i = 0; i < 45; i++) {
    const piece = document.createElement("span");

    piece.className = "confetti";

    piece.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (12 + Math.random() * 16) + "px";
    piece.style.animationDelay = Math.random() * 0.7 + "s";

    document.body.appendChild(piece);

    window.setTimeout(function() {
      piece.remove();
    }, 4000);
  }
}

/* YES BUTTON */

function sayYes() {
  const message = document.getElementById("answerMessage");

  if (message) {
    message.textContent =
      "Aww! Thank you for sharing your feelings! 💗";

    message.classList.remove("hidden");
  }

  launchConfetti();

  window.setTimeout(function() {
    goToSection(9);
  }, 1800);
}

/* NEED SOME TIME BUTTON */

function needTime() {
  const message = document.getElementById("answerMessage");

  if (!message) return;

  message.textContent =
    "Of course! Take all the time you need. No pressure at all. " +
    "Tumhara comfort aur honest feelings sabse important hain. 🌷";

  message.classList.remove("hidden");
}

/* REPLAY THE WEBSITE */

function replayWebsite() {
  revealedCards = 0;

  document.querySelectorAll(".adore-card").forEach(function(card) {
    card.classList.remove("revealed");
  });

  const progress = document.getElementById("cardProgress");
  const adoreNext = document.getElementById("adoreNext");

  if (progress) {
    progress.textContent = "0 / 6 cards discovered";
  }

  if (adoreNext) {
    adoreNext.classList.add("hidden");
  }

  const letter = document.getElementById("loveLetter");
  const envelope = document.getElementById("envelopeButton");
  const letterNext = document.getElementById("letterNext");

  if (letter) letter.classList.add("hidden");
  if (envelope) envelope.classList.remove("hidden");
  if (letterNext) letterNext.classList.add("hidden");

  const proposal = document.getElementById("proposalReveal");
  const revealButton = document.getElementById("revealButton");
  const proposalNext = document.getElementById("proposalNext");

  if (proposal) proposal.classList.add("hidden");
  if (revealButton) revealButton.classList.remove("hidden");
  if (proposalNext) proposalNext.classList.add("hidden");

  const answerMessage = document.getElementById("answerMessage");

  if (answerMessage) {
    answerMessage.classList.add("hidden");
    answerMessage.textContent = "";
  }

  goToSection(1);
}
