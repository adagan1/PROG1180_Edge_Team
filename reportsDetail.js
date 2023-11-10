document.addEventListener("DOMContentLoaded", function () {
    // Retrieve report data from sessionStorage
    const selectedReportString = sessionStorage.getItem("selectedReport");
    if (!selectedReportString) {
        // Redirect to reports page if no report data is found
        window.location.href = "reports.html";
    }

    const selectedReport = JSON.parse(selectedReportString);

    // Populate common details (owner)
    document.getElementById("reportOwner").textContent = selectedReport.owner;

    // Get the table element
    const reportDetailsTable = document.getElementById("reportDetailsTable");

    // Clear previous content
    reportDetailsTable.innerHTML = "";

    // Check if the report is not a warranty
    if (selectedReport.category !== "Warranty") {
        // Populate and show common details
        reportDetailsTable.innerHTML += `
            <tr>
                <th>Date</th>
                <td>${selectedReport.date}</td>
            </tr>
            <tr>
                <th>Description</th>
                <td>${selectedReport.description}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>${selectedReport.price}</td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td>${selectedReport.quantity}</td>
            </tr>
            <tr>
                <th>Total</th>
                <td>${selectedReport.total}</td>
            </tr>
        `;
    } else {
        // Populate and show warranty-specific details
        reportDetailsTable.innerHTML += `
            <tr>
                <th>Warranty Start</th>
                <td>${selectedReport.warrantyStart}</td>
            </tr>
            <tr>
                <th>Warranty End</th>
                <td>${selectedReport.warrantyEnd}</td>
            </tr>
            <tr>
                <th>Warranty Details</th>
                <td>${selectedReport.warrantyDetails}</td>
            </tr>
            <tr>
                <th>Additional Warranty Info</th>
                <td>${selectedReport.additionalWarrantyInfo}</td>
            </tr>
        `;
    }
});

function goToReportsPage() {
    window.location.href = "reports.html";
}
