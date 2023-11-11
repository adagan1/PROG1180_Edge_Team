const hardCodedRepair = [
    {
        status: "In Progress",  
        equipment: "Honda Bagged Lawnmower",
        description: "Handle broke, cannot push.",
        startTime: "November 1, 11:34AM",
        endTime: "November 1, 12:40AM",
        partsUsed: "6 bolts, 6 washers, 2 screws, 1 replacement handle",
        customer: "Joe Jawndel"
    },
    {
        status: "In Progress",  
        equipment: "Dewalt Drill",
        description: "Chuck cracked.",
        startTime: "November 2, 4:21PM",
        endTime: "November 2, 5:13PM",
        partsUsed: "4 screws, 1 replacement chuck",
        customer: "Billy Talent"
    },
    {
        status: "Completed", 
        equipment: "John Deere Electric Lawnmower",
        description: "Both front wheels came off.",
        startTime: "November 4, 10:03AM",
        endTime: "November 4, 2:27PM",
        partsUsed: "12 bolts, 12 washers, 2 replacement front wheels",
        customer: "Joe Jawndel"
    }
];
function fillTableWithRepairData() {
    const table = document.getElementById("repairsTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    // Clear the table
    tbody.innerHTML = '';

    for (let i = 0; i < hardCodedRepair.length; i++) {
        const repair = hardCodedRepair[i];
        // Convert the status to lowercase for case-insensitive comparison
        const statusLower = repair.status.toLowerCase();
        const repairString = JSON.stringify(repair).toLowerCase();

        // Check if the search term and category match the repair data
        if (repairString.includes(searchTerm) && (selectedCategory === "all" || statusLower === selectedCategory)) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${repair.status}</td>
                <td>${repair.customer}</td>
                <td>${repair.equipment}</td>
                <td>${repair.description}</td>
                <td>
                    <button onclick="editRepair(${i})">Edit</button>
                    <button onclick="detailRepair(${i})">Detail</button>
                </td>
            `;
            tbody.appendChild(row);
        }
    }
}


function detailRepair(index) {
    const repairData = hardCodedRepair[index];

    const repairDataString = JSON.stringify(repairData);

    sessionStorage.setItem("selectedRepair", repairDataString);

    window.location.href = "repairsDetails.html";
}

function editRepair(index) {
    const repairToEdit = hardCodedRepair[index];

    const repairDataString = JSON.stringify(repairToEdit);

    window.location.href = `repairsEdit.html?repairData=${repairDataString}`;
}

function createRepair() {
    window.location.href = "repairsCreate.html";
}

document.addEventListener("DOMContentLoaded", function() {
    fillTableWithRepairData();

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        fillTableWithRepairData();
    });
});

function goToRepairsPage() {
    window.location.href = "repairs.html";
}

document.addEventListener("DOMContentLoaded", function() {
    fillTableWithRepairData();

    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    searchInput.addEventListener("input", function() {
        fillTableWithRepairData();
    });

    categoryFilter.addEventListener("change", function() {
        fillTableWithRepairData();
    });
});

