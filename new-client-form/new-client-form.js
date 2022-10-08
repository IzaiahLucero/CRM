function collectNewClientData() {
    let firstNameInput = document.getElementById("firstName").value;
    let lastNameInput = document.getElementById("lastName").value;
    let primaryPhoneInput = document.getElementById("primaryPhone").value;
    let secondaryPhoneInput = document.getElementById("secondaryPhoneNumber").value;
    let emailAddressInput = document.getElementById("emailAddress").value;
    let projectStreetAddressInput = document.getElementById("projectStreetAddress").value;
    let projectCityInput = document.getElementById("projectCity").value;
    let projectStateInput = document.getElementById("projectState").value;
    let projectZipInput = document.getElementById("projectZip").value;
    let locationCodeInput = document.getElementById("locationCode").value;
    console.log(firstNameInput + ", " + lastNameInput + ", " + primaryPhoneInput + ", " + secondaryPhoneInput + ", " + emailAddressInput + ", " + projectStreetAddressInput + ", " + projectCityInput + ", " + projectStateInput + ", " + projectZipInput);

}

