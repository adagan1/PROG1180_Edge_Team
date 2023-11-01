// Define an array of hard-coded equipment
const hardCodedEquipment = [
    {
        name: "Lawnmower",
        brand: "Brand1",
        description: "This is a Lawnmower from Brand1.",
        colour: "Green"
    },
    {
        name: "Drill",
        brand: "Brand2",
        description: "This is a Drill from Brand2.",
        colour: "Red"
    },
    {
        name: "Saw",
        brand: "Brand3",
        description: "This is a Saw from Brand3.",
        colour: "Grey"
    },
    {
        name: "Lawnmower",
        brand: "Brand1",
        description: "This is a Lawnmower from Brand1.",
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
            <td>${equipment.name}</td>
            <td>${equipment.brand}</td>
            <td>
            <button onclick="editEquipment(${i})">Edit</button>&nbsp;
            <button onclick="detailEquipment(${i})">Detail</button>
            </td>
            
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
            <td>${equipment.name}</td>
            <td>${equipment.brand}</td>
            <td>${equipment.description}</td>
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

// Function to display inventory details on a new page
function detailEquipment(index) {
    // Get the equipment data to display
    const equipmentData = hardCodedEquipment[index];

    // Convert the equipment data to a JSON string
    const equipmentDataString = JSON.stringify(equipmentData);

    // Store the selected equipment data in sessionStorage for access on the new page
    sessionStorage.setItem("selectedEquipment", equipmentDataString);

    // Redirect to the inventoryDetail.html page
    window.location.href = "inventoryDetail.html";
}

// Fill table with hard-coded equipment and "Edit" buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchInput").addEventListener("input", filterEquipment);
    fillTableWithHardCodedEquipment(); // Call the modified function
});
