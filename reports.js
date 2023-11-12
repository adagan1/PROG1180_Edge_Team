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
        owner: "Billy Tallent",
        category: "Orders",
        date: "2023-02-15",
        description: "Ordered a new honda lawnmower.",
        price: 1,
        quantity: 11,
        total: 12.43
    },
    {
        owner: "Julio Mendes",
        category: "Warranty",
        date: "2023-02-15",
        warrantyStart: "2023-03-15",
        warrantyEnd: "2023-06-10",
        warrantyDetails: "Warranty is for the Screws",
        additionalWarrantyInfo: "N/A"
    },
];

// Function to fill the table with report data, including "Edit" and "Detail" buttons
function fillTableWithReportData() {
    const table = document.getElementById("reportTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const searchInput = document.getElementById("searchInput");
    const searchTerm = searchInput.value.toLowerCase();
    const categoryFilter = document.getElementById("categoryFilter").value;

    // Clear the table
    tbody.innerHTML = '';

    // Hide input fields when "Select a category" is chosen
    const isSelectCategory = categoryFilter === 'all';
    const inputFields = document.querySelectorAll("#createButton, #owner, #reportDate, #reportDescription, #reportPrice, #reportQuantity, #reportTotal");

    inputFields.forEach(field => {
        field.style.display = isSelectCategory ? 'none' : 'block';
    });

    // Ensure search input is always visible
    searchInput.style.display = 'block';

    for (let i = 0; i < hardCodedReports.length; i++) {
        const report = hardCodedReports[i];
        const reportString = JSON.stringify(report).toLowerCase();

        // Check if the search term matches any part of the report data and the category matches
        if ((reportString.includes(searchTerm) || searchTerm === '') &&
            (isSelectCategory || report.category.toLowerCase() === categoryFilter)) {
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
