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
        price: "180.00",
        status: "In stock",
        amount: 8,
        colour: "Blue"
    },
    {
        equipment: "Weedwacker",
        name: "Brand4 Weedwacker",
        description: "This is a Weedwacker from Brand4.",
        price: "150.00",
        status: "Delivering",
        amount: 2,
        colour: "Yellow"
    },
    {
        equipment: "Wrench",
        name: "Brand5 Wrench",
        description: "This is a Wrench from Brand5.",
        price: "90.00",
        status: "In stock",
        amount: 4,
        colour: "Orange"
    },
    {
        equipment: "Chainsaw",
        name: "Brand6 Chainsaw",
        description: "This is a Chainsaw from Brand6.",
        price: "280.00",
        status: "In stock",
        amount: 6,
        colour: "Black"
    },
    {
        equipment: "Hammer",
        name: "Brand7 Hammer",
        description: "This is a Hammer from Brand7.",
        price: "15.00",
        status: "In stock",
        amount: 10,
        colour: "Grey"
    },
    {
        equipment: "Screwdriver",
        name: "Brand8 Screwdriver",
        description: "This is a Screwdriver from Brand8.",
        price: "10.00",
        status: "Out of stock",
        amount: 0,
        colour: "Red"
    },
    {
        equipment: "Shovel",
        name: "Brand9 Shovel",
        description: "This is a Shovel from Brand9.",
        price: "30.00",
        status: "In stock",
        amount: 3,
        colour: "Green"
    },
    {
        equipment: "Rake",
        name: "Brand10 Rake",
        description: "This is a Rake from Brand10.",
        price: "25.00",
        status: "In stock",
        amount: 7,
        colour: "Yellow"
    }
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

// Function to handle editing equipment
function editEquipment(index) {
    // You can access the equipment data in the hardCodedEquipment array using the index
    const equipmentToEdit = hardCodedEquipment[index];

    // Redirect the user to the edit.html page with the equipment's index as a query parameter
    window.location.href = `editinventory.html?index=${index}`;
}

// Fill table with hard-coded equipment and "Edit" buttons
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchInput").addEventListener("input", filterEquipment);
    fillTableWithHardCodedEquipment(); // Call the modified function
});
