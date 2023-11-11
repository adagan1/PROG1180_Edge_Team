const hardCodedRepair = [
    {
        status: "In Progress",  // Added status
        equipment: "Honda Bagged Lawnmower",
        description: "Handle broke, cannot push.",
        startTime: "November 1, 11:34AM",
        endTime: "November 1, 12:40AM",
        partsUsed: "6 bolts, 6 washers, 2 screws, 1 replacement handle",
        customer: "Joe Jawndel"
    },
    {
        status: "In Progress",  // Added status
        equipment: "Dewalt Drill",
        description: "Chuck cracked.",
        startTime: "November 2, 4:21PM",
        endTime: "November 2, 5:13PM",
        partsUsed: "4 screws, 1 replacement chuck",
        customer: "Billy Talent"
    },
    {
        status: "Completed",  // Added status
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

    tbody.innerHTML = '';

    for (let i = 0; i < hardCodedRepair.length; i++) {
        const repair = hardCodedRepair[i];
        const statusLower = repair.status.toLowerCase();
        const repairString = JSON.stringify(repair).toLowerCase();

        if (repairString.includes(searchTerm) && (selectedCategory === "all" || statusLower === selectedCategory)) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${repair.status}</td>
                <td>${repair.customer}</td>
                <td>${repair.equipment}</td>
                <td>${repair.description}</td>
                <td>
                    <button onclick="enterRepair(${i})">Enter</button>
                </td>
            `;
            tbody.appendChild(row);
        }
    }
}

function enterRepair(index) {
    const repair = hardCodedRepair[index];
    const repairDataString = JSON.stringify(repair);

    sessionStorage.setItem("selectedRepair", repairDataString);

    if (repair.status === "In Progress") {
        window.location.href = `repairsEdit.html?repairData=${repairDataString}`;
    } else if (repair.status === "Completed") {
        window.location.href = "repairsDetails.html";
    }
}


function detailRepair(index) {
    const repairData = hardCodedRepair[index];

    const repairDataString = JSON.stringify(repairData);

    sessionStorage.setItem("selectedRepair", repairDataString);

    
    window.location.href = "repairsDetails.html";
}

// Function to edit customer information
function editRepair(index) {
   
    const repairToEdit = hardCodedRepair[index];

    const repairDataString = JSON.stringify(repairToEdit);

    
    window.location.href = `repairsEdit.html?repairData=${repairDataString}`;
}

// Function to navigate to the customerCreate.html page
function createRepair() {
    
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

document.addEventListener("DOMContentLoaded", function() {
    fillTableWithRepairData();

    // Add event listeners for real-time filtering
    const searchInput = document.getElementById("searchInput");
    const categoryFilter = document.getElementById("categoryFilter");

    searchInput.addEventListener("input", function() {
        fillTableWithRepairData();
    });

    categoryFilter.addEventListener("change", function() {
        fillTableWithRepairData();
    });
});

