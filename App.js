const initPrice = document.querySelector("#initial-price");
const currPrice = document.querySelector("#current-price");
const stocNumber = document.querySelector("#stocks-number")
const tellBtn = document.querySelector("#button");
const ouptputEl = document.querySelector(".output-box");

tellBtn.addEventListener("click", clickHandler);

function clickHandler() {
  var initialPrice = Number(initPrice.value);
  var currentPrice = Number(currPrice.value);
  var stocksNumber = Number(stocNumber.value);

  calculateProfitOrLoss(initialPrice, currentPrice, stocksNumber);

}

function calculateProfitOrLoss(initial, current, number) {

  if (initial < 0 || current < 0 || number < 0){
    alert("The number entered cannot be negative..")
  } else {
    
    if(initial > current){
      let loss = (initial-current) * number;
      let lossPercentage = (loss / (initial*number)) * 100;
      ouptputEl.style.color = "red";
      ouptputEl.innerHTML = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage}% :(`;
    }
    else if(initial < current){
      let profit = (current-initial) * number;
      let profitPercentage = (profit / (initial*number)) * 100;
      ouptputEl.style.color = "green";
      ouptputEl.innerHTML = `Yay!! Your Profit is ${profit.toFixed(2)} and profit Percentage is ${profitPercentage.toFixed(2)}%`;
    } 
    else {
      ouptputEl.style.color = "white";
      ouptputEl.innerHTML = `No pain No gain, and no gain no pain :)`;
    }
  }
}