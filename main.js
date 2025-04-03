document.addEventListener("DOMContentLoaded", () => {
  // Calculate days since promise
  const promiseDate = new Date("2021-01-01"); // Cambia esta fecha a cuando tu amigo prometió ver HxH
  const today = new Date();
  const timeDiff = today - promiseDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // Update counters
  document.getElementById("days").textContent = daysDiff;
  document.getElementById("days2").textContent = daysDiff;

  // Animate numbers
  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  animateValue("days", 0, daysDiff, 2000);
  animateValue("days2", 0, daysDiff, 2000);
});
