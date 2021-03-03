/* makes li  */
export function makeHistory(equation, result) {
  document.getElementById("calc_history").style.display = "block";
  const historyUl = document.getElementById("history_ul");
  let idLi = historyUl.childElementCount;
  
  historyUl.innerHTML += `<li id="li${idLi}">${equation} = ${result}</li>`;
  const liList = historyUl.children;
  histryListClick(liList);
}

/* click to restor history from list to screen */
function histryListClick(liList) {
  for (let li = 0; li < liList.length; li++) {
    document.getElementById("li" + li).addEventListener("click", () => {
      const equal = document.getElementById("li" + li).innerHTML;
      const equalSlice = equal.slice(0, equal.indexOf("=") - 1);
      document.getElementById("view").innerHTML = equalSlice;
    });
  }
}
