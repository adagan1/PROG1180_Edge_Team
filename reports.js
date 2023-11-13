// Sample data for reports
const hardCodedReports = [
    {
        owner: "Joe Jawndel",
        category: "Sales",
        date: "2023-01-15",
        description: "Nuts",
        price: .50,
        quantity: 8,
        total: 4.52
    },
    {
        owner: "Billy Talent",
        category: "Orders",
        equipment: "Honda Bagged Lawnmower",
        orderDetails: "Ordered a new honda lawnmower.",
        date: "2023-02-15",
        arrivalDate: "2023-04-1",
        orderStatus: "Pending",
        quantity: 1,
        price: 199.95,
        total: 225.94
    },
    {
        owner: "Julio Mendes",
        equipment: "N/A",
        category: "Warranty",
        date: "2023-02-15",
        warrantyStart: "2023-03-15",
        warrantyEnd: "2023-06-10",
        warrantyDetails: "Warranty is for the Screws",
        additionalWarrantyInfo: "N/A"
    },
];

// Function to add a new report category
function addNewCategory() {
    var newCategory = prompt("Please enter the new category name:");
    if (newCategory) {
        var select = document.getElementById("categoryFilter");
        var option = document.createElement("option");
        option.value = newCategory.toLowerCase();
        option.text = newCategory;
        select.add(option);
    }
}


// Function to fill the table with report data, including "Edit" and "Detail" buttons
function fillTableWithReportData() {
    const table = document.getElementById("reportTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;

    // Clear the table
    tbody.innerHTML = '';

    for (let i = 0; i < hardCodedReports.length; i++) {
        const report = hardCodedReports[i];
        const reportString = JSON.stringify(report).toLowerCase();

        // Check if the search term matches any part of the report data and the category matches
        if ((reportString.includes(searchTerm) || searchTerm === '') &&
            (categoryFilter === 'all' || report.category.toLowerCase() === categoryFilter)) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${report.owner}</td>
                <td>${report.category}</td>
                <td>${report.date}</td>
                <td>
                    <button onclick="editReport(${i})">Edit</button>
                    <button onclick="detailReport(${i})">Detail</button>
                </td>
            `;
            tbody.appendChild(row);
        }
    }
}



// Function to display report details when the "Detail" button is clicked
function detailReport(index) {
    // Get the report data to display
    const reportData = hardCodedReports[index];

    // Convert the report data to a JSON string
    const reportDataString = JSON.stringify(reportData);

    // Store the selected report data in sessionStorage for access on the new page
    sessionStorage.setItem("selectedReport", reportDataString);

    // Redirect to the reportDetail.html page
    window.location.href = "reportsDetail.html";
}

function editReport(index) {
    // Get the report data to edit
    const reportToEdit = hardCodedReports[index];

    // Convert the report data to a JSON string
    const reportDataString = JSON.stringify(reportToEdit);

    // Store the selected report data in sessionStorage for access on the reportsEdit page
    sessionStorage.setItem("selectedReport", reportDataString);

    // Redirect to the reportsEdit.html page
    window.location.href = "reportsEdit.html";
}

// Function to navigate to the reportCreate.html page
function createReport() {
    // Redirect to the reportCreate.html page
    window.location.href = "reportsCreate.html";
}

document.addEventListener("DOMContentLoaded", function() {
    fillTableWithReportData();

    // Add an event listener to the search input for real-time filtering
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", function() {
        fillTableWithReportData();
    });
});
