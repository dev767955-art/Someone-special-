
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --pink: #e879a7;
  --pink-dark: #bd4f7d;
  --pink-light: #fff0f6;
  --text: #765064;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
  color: var(--text);
  font-family: "DM Sans", sans-serif;
  background: linear-gradient(135deg, #ffe7f0 0%, #fff8fb 48%, #f9dfeb 100%);
}

button {
  font: inherit;
  -webkit-tap-highlight-color: transparent;
}

.site {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 28px 15px;
}

.screen {
  display: none;
  width: 100%;
  max-width: 680px;
  animation: appear .45s ease both;
}

.screen.active {
  display: block;
}

.card {
  width: 100%;
  padding: 38px 32px;
  text-align: center;
  border: 1px solid rgba(255,255,255,.9);
  border-radius: 28px;
  background: rgba(255,255,255,.88);
  box-shadow: 0 16px 48px rgba(173,83,123,.14);
  backdrop-filter: blur(12px);
}

.emoji {
  margin-bottom: 12px;
  font-size: 45px;
  animation: bob 3s ease-in-out infinite;
}

.eyebrow {
  margin-bottom: 13px;
  color: var(--pink-dark);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2.5px;
}

h1, h2, h3 {
  color: var(--pink-dark);
  font-family: "Playfair Display", serif;
  line-height: 1.25;
}

h1 {
  margin-bottom: 17px;
  font-size: clamp(32px, 7vw, 46px);
}

h2 {
  margin-bottom: 17px;
  font-size: clamp(26px, 5vw, 35px);
}

.intro {
  max-width: 520px;
  margin: 0 auto 24px;
  color: #896a7c;
  font-size: 15px;
  line-height: 1.85;
}

.decoration {
  margin: 22px 0;
  color: var(--pink);
  font-size: 25px;
}

/* BUTTONS */

.primary, .back, .yes, .time {
  min-height: 48px;
  padding: 12px 20px;
  border: 0;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform .2s ease, filter .2s ease;
}

.primary, .yes {
  color: white;
  background: linear-gradient(135deg, #f3a2c2, #d85e91);
  box-shadow: 0 7px 18px rgba(216,94,145,.2);
}

.back, .time {
  color: #a24c74;
  background: #fff0f6;
  border: 1px solid #f0c8d9;
}

.primary:hover,
.back:hover:not(:disabled),
.yes:hover,
.time:hover {
  transform: translateY(-2px);
  filter: brightness(1.03);
}

.back:disabled {
  cursor: not-allowed;
  opacity: .45;
}

.hidden {
  display: none !important;
}

/* BACK AND NEXT BUTTONS */

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  margin-top: 28px;
}

.nav > button {
  flex: 1;
  min-width: 0;
}

/* UNIVERSE */

.universe {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 25px 0 8px;
}

.universe-item {
  padding: 20px 12px;
  border: 1px solid #f7dce7;
  border-radius: 19px;
  background: #fff5f9;
}

.universe-item span {
  font-size: 30px;
}

.universe-item h3 {
  margin: 9px 0 6px;
  font-size: 17px;
}

.universe-item p {
  color: #896a7c;
  font-size: 12px;
  line-height: 1.65;
}

/* ADORE CARDS */

.adore-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 22px 0 12px;
}

.adore-card {
  display: flex;
  min-height: 155px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 15px 10px;
  border: 1px solid #f3d6e2;
  border-radius: 18px;
  color: var(--text);
  background: #fff6fa;
  cursor: pointer;
  transition: .25s ease;
}

.adore-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 18px rgba(190,91,132,.12);
}

.card-emoji {
  font-size: 29px;
}

.adore-card strong {
  color: var(--pink-dark);
  font-size: 14px;
}

.adore-card .message {
  display: none;
  font-size: 12px;
  line-height: 1.55;
}

.adore-card small {
  color: #b17d96;
  font-size: 10px;
}

.adore-card.revealed {
  background: #ffe7f0;
  border-color: #e7a9c2;
}

.adore-card.revealed .message {
  display: block;
}

.adore-card.revealed small {
  display: none;
}

.progress {
  margin: 15px 0;
  color: var(--pink-dark);
  font-size: 12px;
  font-weight: 700;
}

/* TEN REASONS */

.reasons {
  display: grid;
  gap: 9px;
  margin: 24px 0;
  text-align: left;
}

.reasons div {
  padding: 13px 15px;
  border: 1px solid #f7e0e9;
  border-radius: 13px;
  background: #fff4f8;
  font-size: 13px;
}

