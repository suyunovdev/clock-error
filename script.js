// // setTimeout(() => {
// //   alert("This message appears after 2 seconds.");
// // }, 5000);

// let intervalId = setInterval(function () {
//   console.log("This message appears every 1 second.");
// }, 1000);

// // To stop the interval after some time
// setTimeout(function () {
//   clearInterval(intervalId);
//   console.log("Interval stopped.");
// }, 5000);

// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  hour.innerHTML = h;
  minute.innerHTML = m;
  second.innerHTML = s;
}, 1000);

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");
setInterval(() => {
  let date = new Date();
  let y = date.getFullYear();
  let mo = date.getMonth() + 1;
  let d = date.getDate();
  year.innerHTML = y;
  month.innerHTML = mo;
  day.innerHTML = d;
}, 1000);

setInterval(() => {
  alert("Tugnani bosing");
}, 10);
