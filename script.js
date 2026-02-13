function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").textContent = time;

  const date = now.toDateString();
  document.getElementById("date").textContent = date;
}

setInterval(updateClock, 1000);
updateClock();
