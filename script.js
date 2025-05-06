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
  //to make sure both inputs are numbers
  if (!isNaN(input1) && !isNaN(input2)) {
    totalTipElm.textContent = input1 * input2;
  } else {
    totalTipElm.textContent = "Please enter a valid number";
  }
  event.target.reset();
}

splitBtn.addEventListener("click", handleCalculateSplit);

function handleCalculateSplit(event) {
  event.preventDefault();
  let input1 = parseFloat(billAmountSplitElm.value); //so input will register decimal numbers
  let input2 = parseInt(numOfPeopleElm.value); //so the input will only register whole numbers
  //to make sure both inputs are numbers
  if (!isNaN(input1) && !isNaN(input2)) {
    totalSplitElm.textContent = input1 / input2;
  } else {
    totalSplitElm.textContent = "Please enter a valid number";
  }
  event.target.reset();
}

//play audio when the btn is clicked
tipBtn.addEventListener("click", handlePlayAudioTip);

function handlePlayAudioTip(event) {
  audio.currentTime = 0;
  audio.play();
}


splitBtn.addEventListener("click", handlePlayAudioSplit);

function handlePlayAudioSplit(event) {
  audio.currentTime = 0;
  audio.play();
}