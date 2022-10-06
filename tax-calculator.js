function updateDepositList () {
    form.addEventListener("submit", (event) => {
        let taxRate = document.getElementById("taxRate");
        let locationCode = document.getElementById("locationCode");
        let paymentAmount = document.getElementById("paymentAmount")
        console.log(preTaxCalculator(taxRate, paymentAmount))
        console.log(taxCalculator(paymentAmount))
    });
}

function handleItemForm(event, formRef) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    addItemToShoppingList();
    formRef.reset();

    return false;
}


/**
let taxRate = document.getElementById("taxRate")
let locationCode = document.getElementById("locationCode")
let paymentAmount = document.getElementById("paymentAmount")
 **/

//This function calculates the pre-tax amount.
function preTaxCalculator(percentage, dollarAmount){
    let calculatedPreTax = dollarAmount / (1 + percentage)
    return calculatedPreTax.toFixed(2)
}

//This function calculates the amount of taxes owed for the income.
function taxCalculator(totalPayment) {
    let calculatedTax = totalPayment - preTaxCalculator(taxRate, paymentAmount)
    return calculatedTax.toFixed(2)
}
