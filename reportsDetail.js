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

    // Check if the report is a warranty
    if (selectedReport.category == "Warranty") {
        reportDetailsTable.innerHTML += `
            <tr>
                <th>Owner</th>
                <td>${selectedReport.owner}</td>
            </tr>
            <tr>
                <th>Equipment</th>
                <td>${selectedReport.equipment}</td>
            </tr>
            <tr>
                <th>Date</th>
                <td>${selectedReport.date}</td>
            </tr>
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
                <th>Additional Info</th>
                <td>${selectedReport.additionalWarrantyInfo}</td>
            </tr>
        `;
    }

    // Check if the report is a sale
    if (selectedReport.category == "Sales") {
        reportDetailsTable.innerHTML += `
            <tr>
                <th>Owner</th>
                <td>${selectedReport.owner}</td>
            </tr>

            <tr>
                <th>Date</th>
                <td>${selectedReport.date}</td>
            </tr>
            <tr>
                <th>Item(s)</th>
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
        `
    }

    // Check if the report is a order
    if (selectedReport.category == "Orders") {
        reportDetailsTable.innerHTML += `
            <tr>
                <th>Brand</th>
                <td>${selectedReport.owner}</td>
            </tr>
            <tr>
                <th>Equipment</th>
                <td>${selectedReport.equipment}</td>
            </tr>
            <tr>
                <th>Order Details</th>
                <td>${selectedReport.orderDetails}</td>
            </tr>
            <tr>
                <th>Order Date</th>
                <td>${selectedReport.date}</td>
            </tr>
            <tr>
                <th>Arrival Date</th>
                <td>${selectedReport.arrivalDate}</td>
            </tr>
            <tr>
                <th>Order Status</th>
                <td>${selectedReport.orderStatus}</td>
            </tr>
            <tr>
                <th>Quantity</th>
                <td>${selectedReport.quantity}</td>
            </tr>
            <tr>
                <th>Price</th>
                <td>${selectedReport.price}</td>
            </tr>
            <tr>
                <th>Total</th>
                <td>${selectedReport.total}</td>
            </tr>
        `
    }
});

function goToReportsPage() {
    window.location.href = "reports.html";
}
