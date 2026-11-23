
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --pink: #f5a9c8;
  --dark-pink: #d95d91;
  --light-pink: #fff0f6;
  --deep-pink: #b94d7a;
  --text: #75465d;
  --white: #ffffff;
}

body {
  min-height: 100vh;
  font-family: "DM Sans", sans-serif;
  color: var(--text);
  background: linear-gradient(135deg, #ffe7f0, #fff5f8, #fce1ed);
  overflow-x: hidden;
}

button {
  font-family: inherit;
  -webkit-tap-highlight-color: transparent;
}

.website {
  width: 100%;
  min-height: 100vh;
  padding: 35px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.screen {
  display: none;
  width: 100%;
  max-width: 680px;
  animation: fadeIn 0.55s ease;
}

.screen.active {
  display: block;
}

.content-card {
  width: 100%;
  padding: 38px 32px;
  text-align: center;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 28px;
  box-shadow: 0 15px 45px rgba(190, 105, 142, 0.15);
  backdrop-filter: blur(12px);
}

.top-emoji {
  font-size: 48px;
  margin-bottom: 12px;
  animation: float 3s ease-in-out infinite;
}

.small-heading {
  color: var(--dark-pink);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 14px;
}

h1,
h2 {
  font-family: "Playfair Display", serif;
  color: var(--deep-pink);
  line-height: 1.25;
}

h1 {
  font-size: clamp(32px, 6vw, 45px);
  margin-bottom: 18px;
}

h2 {
  font-size: clamp(26px, 5vw, 34px);
  margin-bottom: 18px;
}

h3 {
  font-family: "Playfair Display", serif;
}

.description {
  max-width: 510px;
  margin: 0 auto 24px;
  font-size: 15px;
  line-height: 1.9;
  color: #896478;
}

.cute-decoration {
  font-size: 25px;
  color: var(--pink);
  margin: 22px 0;
}

.main-btn,
.yes-btn,
.time-btn,
.back-btn {
  min-height: 48px;
  border: none;
  border-radius: 50px;
  padding: 13px 22px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.25s ease;
}

.main-btn {
  color: white;
  background: linear-gradient(135deg, #f3a3c3, #dc6e9e);
  box-shadow: 0 6px 18px rgba(220, 110, 158, 0.2);
}

.main-btn:hover:not(:disabled),
.yes-btn:hover,
.time-btn:hover {
  transform: translateY(-3px);
  filter: brightness(1.03);
}

.back-btn {
  color: #a34d75;
  background: #fff0f6;
  border: 1px solid #f1c6d9;
}

.back-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  background: #ffe2ee;
}

.back-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  width: 100%;
  margin-top: 30px;
}

.nav-buttons .main-btn,
.nav-buttons .back-btn {
  flex: 1;
  min-width: 0;
  margin: 0;
}

.hidden {
  display: none !important;
}

/* Universe cards */

.universe-card {
  background: #fff5f9;
  padding: 20px;
  border-radius: 20px;
  margin: 14px 0;
  border: 1px solid #fce0eb;
}

.universe-item {
  font-size: 30px;
  margin-bottom: 8px;
}

.universe-card h3 {
  color: var(--deep-pink);
  margin-bottom: 7px;
  font-size: 19px;
}

.universe-card p {
  font-size: 13px;
  line-height: 1.7;
  color: #896478;
}

/* Adore cards */

.adore-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 13px;
  margin: 24px 0 15px;
}

.adore-card {
  min-height: 155px;
  padding: 17px 12px;
  border: 1px solid #f7d8e5;
  border-radius: 19px;
  background: #fff6fa;
  color: var(--text);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  transition: 0.3s ease;
}

.adore-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(200, 120, 155, 0.12);
}

.card-emoji {
  font-size: 29px;
}

.card-title {
  font-weight: 700;
  font-size: 14px;
  color: var(--deep-pink);
}

.card-message {
  display: none;
  font-size: 12px;
  line-height: 1.6;
}

.tap-hint {
  font-size: 10px;
  color: #c18ba4;
}

.adore-card.revealed {
  background: #ffe5ef;
  border-color: #e9a8c3;
}

.adore-card.revealed .card-message {
  display: block;
}

.adore-card.revealed .tap-hint {
  display: none;
}

.progress-text {
  font-size: 12px;
  font-weight: 700;
  color: var(--dark-pink);
  margin: 15px 0;
}

/* Ten reasons */

.reasons-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 25px 0;
  text-align: left;
}

.reason {
  padding: 13px 15px;
  border-radius: 13px;
  background: #fff3f8;
  border: 1px solid #f9e0ea;
  font-size: 13px;
  color: #82546b;
  transition: 0.2s ease;
}

.reason:hover {
  transform: translateX(4px);
  background: #ffe8f1;
}

/* Letter */

.envelope {
  width: 150px;
  height: 125px;
  border: 2px solid #f2b2cc;
  border-radius: 18px;
  background: #fff0f6;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  transition: 0.3s ease;
}

.envelope:hover {
  transform: scale(1.06);
}

