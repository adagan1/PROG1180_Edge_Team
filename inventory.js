// Define an array of hard-coded equipment
const hardCodedEquipment = [
    {
        equipment: "Lawnmower",
        name: "Brand1 Lawnmower",
        description: "This is a Lawnmower from Brand1.",
        price: "250.00",
        status: "In stock",
        amount: 5,
        colour: "Green"
    },
    {
        equipment: "Drill",
        name: "Brand2 Drill",
        description: "This is a Drill from Brand2.",
        price: "120.00",
        status: "Out of stock",
        amount: 0,
        colour: "Red"
    },
    {
        equipment: "Saw",
        name: "Brand3 Saw",
        description: "This is a Saw from Brand3.",
        price: "100.00",
        status: "In stock",
        amount: 2,
        colour: "Grey"
    },
    {
        equipment: "Lawnmower",
        name: "Brand1 Lawnmower",
        description: "This is a Lawnmower from Brand1.",
        price: "120.00",
        status: "In stock",
        amount: 10,
        colour: "Green"
    },
];

// Function to fill the equipment table with hard-coded equipment and an Edit button
function fillTableWithHardCodedEquipment() {
    const table = document.getElementById("equipmentTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < hardCodedEquipment.length; i++) {
        const equipment = hardCodedEquipment[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${equipment.equipment}</td>
            <td>${equipment.name}</td>
            <td>${equipment.description}</td>
            <td>$${equipment.price}</td>
            <td>${equipment.status}</td>
            <td>${equipment.amount}</td>
            <td>${equipment.colour}</td>
            <td><button onclick="editEquipment(${i})">Edit</button></td>
        `;
        tbody.appendChild(row);
    }
}

// Function to initialize local storage with sample data
function initializeLocalStorageWithData() {
    // Store the sample data in local storage
    localStorage.setItem("equipmentData", JSON.stringify(hardCodedEquipment));
}

// Function to fill the equipment table with data from local storage
function fillTableWithEquipmentFromLocalStorage() {
    // Retrieve the equipment data from local storage
    const storedEquipmentData = JSON.parse(localStorage.getItem("equipmentData")) || [];

    const table = document.getElementById("equipmentTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    // Clear existing rows
    tbody.innerHTML = "";

    for (let i = 0; i < storedEquipmentData.length; i++) {
        const equipment = storedEquipmentData[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${equipment.equipment}</td>
            <td>${equipment.name}</td>
            <td>${equipment.description}</td>
            <td>$${equipment.price}</td>
            <td>${equipment.status}</td>
            <td>${equipment.amount}</td>
            <td>${equipment.colour}</td>
            <td><button onclick="editEquipment(${i})">Edit</button></td>
        `;
        tbody.appendChild(row);
    }
}

//Function to filter equipment based on the search input
function filterEquipment() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("equipmentTable");
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

function editEquipment(index) {
    // Get the equipment data to edit
    const equipmentToEdit = hardCodedEquipment[index];

    // Convert the equipment data to a JSON string
    const equipmentDataString = JSON.stringify(equipmentToEdit);

    // Redirect to inventoryEdit.html with equipment data as a parameter
    window.location.href = `inventoryEdit.html?equipmentData=${equipmentDataString}`;
}

function createInventory(index) {
    // Get the equipment data to edit
    const inventoryToCreate = hardCodedEquipment[index];

    // Convert the equipment data to a JSON string
    const inventoryDataString = JSON.stringify(inventoryToCreate);

    // Redirect to inventoryEdit.html with equipment data as a parameter
    window.location.href = 'inventoryCreate.html?inventoryData=${inventoryDataString}';
}

// Fill table with hard-coded equipment and "Edit" buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchInput").addEventListener("input", filterEquipment);
    fillTableWithHardCodedEquipment(); // Call the modified function
});
