// Define an array of hard-coded equipment
const hardCodedCustomer = [
    {
        name: "Joe Jawndel",
        age: 23,
        email: "JJawndel@gmail.com",
        phone: "905-221-3490",
        address: "1220 Royal lane",
        city: "Niagara Falls"
    },
    {
        name: "Billy Talent",
        age: 30,
        email: "BTalent@gmail.com",
        phone: "289-334-3420",
        address: "1810 Salty Springs",
        city: "Welland"
    },
    {
        name: "Julio Mendes",
        age: 19,
        email: "JMendes@hotmail.com",
        phone: "289-493-2061",
        address: "6820 Far Crescent",
        city: "St Catharines"
    }
];

// Function to fill the customer table with hard-coded customers and an Edit button
function fillTableWithHardCodedEquipment() {
    const table = document.getElementById("customerTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < hardCodedCustomer.length; i++) {
        const customer = hardCodedCustomer[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}</td>
            <td>${customer.city}</td>
            <td><button onclick="editCustomer(${i})">Edit</button></td>            
        `;
        tbody.appendChild(row);
    }
}

// Function to initialize local storage with sample data
function initializeLocalStorageWithData() {
    // Store the sample data in local storage
    localStorage.setItem("customerData", JSON.stringify(hardCodedCustomer));
}

// Function to fill the equipment table with data from local storage
function fillTableWithEquipmentFromLocalStorage() {
    // Retrieve the equipment data from local storage
    const storedCustomerData = JSON.parse(localStorage.getItem("customerData")) || [];

    const table = document.getElementById("customerTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    // Clear existing rows
    tbody.innerHTML = "";

    for (let i = 0; i < storedCustomerData.length; i++) {
        const customer = storedCustomerData[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.email}</td>
            <td>${customer.phone}</td>
            <td>${customer.address}</td>
            <td>${customer.city}</td>
            <td><button onclick="editCustomer(${i})">Edit</button></td>
        `;
        tbody.appendChild(row);
    }
}


// Function to filter people based on the search input
function filterCustomer() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("customerTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const rows = tbody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const columns = row.getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < columns.length; j++) {
            const cell = columns[j];
            if (cell) {
                const text = cell.textContent.toLowerCase();
                if (text.includes(filter)) {
                    found = true;
                    break;
                }
            }
        }

        if (found) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}

function editCustomer(index) {
    // Get the equipment data to edit
    const customerToEdit = hardCodedCustomer[index];

    // Convert the equipment data to a JSON string
    const customerDataString = JSON.stringify(customerToEdit);

    // Redirect to inventoryEdit.html with equipment data as a parameter
    window.location.href = `customerEdit.html?customerData=${customerDataString}`;
}

function createCustomer(index) {
    // Get the equipment data to edit
    const customerToCreate = hardCodedCustomer[index];

    // Convert the equipment data to a JSON string
    const customerDataString = JSON.stringify(customerToCreate);

    // Redirect to inventoryEdit.html with equipment data as a parameter
    window.location.href = `customerCreate.html?customerData=${customerDataString}`;
}

//Fill table with hard coded customers
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchInput").addEventListener("input", filterCustomer);
    fillTableWithHardCodedEquipment();
});
