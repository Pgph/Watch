const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const hours = document.querySelector(".hr");
const minutes = document.querySelector(".mn");
const seconds = document.querySelector(".sc");
const deg = 6;

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const runClock = () => {
  const now = new Date();
  day.innerText = now.getDate();
  month.innerText = months[now.getMonth()];
  year.innerText = now.getFullYear();
  let hour = now.getHours() * 30;
  let minute = now.getMinutes() * deg;
  let second = now.getSeconds() * deg;

  hours.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minutes.style.transform = `rotateZ(${minute}deg)`;
  seconds.style.transform = `rotateZ(${second}deg)`;
};

runClock();
setInterval(runClock, 1000);
