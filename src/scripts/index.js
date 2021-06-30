//Your code goes here!

const time = document.querySelector("#time");
let minutes = document.querySelector(".mins");
let seconds = document.querySelector(".secs");
const buttons = document.querySelector(".buttons");
const session = document.querySelector("#session");

let tikking;
function startTimer() {
  let timeLeft = Number(minutes.textContent) * 60 + Number(seconds.textContent);
  tikking = setInterval(() => {
    timeLeft--;
    minutes.textContent = `${Math.floor(timeLeft / 60)}`;
    seconds.textContent = `${timeLeft % 60}`;
    if (timeLeft <= 0) {
      stopTimer(tikking);
    }
  }, 1000);
}

function stopTimer(timer) {
  clearInterval(timer);
  minutes.textContent = `0`;
  seconds.textContent = `0`;
}

function pauseTimer(timer) {
  clearInterval(timer);
}

function getDecimalPlace(x) {
  let splitTime = x.split(":");
  if (splitTime[1] > 0) {
    let remainder = `0.${splitTime[1]}`;
    return Number(remainder) * 60;
  } else {
    return 0;
  }
}

session.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "btn-plus":
      time.value++;
      break;
    case "btn-minus":
      time.value--;
  }
});

buttons.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "btn-start":
      stopTimer(tikking);
      if (time.value >= 1) {
        minutes.textContent = Math.floor(time.value);
        seconds.textContent = getDecimalPlace(time.value);
        startTimer();
      } else if (time.value > 0 && time.value < 1) {
        seconds.textContent = getDecimalPlace(time.value);
        startTimer();
      }
      break;
    case "btn-reset":
      stopTimer(tikking);
      break;
    case "btn-pause":
      pauseTimer(tikking);
      break;
    case "btn-continue":
      startTimer(tikking);
  }
});

// // let timer = time.value;
// console.log("Current timer:", timer);
// const timePlus = document.querySelector("#btn-plus");
// const timeMinus = document.querySelector("#btn-minus");
// const startTimer = document.querySelector("#btn-start");
// const resetTimer = document.querySelector("#btn-reset");
// const pauseTimer = document.querySelector("#btn-pause");
// const continueTimer = document.querySelector("#btn-continue");

// timePlus.addEventListener("click", () => {
//   timer++;
//   alert(`New timer: ${timer}`);
//   time.innerHTML = timer;
// });
// timeMinus.addEventListener("click", () => {
//   timer--;
//   if (timer < 0) {
//     alert("Timer must be equal or larger than 0");
//     // break;
//   }
// });
// startTimer.addEventListener("click", () => {
//   let secs = 0;
//   let interval;
//   secs = timer * 60 || 0;
//   interval = setInterval(function () {
//     secs--;
//     minutes.innerHTML = timer;
//     if (!secs) {
//       clearInterval(interval);
//       alert("End of timer");
//     }
//   }, 1000);
//   console.log(interval);
// });