.envelope span:first-child {
  font-size: 48px;
}

.envelope-text {
  font-size: 11px;
  color: var(--deep-pink);
  font-weight: 700;
  letter-spacing: 2px;
}

.letter {
  margin-top: 25px;
  padding: 25px;
  text-align: left;
  background: #fff8f4;
  border: 1px solid #f4d9d0;
  border-radius: 17px;
  animation: fadeIn 0.7s ease;
}

.letter h3 {
  color: var(--deep-pink);
  font-size: 22px;
  margin-bottom: 18px;
}

.letter p {
  color: #805f68;
  font-size: 13px;
  line-height: 1.9;
  margin-bottom: 14px;
}

.letter-ending {
  font-family: "Great Vibes", cursive;
  font-size: 25px !important;
  color: var(--deep-pink) !important;
}

/* Special note */

.special-note {
  padding: 22px;
  margin: 24px 0;
  background: #fff1f7;
  border-radius: 18px;
  border: 1px solid #f8d8e6;
  font-family: "Playfair Display", serif;
  font-size: 17px;
  font-style: italic;
  line-height: 1.8;
  color: #a45478;
}

/* Proposal */

.proposal-box {
  margin: 24px 0;
  padding: 23px 18px;
  background: #fff3f8;
  border-radius: 20px;
  border: 1px solid #f4d3e1;
  animation: fadeIn 0.6s ease;
}

.proposal-emoji {
  font-size: 42px;
  margin-bottom: 15px;
}

.proposal-box h3 {
  color: var(--deep-pink);
  font-size: 23px;
  line-height: 1.5;
  margin-bottom: 13px;
}

.proposal-box p {
  line-height: 1.8;
  margin-bottom: 13px;
  font-size: 15px;
}

.soft-note {
  font-size: 12px !important;
  color: #a17b8c;
}

/* Final question */

.answer-buttons {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 310px;
  margin: 25px auto;
}

.yes-btn {
  color: white;
  background: linear-gradient(135deg, #f08bb5, #d94d88);
  box-shadow: 0 7px 20px rgba(217, 77, 136, 0.2);
  font-size: 15px;
}

.time-btn {
  color: #a34d75;
  background: #fff0f6;
  border: 1px solid #f0c7d9;
  font-size: 13px;
}

.answer-message {
  padding: 16px;
  background: #fff2f7;
  border-radius: 15px;
  color: #a34d75;
  font-size: 14px;
  line-height: 1.8;
  margin: 18px 0;
  animation: fadeIn 0.4s ease;
}

.final-back {
  margin-top: 10px;
  width: 100%;
  max-width: 310px;
}

/* Final surprise */

.final-card {
  overflow: hidden;
}

.final-heart {
  font-size: 75px;
  margin: 20px 0;
  animation: heartbeat 1.5s infinite;
}

.final-message {
  font-family: "Great Vibes", cursive;
  font-size: 30px;
  color: var(--deep-pink);
  margin: 20px 0;
}

/* Floating hearts */

.background-hearts {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
}

.floating-heart {
  position: absolute;
  bottom: -30px;
  color: rgba(225, 111, 158, 0.35);
  animation: floatUp linear forwards;
}

/* Confetti */

.confetti {
  position: fixed;
  top: -15px;
  z-index: 20;
  pointer-events: none;
  animation: confettiFall 2.8s ease-in forwards;
}

/* Animations */

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(12px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-9px);
  }
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.12);
  }
}

@keyframes floatUp {
  from {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  15% {
    opacity: 1;
  }

  to {
    transform: translateY(-110vh) rotate(35deg);
    opacity: 0;
  }
}

@keyframes confettiFall {
  to {
    transform: translateY(110vh) rotate(720deg);
    opacity: 0;
  }
}

/* Mobile responsive */

@media (max-width: 600px) {

  .website {
    padding: 18px 12px;
    align-items: flex-start;
  }

  .content-card {
    padding: 29px 18px;
    border-radius: 23px;
  }

  .top-emoji {
    font-size: 41px;
  }

  .description {
    font-size: 13px;
    line-height: 1.8;
  }

  .adore-grid {
    gap: 9px;
  }

  .adore-card {
    min-height: 150px;
    padding: 13px 8px;
  }

  .card-message {
    font-size: 11px;
  }

  .letter {
    padding: 19px;
  }

  .letter p {
    font-size: 12px;
  }

  .special-note {
    font-size: 15px;
    padding: 17px;
  }

  .nav-buttons {
    gap: 9px;
  }

  .nav-buttons .main-btn,
  .nav-buttons .back-btn {
    padding: 12px 10px;
    font-size: 11px;
  }

  .proposal-box h3 {
    font-size: 20px;
  }
}

@media (max-width: 380px) {

  .content-card {
    padding: 25px 14px;
  }

  .nav-buttons {
    gap: 7px;
  }

  .nav-buttons .main-btn,
  .nav-buttons .back-btn {
    font-size: 10px;
    padding: 11px 7px;
  }

  .card-title {
    font-size: 12px;
  }
}

/* Respect reduced motion settings */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
