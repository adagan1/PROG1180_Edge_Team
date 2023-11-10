document.addEventListener("DOMContentLoaded", function () {
    const categoryDropdown = document.getElementById("reportCategory");
    const errorContainer = document.getElementById("errorContainer");

    // Function to toggle the visibility of input fields based on the selected category
    function toggleFields() {
        const warrantyFields = document.getElementById("warrantyFields");
        const salesFields = document.getElementById("salesFields");

        if (categoryDropdown.value === "warranty") {
            warrantyFields.style.display = "block";
            salesFields.style.display = "none";
        } else {
            warrantyFields.style.display = "none";
            salesFields.style.display = "block";
        }
    }

    // Attach the toggleFields function to the change event of the category dropdown
    categoryDropdown.addEventListener("change", toggleFields);

    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the report data
        const reportCategory = categoryDropdown.value;
        const reportOwnerInput = document.getElementById("owner");
        const reportDateInput = document.getElementById("reportDate");
        const reportDescriptionInput = document.getElementById("reportDescription");
        const reportPriceInput = document.getElementById("reportPrice");
        const reportQuantityInput = document.getElementById("reportQuantity");
        const reportTotalInput = document.getElementById("reportTotal");
        const warrantyStartInput = document.getElementById("warrantyStart");
        const warrantyEndInput = document.getElementById("warrantyEnd");
        const warrantyDetailsInput = document.getElementById("warrantyDetails");
        const additionalWarrantyInfoInput = document.getElementById("additionalWarrantyInfo");

        // Reset previous validation styles and error messages
        resetValidationStyles();
        errorContainer.innerHTML = "";

        // Depending on the selected category, get the corresponding input values
        let reportAdditionalInfo;
        if (reportCategory === "warranty") {
            // Get warranty-specific input values
            reportAdditionalInfo = {
                warrantyStart: warrantyStartInput.value,
                warrantyEnd: warrantyEndInput.value,
                warrantyDetails: warrantyDetailsInput.value,
                additionalWarrantyInfo: additionalWarrantyInfoInput.value,
            };

            // Validate warranty-specific fields
            if (reportAdditionalInfo.warrantyStart.trim() === "") {
                markInvalidInput(warrantyStartInput);
                displayError("Please enter the warranty start date.");
            }

            if (reportAdditionalInfo.warrantyEnd.trim() === "") {
                markInvalidInput(warrantyEndInput);
                displayError("Please enter the warranty end date.");
            }

            if (reportAdditionalInfo.warrantyStart.trim() !== "" && reportAdditionalInfo.warrantyEnd.trim() !== "") {
                const start = new Date(reportAdditionalInfo.warrantyStart);
                const end = new Date(reportAdditionalInfo.warrantyEnd);

                if (start > end) {
                    markInvalidInput(warrantyStartInput);
                    markInvalidInput(warrantyEndInput);
                    displayError("Warranty start date cannot be after the warranty end date.");
                }
            }
        } else {
            // Get sale-specific input values
            reportAdditionalInfo = {
                // Add sale-specific fields here
            };

            // Validate sale-specific fields
            if (reportDescriptionInput.value.trim() === "") {
                markInvalidInput(reportDescriptionInput);
                displayError("Please enter a description for the sale.");
            }

            if (isNaN(reportPriceInput.value) || reportPriceInput.value <= 0) {
                markInvalidInput(reportPriceInput);
                displayError("Please enter a valid price greater than zero.");
            }

            if (isNaN(reportQuantityInput.value) || reportQuantityInput.value <= 0) {
                markInvalidInput(reportQuantityInput);
                displayError("Please enter a valid quantity greater than zero.");
            }

            if (isNaN(reportTotalInput.value) || reportTotalInput.value <= 0) {
                markInvalidInput(reportTotalInput);
                displayError("Please enter a valid total greater than zero.");
            }
        }

        const report = {
            category: reportCategory,
            owner: reportOwnerInput.value,
            date: reportDateInput.value,
            description: reportDescriptionInput.value,
            price: reportPriceInput.value,
            quantity: reportQuantityInput.value,
            total: reportTotalInput.value,
            additionalInfo: reportAdditionalInfo,
        };

        // Perform form validation
        if (validateForm(report)) {
            // Save the new report data
            // You can add your saving logic here

            // After saving, redirect to the reports page
            window.location.href = "reports.html";
        }
    });

function goToReportsPage() {
    window.location.href = "reports.html";
}

function validateForm(report) {
    // Flag to track whether the form is valid
    let isValid = true;

    // Validation for common fields
    if (report.owner.trim() === "") {
        markInvalidInput(document.getElementById("owner"));
        displayError("Please enter the owner's name.");
        isValid = false;
    }

    if (report.date.trim() === "") {
        markInvalidInput(document.getElementById("reportDate"));
        displayError("Please enter the report date.");
        isValid = false;
    }

    // Validation for sale-specific fields
    if (report.category === "sale") {
        if (report.description.trim() === "") {
            markInvalidInput(document.getElementById("reportDescription"));
            displayError("Please enter a description for the sale.");
            isValid = false;
        }

        // Add additional validations for sale-specific fields here
    }

    // Validation for warranty-specific fields
    if (report.category === "warranty") {
        // Add additional validations for warranty-specific fields here
        if (report.additionalInfo.warrantyStart.trim() === "") {
            markInvalidInput(document.getElementById("warrantyStart"));
            displayError("Please enter the warranty start date.");
            isValid = false;
        }

        if (report.additionalInfo.warrantyEnd.trim() === "") {
            markInvalidInput(document.getElementById("warrantyEnd"));
            displayError("Please enter the warranty end date.");
            isValid = false;
        }
    }

    return isValid;
}

function markInvalidInput(inputElement) {
    inputElement.classList.add("invalid-input");
}

function resetValidationStyles() {
    const invalidInputs = document.querySelectorAll(".invalid-input");
    invalidInputs.forEach((input) => {
        input.classList.remove("invalid-input");
    });
}

function displayError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("error-message");
    errorDiv.textContent = message;
    document.getElementById("errorContainer").appendChild(errorDiv);
}});
