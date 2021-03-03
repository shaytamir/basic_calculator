import { onEqualClick } from "../equalClick.js";

export const mainLogic = (key) => {
  /* if start value - 0 , click only on number and accessories */
  if (
    view.innerHTML === "0" ||
    view.innerHTML === "Infinity" ||
    view.innerHTML === "NaN"
  ) {
    if (key.action === "num") {
      view.innerHTML = key.value;
    } else if (key.action === "point") {
      view.innerHTML += key.value;
    } else if (key.minus) {
      view.innerHTML = key.minus;
    }
  } else {
    if (key.action === "clear") {
      clearFunc();
    } else if (key.action === "del") {
      deleteLast();
    } else if (key.action === "num") {
      view.innerHTML += key.value;
    } else if (key.action === "point") {
      checkForDecimal(view.innerHTML, key);
    } else if (key.action === "action") {
      actionKey(key);
    } else if (key.action === "aqual") {
      onEqualClick();
    }
  }
};

const deleteLast = () => {
  const lastValue = view.innerHTML.slice(view.innerHTML.length - 1);
  let newValue = null;
  lastValue !== " "
    ? (newValue = view.innerHTML.slice(0, view.innerHTML.length - 1))
    : (newValue = view.innerHTML.slice(0, view.innerHTML.length - 3));

  newValue === "" ? (newValue = 0) : newValue;
  view.innerHTML = newValue;
};

const actionKey = (key) => {
  let lestClick = view.innerHTML[view.innerHTML.length - 1];
  /* allows to click "action" only when number before */
  if (Number.isInteger(parseFloat(lestClick))) {
    view.innerHTML += key.value;
  }
  //  else if (key.minus) {
  //   view.innerHTML += "-";
  // }
  else if (lestClick === ".") {
    const toSlice = view.innerHTML.length - 1;
    view.innerHTML = view.innerHTML.slice(0, toSlice);
    view.innerHTML += key.value;
  } else {
    /* to change action when thers an action */
    const toSlice = view.innerHTML.length - 3;
    view.innerHTML = view.innerHTML.slice(0, toSlice);
    view.innerHTML += key.value;
  }
};

const clearFunc = () => {
  view.innerHTML = 0;
  history_ul.innerHTML = "";
  document.getElementById("calc_history").style.display = "none";
};

/* check for other decimal dot */
const checkForDecimal = (value, key) => {
  if (!trueORfalse(value)) {
    view.innerHTML += key.value;
  }
};

function trueORfalse(value) {
  for (let i = value.length - 1; i >= 0; i--) {
    if (value[i] === ".") {
      return true;
    } else if (value[i] === " " || i === 0) {
      return false;
    }
  }
}

// const keysLogic = {
//   mainLogic,
//   deleteLast,
//   actionKey,
//   clearFunc,
//   checkForDecimal,
// };

// export default keysLogic;
