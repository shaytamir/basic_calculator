import { createKeys } from "./keys.js";

/* creates the calculator div and history div */
export const createCalc = function () {
  const $calculator = document.getElementById("calculator");
  $calculator.innerHTML += `
  <div id="main_calc_div"><div id="view">0</div>
  </div>
  <div id="calc_history"><h4>History</h4><ul id="history_ul"></ul>
  </div>`;
  createKeys();
};
