// Generate snowflakes dynamically
const snowCount = 50;
for (let i = 0; i < snowCount; i++) {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '❄';
  snowflake.style.left = Math.random() * window.innerWidth + 'px';
  snowflake.style.fontSize = (Math.random() * 20 + 10) + 'px';
  snowflake.style.animationDuration = (Math.random() * 5 + 5) + 's';
  snowflake.style.opacity = Math.random();
  document.body.appendChild(snowflake);
}

// Confetti burst after typing animation
const greeting = document.getElementById('mainGreeting');
greeting.addEventListener('animationend', () => {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.backgroundColor = ['#ff0', '#0f0', '#0ff', '#f0f', '#f00', '#00f'][Math.floor(Math.random() * 6)];
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    confetti.style.width = confetti.style.height = (Math.random() * 8 + 4) + 'px';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  }
});
