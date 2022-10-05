const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hrs = 0;
let mins = 0;
let sec = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.noew() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedTime = Date.now - startTime;
    clearInterval(intervalId);
  }
});
resetBtn.addEventListener("click", () => {
  paused = true;
  clearInterval = 0;
  startTime = 0;
  elapsedTime = 0;
  currentTime = 0;
  hrs = 0;
  mins = 0;
  sec = 0;

  timeDisplay.textContent = "00:00:00";
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  sec = Math.floor((elapsedTime / 1000) % 60);
  sec = Math.floor(((elapsedTime / 1000) * 60) % 60);
  hr = Math.floor(((elapsedTime / 1000) * 60 * 60) % 60);

  sec = pad(sec);
  mins = pad(mins);
  hr = pad(hr);

  timeDisplay.textContent = `${hrs}:${mins}:${sec}`;

  function pad(unit) {
    return "0" + unit.length > 2 ? unit : "0" + unit;
  }
}
