// Define an array of hard-coded customer data
const hardCodedCustomer = [
    {
        name: "Joe Jawndel",
        email: "JJawndel@gmail.com",
        phone: "905-221-3490",
        address: "1220 Royal Lane",
        city: "Niagara Falls",
        postal: "A2V 3NM",
        province: "Ontario",
        Equipment: "Craftsman Bagged Lawnmower"
    },
    {
        name: "Billy Talent",
        email: "BTalent@gmail.com",
        phone: "289-334-3420",
        address: "1810 Salty Springs",
        city: "Toronto",
        postal: "A2V 3NM",
        province: "Alberta",
        Equipment: "Dewalt Drill"
    },
    {
        name: "Julio Mendes",
        email: "JMendes@hotmail.com",
        phone: "289-493-2061",
        address: "6820 Far Crescent",
        city: "Ottawa",
        postal: "A2V 3NM",
        province: "Quebec",
        Equipment: "Craftsman Saw"
    }
];


// Function to fill the table with customer data, including "Edit" and "Detail" buttons
function fillTableWithCustomerData() {
    const table = document.getElementById("customerTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    // Clear the table
    tbody.innerHTML = '';

    for (let i = 0; i < hardCodedCustomer.length; i++) {
        const customer = hardCodedCustomer[i];
        const customerString = JSON.stringify(customer).toLowerCase();

        // Check if the search term matches any part of the customer data
        if (customerString.includes(searchTerm)) {
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

// Function to navigate to the customerCreate.html page
function createCustomer() {
    // Redirect to the customerCreate.html page
    window.location.href = "customerCreate.html";
}

document.addEventListener("DOMContentLoaded", function() {
    fillTableWithCustomerData();

    // Add an event listener to the search input for real-time filtering
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        fillTableWithCustomerData();
    });
});
