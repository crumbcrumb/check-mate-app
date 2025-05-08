const billAmountTipElm = document.getElementById("bill-amount-tip");
const tipPercentElm = document.getElementById("tip-p");
const totalTipElm = document.getElementById("total-tip-amount");
const tipBtn = document.getElementById("tip-btn");

const billAmountSplitElm = document.getElementById("bill-amount-split");
const numOfPeopleElm = document.getElementById("total-people");
const totalSplitElm = document.getElementById("total-split-amount");
const splitBtn = document.getElementById("split-btn");

const audio = new Audio("cash-register.mp3");

tipBtn.addEventListener("click", handleCalculateTip);

function handleCalculateTip(event) {
  event.preventDefault();
  let input1 = parseFloat(billAmountTipElm.value); //so input will register decimal numbers
  let input2 = tipPercentElm.value;
  //to make sure both inputs are numbers that are not zero and for audio to only play if those conditions are met
  if (!isNaN(input1) && input1 !== 0 && !isNaN(input2) && input1 > 0) {
    totalTipElm.value = input1 * input2;
    audio.currentTime = 0;
    audio.play();
    audio.volume = 0.5;
  } else {
    totalTipElm.value = "Please enter a valid number";
  }
  event.target.reset();
}

splitBtn.addEventListener("click", handleCalculateSplit);

function handleCalculateSplit(event) {
  event.preventDefault();
  let input1 = parseFloat(billAmountSplitElm.value);
  let input2 = parseInt(numOfPeopleElm.value); //so the input will only register whole numbers
  if (!isNaN(input1) && input1 !== 0 && !isNaN(input2) && input2 !== 0 && input1 > 0 && input2 > 0) {
    totalSplitElm.value = input1 / input2;
    audio.currentTime = 0;
    audio.play();
    audio.volume = 0.5;
  } else {
    totalSplitElm.value = "Please enter a valid number";
  }
  event.target.reset();
}
