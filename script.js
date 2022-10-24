fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((customers) => {
        // console.log(customers)

        let targetTable = document.getElementById('target')

        customers.forEach((customer, index) => {
            console.log(customer)
            targetTable.innerHTML = targetTable.innerHTML + '<tr id="' + index + '">' + '<th scope="row">' + customer.id + '</th>' + '<td>' + customer.name + '</td>' + '<td>' + customer.address.street + '</td>' + '<td>' + customer.phone + '</td>' + '<td>' + "None" + '</td>' + '<td>' + customer.email + '</td>' + '<td>' + "USAA" + '</td>'+ '<td>' + "Pending" + '</td>' + '</tr>'

        })
    });