function collectNewClientData() {
    let firstNameInput = document.getElementById("firstName").value;
    let lastNameInput = document.getElementById("lastName").value;
    let primaryPhoneInput = document.getElementById("primaryPhone").value;
    let secondaryPhoneInput = document.getElementById("secondaryPhone").value;
    let emailAddressInput = document.getElementById("emailAddress").value;
    let projectStreetAddressInput = document.getElementById("projectStreetAddress").value;
    return console.log(firstNameInput + ", " + lastNameInput + ", " + primaryPhoneInput + ", " + secondaryPhoneInput + ", " + emailAddressInput + ", " + projectStreetAddressInput);

}

