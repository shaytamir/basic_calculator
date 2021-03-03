import calcutils from "./services/calculits.js";
import { makeHistory } from "./calcHistory.js";

export function onEqualClick() {
  /* splits screen value to array (splits by " " seraunding actionKeys) */
  let valueSplit = view.innerHTML.split(" ");
  console.log(valueSplit);

  for (let i = 0; i < valueSplit.length; i++) {
    if (valueSplit[i] === "x") {
      calcutils.checkActions(i, valueSplit, "multyply");
      i--;
    }
    if (valueSplit[i] === "/") {
      calcutils.checkActions(i, valueSplit, "devide");
      i--;
    }
  }
  /* after   / and x   action-Keys,   checks + and -   */
  for (let i = 0; i < valueSplit.length; i++) {
    if (valueSplit[i] === "-") {
      calcutils.checkActions(i, valueSplit, "substruct");
      i--;
    }
    if (valueSplit[i] === "+") {
      calcutils.checkActions(i, valueSplit, "addition");
      i--;
    }
  }

  const equation = view.innerHTML.slice(0);
  /* attends dechimal point */
  const result = calcutils.cutDecimal4(valueSplit);
  console.log("equation : ", equation, ",result : ", result);
  /* show result on view */
  view.innerHTML = result;
  /*  make a new clickeble history raw */
  makeHistory(equation, result);
}
