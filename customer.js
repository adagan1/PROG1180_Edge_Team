// Define an array of hard-coded customer data
const hardCodedCustomer = [
    {
        name: "Joe Jawndel",
        email: "JJawndel@gmail.com",
        phone: "905-221-3490",
        address: "1220 Royal Lane",
        city: "Niagara Falls",
        postal: "A2V 3NM",
        province: "Ontario"
    },
    {
        name: "Billy Talent",
        email: "BTalent@gmail.com",
        phone: "289-334-3420",
        address: "1810 Salty Springs",
        city: "Welland",
        postal: "A2V 3NM",
        province: "Alberta"
    },
    {
        name: "Julio Mendes",
        email: "JMendes@hotmail.com",
        phone: "289-493-2061",
        address: "6820 Far Crescent",
        city: "St Catharines",
        postal: "A2V 3NM",
        province: "Quebec"
    }
];

// Function to fill the table with customer data, including "Edit" and "Detail" buttons
function fillTableWithCustomerData() {
    const table = document.getElementById("customerTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < hardCodedCustomer.length; i++) {
        const customer = hardCodedCustomer[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>
                <button onclick="editCustomer(${i})">Edit</button>
                <button onclick="detailCustomer(${i})">Detail</button>
            </td>
        `;
        tbody.appendChild(row);
    }
}

// Function to display customer details when the "Detail" button is clicked
function detailCustomer(index) {
    // Get the customer data to display
    const customerData = hardCodedCustomer[index];

    // Convert the customer data to a JSON string
    const customerDataString = JSON.stringify(customerData);

    // Store the selected customer data in sessionStorage for access on the new page
    sessionStorage.setItem("selectedCustomer", customerDataString);

    // Redirect to the customerDetail.html page
    window.location.href = "customerDetail.html";
}

// Function to edit customer information
function editCustomer(index) {
    // Get the customer data to edit
    const customerToEdit = hardCodedCustomer[index];

    // Convert the customer data to a JSON string
    const customerDataString = JSON.stringify(customerToEdit);

    // Redirect to customerEdit.html with customer data as a parameter
    window.location.href = `customerEdit.html?customerData=${customerDataString}`;
}

document.addEventListener("DOMContentLoaded", function() {
    fillTableWithCustomerData();
});
