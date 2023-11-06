const hardCodedRepair = [
    {
        equipment: "Honda Bagged Lawnmower",
        description: "Handle broke, cannot push.",
        startTime: "November 1, 11:34AM",
        endTime: "November 1, 12:40AM",
        partsUsed: "6 bolts, 6 washers, 2 screws, 1 replacement handle",
        customer: "Joe Jawndel"
    },
    {
        equipment: "Dewalt Drill",
        description: "Chuck cracked.",
        startTime: "November 2, 4:21PM",
        endTime: "November 2, 5:13PM",
        partsUsed: "4 screws, 1 replacement chuck",
        customer: "Billy Talent"
    },
    {
        equipment: "John Deere Electric Lawnmower",
        description: "Both front wheels came off.",
        startTime: "November 4, 10:03AM",
        endTime: "November 4, 2:27PM",
        partsUsed: "12 bolts, 12 washers, 2 replacement front wheels",
        customer: "Joe Jawndel"
    }
];

// Function to fill the table with customer data, including "Edit" and "Detail" buttons
function fillTableWithRepairData() {
    const table = document.getElementById("repairsTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();

    // Clear the table
    tbody.innerHTML = '';

    for (let i = 0; i < hardCodedRepair.length; i++) {
        const repair = hardCodedRepair[i];
        const repairString = JSON.stringify(repair).toLowerCase();

        // Check if the search term matches any part of the customer data
        if (repairString.includes(searchTerm)) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${repair.equipment}</td>
                <td>${repair.description}</td>
                <td>${repair.customer}</td>
                <td>
                    <button onclick="editRepair(${i})">Edit</button>
                    <button onclick="detailRepair(${i})">Detail</button>
                </td>
            `;
            tbody.appendChild(row);
        }
    }
}

// Function to display customer details when the "Detail" button is clicked
function detailRepair(index) {
    // Get the customer data to display
    const repairData = hardCodedRepair[index];

    // Convert the customer data to a JSON string
    const repairDataString = JSON.stringify(repairData);

    // Store the selected customer data in sessionStorage for access on the new page
    sessionStorage.setItem("selectedRepair", repairDataString);

    // Redirect to the customerDetail.html page
    window.location.href = "repairsDetails.html";
}

// Function to edit customer information
function editRepair(index) {
    // Get the customer data to edit
    const repairToEdit = hardCodedRepair[index];

    // Convert the customer data to a JSON string
    const repairDataString = JSON.stringify(repairToEdit);

    // Redirect to customerEdit.html with customer data as a parameter
    window.location.href = `repairsEdit.html?repairData=${repairDataString}`;
}

// Function to navigate to the customerCreate.html page
function createRepair() {
    // Redirect to the customerCreate.html page
    window.location.href = "repairsCreate.html";
}

document.addEventListener("DOMContentLoaded", function() {
    fillTableWithRepairData();

    // Add an event listener to the search input for real-time filtering
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        fillTableWithRepairData();
    });
});

//Function to go back to repairs page
function goToRepairsPage() {
    window.location.href = "repairs.html";
}