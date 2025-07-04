/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-button");
const inputEl = document.getElementById("value-input");
const lengthEl = document.getElementById("length-result");
const volumeEl = document.getElementById("volume-result");
const massEl = document.getElementById("mass-result");

function initlize() {
  inputEl.value = "0";
  lengthEl.textContent = "0 meters = 0 feet | 0 feet = 0 meters";
  volumeEl.textContent = "0 liters = 0 gallons | 0 gallons = 0 liters";
  massEl.textContent = "0 kilograms = 0 pounds | 0 pounds = 0 kilograms";
}

convertBtn.addEventListener("click", function () {
  const inputValue = parseFloat(inputEl.value);
  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    return;
  }

  lengthEl.textContent = `${inputValue} meters = ${metersToFeet(inputValue).toFixed(3)} feet | ${inputValue} feet = ${feetToMeters(inputValue).toFixed(3)} meters`;
  volumeEl.textContent = `${inputValue} liters = ${litersToGallons(inputValue).toFixed(3)} gallons | ${inputValue} gallons = ${gallonsToLiters(inputValue).toFixed(3)} liters`;
  massEl.textContent = `${inputValue} kilograms = ${kilogramsToPounds(inputValue).toFixed(3)} pounds | ${inputValue} pounds = ${poundsToKilograms(inputValue).toFixed(3)} kilograms`;
});

inputEl.addEventListener("click", function () {
  inputEl.value = "";
});

function metersToFeet(meters) {
  return meters * 3.281;
}
function feetToMeters(feet) {
  return feet / 3.281;
}

function litersToGallons(liters) {
  return liters * 0.264;
}
function gallonsToLiters(gallons) {
  return gallons / 0.264;
}

function kilogramsToPounds(kg) {
  return kg * 2.204;
}
function poundsToKilograms(lb) {
  return lb / 2.204;
}

initlize();