/* LOVE LETTER */

.envelope {
  display: flex;
  width: 155px;
  height: 125px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 7px;
  margin: 25px auto;
  border: 1px solid #efb8cf;
  border-radius: 17px;
  color: var(--pink-dark);
  background: #fff0f6;
  cursor: pointer;
  transition: transform .2s ease;
}

.envelope:hover {
  transform: scale(1.04);
}

.envelope span {
  font-size: 45px;
}

.envelope b {
  font-size: 11px;
  letter-spacing: 2px;
}

.letter {
  margin-top: 22px;
  padding: 24px;
  border: 1px solid #f1ded7;
  border-radius: 17px;
  background: #fff9f5;
  text-align: left;
  animation: appear .5s ease;
}

.letter h3 {
  margin-bottom: 15px;
  font-size: 22px;
}

.letter p {
  margin-bottom: 13px;
  color: #80616d;
  font-size: 13px;
  line-height: 1.85;
}

.signoff {
  margin: 18px 0;
  color: var(--pink-dark);
  font-family: "Great Vibes", cursive;
  font-size: 27px;
  line-height: 1.5;
}

/* QUOTE AND PROPOSAL */

.quote {
  margin: 23px 0;
  padding: 21px;
  border: 1px solid #f5dce7;
  border-radius: 17px;
  color: #a45478;
  background: #fff2f7;
  font-family: "Playfair Display", serif;
  font-size: 16px;
  font-style: italic;
  line-height: 1.8;
}

.proposal {
  margin: 22px 0 8px;
  padding: 22px 17px;
  border: 1px solid #f3d7e3;
  border-radius: 19px;
  background: #fff4f8;
  animation: appear .45s ease;
}

.proposal h3 {
  margin: 12px 0;
  font-size: 23px;
  line-height: 1.5;
}

.proposal p {
  margin: 10px 0;
  font-size: 15px;
  line-height: 1.7;
}

.proposal .gentle {
  color: #98798a;
  font-size: 12px;
}

.reveal-button {
  margin: 8px 0;
}

/* FINAL QUESTION */

.answers {
  display: grid;
  max-width: 320px;
  gap: 13px;
  margin: 25px auto;
}

.yes, .time {
  width: 100%;
}

.yes {
  font-size: 15px;
}

.answer-message {
  margin: 18px 0;
  padding: 15px;
  border-radius: 14px;
  color: #9d4e73;
  background: #fff1f7;
  font-size: 14px;
  line-height: 1.8;
}

.final-back {
  width: 100%;
  max-width: 320px;
}

.big-heart {
  margin: 17px 0;
  font-size: 72px;
  animation: pulse 1.5s infinite;
}

/* FLOATING HEARTS AND CONFETTI */

.floating-layer {
  position: fixed;
  z-index: 0;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.float-heart {
  position: absolute;
  bottom: -30px;
  color: rgba(218,103,151,.35);
  animation: rise linear forwards;
}

.confetti {
  position: fixed;
  z-index: 5;
  top: -20px;
  pointer-events: none;
  animation: fall 2.8s ease-in forwards;
}

/* ANIMATIONS */

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-7px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@keyframes rise {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  15% { opacity: 1; }
  100% {
    transform: translateY(-110vh) rotate(35deg);
    opacity: 0;
  }
}

@keyframes fall {
  to {
    transform: translateY(110vh) rotate(650deg);
    opacity: 0;
  }
}

/* MOBILE DESIGN */

@media (max-width: 600px) {
  .site {
    align-items: flex-start;
    padding: 18px 12px;
  }

  .card {
    padding: 28px 18px;
    border-radius: 23px;
  }

  .intro {
    font-size: 13px;
  }

  .universe {
    grid-template-columns: 1fr;
  }

  .universe-item {
    padding: 16px;
  }

  .adore-grid {
    gap: 9px;
  }

  .adore-card {
    min-height: 148px;
    padding: 12px 7px;
  }

  .letter {
    padding: 18px;
  }

  .letter p {
    font-size: 12px;
  }

  .nav {
    gap: 8px;
  }

  .nav > button {
    padding: 12px 8px;
    font-size: 11px;
  }
}

@media (max-width: 360px) {
  .card {
    padding: 24px 13px;
  }

  .nav > button {
    padding: 11px 6px;
    font-size: 10px;
  }
}

/* REDUCE MOTION */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
