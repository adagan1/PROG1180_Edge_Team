document.addEventListener("DOMContentLoaded", function () {
    // Retrieve report data from sessionStorage
    const selectedReportString = sessionStorage.getItem("selectedReport");
    if (!selectedReportString) {
        // Redirect to reports page if no report data is found
        window.location.href = "reports.html";
    }

    const selectedReport = JSON.parse(selectedReportString);

    // Populate the form fields with the selected report data
    const reportCustomerInput = document.getElementById("reportCustomer");
    const reportDateInput = document.getElementById("reportDate");
    const reportDescriptionInput = document.getElementById("reportDescription");
    const reportPriceInput = document.getElementById("reportPrice");
    const reportQuantityInput = document.getElementById("reportQuantity");
    const reportTotalInput = document.getElementById("reportTotal");

    reportCustomerInput.value = selectedReport.customer;
    reportDateInput.value = selectedReport.date;
    reportDescriptionInput.value = selectedReport.description;
    reportPriceInput.value = selectedReport.price;
    reportQuantityInput.value = selectedReport.quantity;
    reportTotalInput.value = selectedReport.total;

    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", function () {
        // Get the edited report data
        const editedReport = {
            customer: reportCustomerInput.value,
            date: reportDateInput.value,
            description: reportDescriptionInput.value,
            price: reportPriceInput.value,
            quantity: reportQuantityInput.value,
            total: reportTotalInput.value,
        };

        // Perform form validation
        if (validateForm(editedReport)) {
            // Save the changes to the edited report data
            // You can add your saving logic here

            // After saving, redirect back to the reports page
            window.location.href = "reports.html";
        }
    });

    const cancelButton = document.getElementById("cancelButton");
    cancelButton.addEventListener("click", function () {
        // Cancel the editing and return to the reports page
        window.location.href = "reports.html";
    });

    // Function to validate the form data
    function validateForm(report) {
        let isValid = true;
        const errorContainer = document.getElementById("errorContainer");
        errorContainer.innerHTML = "";

        if (report.customer.trim() === "") {
            displayError("Customer name is required.", "reportCustomer");
            isValid = false;
        }

        if (report.date.trim() === "") {
            displayError("Date is required.", "reportDate");
            isValid = false;
        }

        if (report.price.trim() === "") {
            displayError("Price is required.", "reportPrice");
            isValid = false;
        }

        if (isNaN(report.price) || parseFloat(report.price) <= 0) {
            displayError("Price must be a positive number.", "reportPrice");
            isValid = false;
        }

        if (report.quantity.trim() === "") {
            displayError("Quantity is required.", "reportQuantity");
            isValid = false;
        }

        if (isNaN(report.quantity) || parseInt(report.quantity) <= 0) {
            displayError("Quantity must be a positive whole number.", "reportQuantity");
            isValid = false;
        }

        if (report.total.trim() === "") {
            displayError("Total is required.", "reportTotal");
            isValid = false;
        }

        if (isNaN(report.total) || parseFloat(report.total) <= 0) {
            displayError("Total must be a positive number.", "reportTotal");
            isValid = false;
        }

        return isValid;
    }

    // Function to display validation errors and highlight input fields
    function displayError(message, inputId) {
        const errorContainer = document.getElementById("errorContainer");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorContainer.appendChild(errorMessage);

        // Highlight the input field in red
        const inputField = document.getElementById(inputId);
        inputField.classList.add("invalid-input");
    }
});
