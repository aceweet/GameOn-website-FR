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
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// fermer formulaire via croix
document.getElementById("closeform").addEventListener("click", function(closeModal) {
	modalBg.style.display = "none";
});

// fermer thanks via "fermer"
document.querySelector(".button-thank").addEventListener("click", function(closeThank) {
	thankBg.style.display = "none";
	modalBg.style.display = "none";
});

// fermer thanks via croix
document.getElementById("closethanks").addEventListener("click", function(closeThank) {
	thankBg.style.display = "none";
	modalBg.style.display = "none";
});
