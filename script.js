// setTimeout(() => {
//   alert("This message appears after 2 seconds.");
// }, 5000);

// let intervalId = setInterval(() => {
//   console.log("This message appears every 1 second.");
// }, 1000);

// // To stop the interval after some time
// setTimeout( ()=> {
//   clearInterval(intervalId);
//   console.log("Interval stopped.");
// }, 5000);

let date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

year.innerHTML = date.getFullYear();
month.innerHTML = date.getMonth();
day.innerHTML = date.getDate();

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

setInterval(() => {
  let date = new Date();
  hour.innerHTML = date.getHours();
  minute.innerHTML = date.getMinutes();
  second.innerHTML = date.getSeconds();
}, 1000);
