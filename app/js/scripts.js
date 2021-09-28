document.addEventListener("click", test);

function test(e) {
  console.log(" target ", e.target);
}

var mapClicker = document.querySelector(".map");
var body = document.querySelector("body");
// var closer ...

// closer.addEventListener ...
mapClicker.addEventListener("click", show);

function show(e) {
  e.preventDefault();
  body.classList.toggle("showme"); // NEW
}
