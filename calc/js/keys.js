import { keysArr } from "./data/keysArr.js";
import { mainLogic } from "./services/keysLogic.js";

export function createKeys() {
  for (let key of keysArr) {
    main_calc_div.innerHTML += `<button id=${key.id} class="keys" style="grid-area: ${key.id}">${key.value}</button>`;
  }
  clickAndPress();
}

function clickAndPress() {
  /* key click  */
  for (let key of keysArr) {
    document.getElementById(key.id).addEventListener("click", () => {
      mainLogic(key);
    });
    /* key press */
    document.querySelector("body").addEventListener("keypress", (e) => {
      if (key.keyPress === e.key) {
        mainLogic(key);
      }
    });
  }
}
