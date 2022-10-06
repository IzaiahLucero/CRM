/*
 * The below fuction caputers the users input for Tax Rate and Payment Amount
 * after it converts the whole number to a decimal it adds one to that number
 * then it
 */
function checkScript() {

    let taxRateInput = document.getElementById("taxRate").value;
    let paymentAmountInput = document.getElementById("paymentAmount").value;
    let taxRateConverter = (taxRateInput / 100) + 1;
    let totalAmount = paymentAmountInput / taxRateConverter;


    const inputRecorder = document.createElement("p");
    inputRecorder.innerHTML = "INCOME = $" + totalAmount.toFixed(2);
    document.body.appendChild(inputRecorder);
}
