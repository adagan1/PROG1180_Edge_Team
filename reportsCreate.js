document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.getElementById("createButton");
    createButton.addEventListener("click", function () {
        // Get the report data
        const reportCustomerInput = document.getElementById("reportCustomer");
        const reportDateInput = document.getElementById("reportDate");
        const reportDescriptionInput = document.getElementById("reportDescription");
        const reportPriceInput = document.getElementById("reportPrice");
        const reportQuantityInput = document.getElementById("reportQuantity");
        const reportTotalInput = document.getElementById("reportTotal");

        const report = {
            customer: reportCustomerInput.value,
            date: reportDateInput.value,
            description: reportDescriptionInput.value,
            price: reportPriceInput.value,
            quantity: reportQuantityInput.value,
            total: reportTotalInput.value,
        };

        // Perform form validation
        if (validateForm(report)) {
            // Save the new report data
            // You can add your saving logic here

            // After saving, redirect to the reports page
            window.location.href = "reports.html";
        }
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

        if (report.description.trim() === "") {
            displayError("Description is required.", "reportDescription");
            isValid = false;
        }

        if (isNaN(report.price) || report.price <= 0) {
            displayError("Price must be a positive number.", "reportPrice");
            isValid = false;
        }

        if (isNaN(report.quantity) || report.quantity <= 0) {
            displayError("Quantity must be a positive number.", "reportQuantity");
            isValid = false;
        }

        if (isNaN(report.total) || report.total <= 0) {
            displayError("Total must be a positive number.", "reportTotal");
            isValid = false;
        }

        return isValid;
    }

    // Function to display an error message and highlight the input field
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

function goToReportsPage() {
    window.location.href = "reports.html";
}