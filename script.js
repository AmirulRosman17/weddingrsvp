
// COUNTDOWN
const weddingDate = new Date("June 15, 2026 10:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff < 0) {
    countdownEl.innerHTML = "Today is the big day 🎉";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdownEl.innerHTML = `${days} days to go`;
}, 1000);
