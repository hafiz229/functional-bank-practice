// get deposit input value
function getInputValue(fieldId) {
  const inputField = document.getElementById(fieldId);
  const valueInText = inputField.value;
  const value = parseFloat(valueInText);
  inputField.value = "";
  return value;
}

// get any inner text
function getInnerTextValue(fieldId) {
  const fieldTag = document.getElementById(fieldId);
  const fieldValueInText = fieldTag.innerText;
  const value = parseFloat(fieldValueInText);
  return value;
}

// update deposit & withdraw value
function updateTotal(fieldId, amount) {
  const previousTotal = getInnerTextValue(fieldId);
  const newTotal = previousTotal + amount;
  document.getElementById(fieldId).innerText = newTotal;
}

// update balance
function updateBalance(amount) {
  const previousBalance = getInnerTextValue("balance-total");
  const newBalance = previousBalance + amount;
  document.getElementById("balance-total").innerText = newBalance;
}

// handle deposit
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const amount = getInputValue("deposit-input");
    if (amount > 0) {
      updateTotal("deposit-total", amount);
      updateBalance(amount);
    }
  });

// handle withdraw
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const amount = getInputValue("withdraw-input");
    const balance = getInnerTextValue("balance-total");
    if (amount > 0 && amount <= balance) {
      updateTotal("withdraw-total", amount);
      updateBalance(-amount);
    }
  });
