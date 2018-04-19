console.log('jest git');

    'use strict';

    document.addEventListener('DOMContentLoaded', function() {
      // tutaj będziemy umieszczać kod ze wszystkich zadań
    });
var forDropdown = document.querySelector('.for-dropdown');
console.log(forDropdown);

forDropdown.addEventListener("mouseenter", function() {

  forDropdown.querySelector('.dropdown').style.display = "block";
  })
  forDropdown.addEventListener("mouseleave", function() {

    forDropdown.querySelector('.dropdown').style.display = "none";
  });

var buttons = document.querySelectorAll(".read-more");
console.log(buttons);

for (var i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", function() {

  if (this.innerText == "MNIEJ") {

  this.previousElementSibling.style.display = "none";
  this.innerText = "WIĘCEJ";
} else {
  this.previousElementSibling.style.display = "block";
  this.innerText = "MNIEJ";
}

})
}
var navbar = document.querySelector('.navbar-fixed-top');
console.log(navbar);

window.addEventListener("scroll", function(event) {

var rect = document.querySelector('.main-points').getBoundingClientRect();

if(rect.y <= 0) {
  navbar.style.borderBottomColor = "red";
} else if(rect.y > 300) {
  navbar.style.borderBottomColor = "white";

}

// console.log("teraz robię scroll", event);

})

var button = document.querySelector(".new-btn");
console.log(button);

button.addEventListener("click", function() {
  // console.log(button);
  window.scroll(0,0);
})
