function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const thankBtn = document.querySelectorAll(".thank-btn");
const thankBg = document.querySelector(".bground-thank");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");
console.log("modal-btn", modalCloseBtn)

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalCloseBtn.addEventListener("click", alert("andre"))

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// document.getElementById("closeform").addEventListener("click", function(closeModal) {
// 	modalBg.style.display = "none";
// });


// // fermer formulaire via croix
// document.getElementsById("#close").addEventListener("click", function(closeModal) {
// 	modalBg.style.display = "none";
// });

