/*
 * The below fuction caputers the users input for Tax Rate and Payment Amount.
 * It then converts the tax rate whole number to a decimal and adds one to that number
 * then it divides the payment amount by the converted tax rate.
 * Finally it assigns the result of that division to the variable totalAmount and
 * add it to the webpage via a new paragraph tag.
 */

function calculateTaxes() {
    let taxRateInput = document.getElementById("taxRate").value;
    let paymentAmountInput = document.getElementById("paymentAmount").value;
    let taxRateConverter = (taxRateInput / 100) + 1;
    let totalAmount = paymentAmountInput / taxRateConverter;

    const inputRecorder = document.createElement("p");
    inputRecorder.innerHTML = "INCOME = $" + totalAmount.toFixed(2);
    document.body.appendChild(inputRecorder);
}
