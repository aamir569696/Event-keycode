
let inputbox = document.querySelector("input");
let keysParent = document.querySelector(".keys-box");
let box1 = document.getElementById("keypressed");
let box2 = document.getElementById("Keycode");
let box3 = document.getElementById("eventcode");

// Desktop: keydown event
window.addEventListener("keydown", (event) => {
  showKeyDetails(event.key, event.key.charCodeAt(0), event.code);
});

// Mobile: input event (for virtual keyboard)
inputbox.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.length > 0) {
    let key = value[value.length - 1]; // last typed character
    showKeyDetails(key, key.charCodeAt(0), "MobileInput");
    // Do NOT clear input immediately — keep focus
    inputbox.value = ""; // optional, works with focus
  }
});

// Common function
function showKeyDetails(key, keyCode, code) {
  box1.innerHTML = key;
  box2.innerHTML = keyCode;
  box3.innerHTML = code;

  // Animation handling
  inputbox.classList.add("hide");
  setTimeout(() => {
    inputbox.style.display = "none";
    keysParent.style.display = "flex";
    keysParent.classList.add("show");
  }, 500);
}

// Ensure mobile keyboard stays focused
inputbox.addEventListener("focus", () => {
  keysParent.style.display = "none"; // hide keys box when typing again
  inputbox.classList.remove("hide");
  inputbox.style.display = "block";
});
