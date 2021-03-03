function addition(num1, num2) {
  return num1 + num2;
}
function substruct(num1, num2) {
  return num1 - num2;
}
function multyply(num1, num2) {
  return num1 * num2;
}
function devide(num1, num2) {
  return num1 / num2;
}
/* clip decchimal num to 0.00 */
function cutDecimal4(num) {
  num = String(num);
  if (num.indexOf(".") !== -1) {
    let numArr = num.split(".");
    if (numArr.length == 1) {
      return Number(num);
    } else {
      return Number(
        numArr[0] +
          "." +
          numArr[1].charAt(0) +
          numArr[1].charAt(1) +
          numArr[1].charAt(2) +
          numArr[1].charAt(3)
      );
    }
  } else {
    return Number(num);
  }
}
/* makes a formula of actions */
function checkActions(i, arr, action) {
  let num1 = Number(arr[i - 1]),
    num2 = Number(arr[i + 1]);
  arr.splice(i - 1, 3, String(calcutils[action](num1, num2)));
  console.log(arr);
}

/* export default const */
const calcutils = {
  addition,
  substruct,
  multyply,
  devide,
  cutDecimal4,
  checkActions,
};
export default calcutils;
