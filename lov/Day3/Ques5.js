// setTimeout() - It delays the execution of a function by a given amount of time (in milliseconds), and then runs it only once.
// console.log("Hello");
// setTimeout(function () {
//   console.log("Bye");
// }, 3000); 

// console.log("Wait for it");

// setInterval() - It runs a function repeatedly after a fixed time interval (in milliseconds), or until stopped.
console.log("Repeatation in");
setTimeout(function () {
  console.log("3");
}, 1000); 
setTimeout(function () {
  console.log("2");
}, 2000); 
setTimeout(function () {
  console.log("1");
}, 3000); 
setTimeout(function(){
setInterval(function () {
  console.log("Here we go");
}, 1000)}, 4000);  
