document.addEventListener("DOMContentLoaded", function () {
    // Retrieve report data from sessionStorage
    const selectedReportString = sessionStorage.getItem("selectedReport");
    if (!selectedReportString) {
        // Redirect to reports page if no report data is found
        window.location.href = "reports.html";
    }

    const selectedReport = JSON.parse(selectedReportString);

    // Populate the report details
    const reportCustoemrElement = document.getElementById("reportCustomer");
    const reportDateElement = document.getElementById("reportDate");
    const reportDescriptionElement = document.getElementById("reportDescription");
    const reportPriceElement = document.getElementById("reportPrice");
    const reportQuantityElement = document.getElementById("reportQuantity");
    const reportTotalElement = document.getElementById("reportTotal");

    reportCustoemrElement.textContent = selectedReport.customer;
    reportDateElement.textContent = selectedReport.date;
    reportDescriptionElement.textContent = selectedReport.description;
    reportPriceElement.textContent = selectedReport.price;
    reportQuantityElement.textContent = selectedReport.quantity;
    reportTotalElement.textContent = selectedReport.total;
});

function goToReportsPage() {
    window.location.href = "reports.html";
}