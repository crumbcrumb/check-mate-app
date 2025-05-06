const billAmountTipElm = document.getElementById("bill-amount-tip");
const tipPercentElm = document.getElementById("tip-p");
const totalTipElm = document.getElementsById("total-tip-amount");
const tipBtn = document.getElementById("tip-btn");

const billAmountSplitElm = document.getElementById("bill-amount-split");
const numOfPeopleElm = document.getElementById("total-people");
const totalSplitElm = document.getElementById("total-split-amount");
const splitBtn = document.getElementById("split-btn");


tipBtn.addEventListener("click", handleCalculateTip)

function handleCalculateTip(event) {
    event.preventDefault();
// let tip = billAmountTipElm * tipPercentElm
// totalTipElm.textContent = `${tip}`;
    event.target.reset();
}

splitBtn.addEventListener("click", handleCalculateSplit)

function handleCalculateSplit(event) {
    event.preventDefault();
// let split = billAmountSplitElm / numOfPeopleElm
// totalSplitElm.textContent = `${split}`;
    event.target.reset();
}