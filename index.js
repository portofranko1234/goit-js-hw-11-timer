class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate);
    this.daysCountdown = document.querySelector(
      `${selector} .value[data-value="days"]`
    );
    this.hoursCountdown = document.querySelector(
      `${selector} .value[data-value="hours"]`
    );
    this.minutesCountdown = document.querySelector(
      `${selector} .value[data-value="mins"]`
    );
    this.secondsCountdown = document.querySelector(
      `${selector} .value[data-value="secs"]`
    );
  }

  countdownValue(value) {
    return value < 10 ? `0${value}` : value;
  }
  countdown() {
    const currentTime = new Date();
    this.createSelectorValue(currentTime);
  }

  showTime() {
    setInterval(() => this.countdown(), 1000);
  }

  createSelectorValue(currentTime) {
    const time = this.targetDate - currentTime;
    this.daysCountdown.textContent = this.countdownValue(
      Math.floor(time / (1000 * 60 * 60 * 24))
    );
    this.hoursCountdown.textContent = this.countdownValue(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    this.minutesCountdown.textContent = this.countdownValue(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    this.secondsCountdown.textContent = this.countdownValue(
      Math.floor((time % (1000 * 60)) / 1000)
    );
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: "2022,1,1",
});
// закоментированная чать кода позволяет включить таймер при клике на кнопку start
// const startCountdown = document.querySelector("button[data-action-start]");
// startCountdown.addEventListener("click", startTimer);

// function startTimer() {
//   startCountdown.setAttribute("disabled", "");

//   timer.showTime();
// }
timer.showTime();
