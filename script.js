const billAmountTipElm = document.getElementById("bill-amount-tip");
const tipPercentElm = document.getElementById("tip-p");
const totalTipElm = document.getElementById("total-tip-amount");
const tipBtn = document.getElementById("tip-btn");

const billAmountSplitElm = document.getElementById("bill-amount-split");
const numOfPeopleElm = document.getElementById("total-people");
const totalSplitElm = document.getElementById("total-split-amount");
const splitBtn = document.getElementById("split-btn");

// tipBtn.addEventListener("click", handleCalculateTip);

// function handleCalculateTip(event) {
//   event.preventDefault();
//   let input1 = billAmountTipElm;
//   let input2 = tipPercentElm;
//   if (!isNaN(billAmountTipElm) && !isNaN(tipPercentElm)) {
//   }
 
//   event.target.reset();
// }

splitBtn.addEventListener("click", handleCalculateSplit);

function handleCalculateSplit(event) {
  event.preventDefault();
  let input1 = billAmountSplitElm.value;
  let input2 = numOfPeopleElm.value;
  if (!isNaN(billAmountSplitElm) && !isNaN(numOfPeopleElm)) {
    totalSplitElm.textContent = input1 / input2;
  } else {
    totalSplitElm.textContent = "Please enter a numeric value";
  }

  // let split = billAmountSplitElm / numOfPeopleElm
  // totalSplitElm.textContent = `${split}`;
  event.target.reset();
}
