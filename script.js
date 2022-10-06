window.onload = function () {
    initShoppingList();
};


function initShoppingList () {
    let form = document.getElementById("item-form");
    form.addEventListener("submit", (event) => {
        handleItemForm(event, form);
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

function addItemToShoppingList() {
    let itemName = document.getElementById("tax-rate");
    let itemAmount = document.getElementById("deposit-amount");
    let depositDate = document.getElementById("deposit-date")
    let id = getRandomInt(0, 10000000);


    let itemHtml = createListItemHtml(itemName.value, itemAmount.value, depositDate.value, id);

    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent (id) {
    let deleteButton = document.getElementById("button"+id);
    deleteButton.addEventListener("click", () => {
        removelistTtem(id);
    });
}

function createListItemHtml(itemName, itemAmount, depositDate, id) {
    return `
        <li id="item${id}"> 
            ${itemName} - ${itemAmount} - ${depositDate}
            <button id="button${id}" type="button">Delete Item</button>
        </li>`;
}

function removelistTtem (id) {
    let listItem = document.getElementById("item"+id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}