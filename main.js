document.addEventListener("DOMContentLoaded", () => {
  // Fecha en que se cumplió la promesa (¡hoy!)
  const promiseFulfilledDate = new Date(); 
  const promiseStartDate = new Date("2021-01-01"); // La fecha original de la promesa

  const timeDiff = promiseFulfilledDate - promiseStartDate;
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // Actualizar el contador con el total de días
  document.getElementById("days").textContent = daysDiff;

  // Animación para el número final
  function animateValue(id, start, end, duration) {
    const obj = document.getElementById(id);
    if (!obj) return;
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
});