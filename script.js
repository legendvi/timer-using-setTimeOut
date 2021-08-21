const time = document.querySelector("#sec");
const modal = document.querySelector(".timeup");
const display = document.querySelector(".timer-div");
console.log(time, modal);
let count = 60;
for (let i = count; i >= 0; i--) {
  (function timer(val) {
    setTimeout(function () {
      time.textContent = `${count}s`;

      if (count === 0) {
        display.textContent = `Time up!! ${count} seconds have elapsed`;
      }

      console.log(val);
      count--;
    }, 1000 + 1000 * val);
  })(i);
}
