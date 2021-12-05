function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
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

// // fermer formulaire via croix
// document.getElementsById("#close").addEventListener("click", function(closeModal) {
// 	modalBg.style.display = "none";
// });

