const input = [{ 1: "", 2: "" }];
const FORM_DATA = [{ key: "toto", state: "default", message: undefined }];
const ERROR_DATA = [{ key: "toto", message: "titi" }];

function getInputStateByKey() {}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  // DOM Elements
  const thankBtn = document.querySelectorAll(".thank-btn");
  const thankBg = document.querySelector(".bground-thank");
  const modalbg = document.querySelector(".bground");
  const modalBtn = document.querySelectorAll(".modal-btn");
  const modalCloseBtn = document.querySelector(".close");
  const formData = document.querySelectorAll(".formData");
  console.log("modal-btn", modalCloseBtn);

  // launch modal event
  modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
  modalCloseBtn.addEventListener("click", closeModal);

  // launch modal form
  function launchModal() {
    modalbg.style.display = "block";
  }

  // close modal form
  function closeModal() {
    modalbg.style.display = "none";
  }
  // alert("andre")

  // DOM ELEMENTS FORM FIELDS VALIDATION
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const allLocations = document.getElementById('allLocations');
const locations = document.querySelectorAll('#allLocations .checkbox-input');
const checkbox1 = document.getElementById('checkbox1');
const input = document.getElementsByClassName('text-control');
const form = document.getElementById('form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;

// ------ FORM FIELDS VALIDATION ------ //
// NAMES CHECK (FIRST NAME AND LAST NAME)
function checkFirstName() {
    if (firstName.value.trim().length < 2 || first.value.trim() === '' || !firstName.value.match(regex)) {
        firstName.parentElement.setAttribute('data-error-visible', 'true');
        firstName.style.border = '2px solid #e54858';
        return false;
    }
    first.parentElement.setAttribute('data-error-visible', 'false');
    first.style.border = 'solid #279e7a 0.19rem';
    return true;
}
