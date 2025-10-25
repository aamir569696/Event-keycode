
let inputbox = document.querySelector("input");
let keysParent = document.querySelector(".keys-box");
let box1 = document.getElementById("keypressed");
let box2 = document.getElementById("Keycode");
let box3 = document.getElementById("eventcode");

// For Desktop keyboard press
window.addEventListener("keydown", (event) => {
  showKeyDetails(event.key, event.key.charCodeAt(0), event.code);
});

//  For Mobile when typing in input
inputbox.addEventListener("input", (event) => {
  let value = event.target.value; // Jo user ne type kiya
  if (value.length > 0) {
    let key = value[value.length - 1]; // Last typed character
    showKeyDetails(key, key.charCodeAt(0), "MobileInput");
    inputbox.value = ""; // Input ko clear kar do
  }
});

//  Common function to show data and animation
function showKeyDetails(key, keyCode, code) {
  box1.innerHTML = key;
  box2.innerHTML = keyCode;
  box3.innerHTML = code;
  inputbox.classList.add('hide');
  setTimeout(() => {
    inputbox.style.display = "none";
    keysParent.style.display = "flex";
    keysParent.classList.add("show");
  }, 500);
}
