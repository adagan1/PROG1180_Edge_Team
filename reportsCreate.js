document.addEventListener("DOMContentLoaded", function () {
    const categoryDropdown = document.getElementById("reportCategory");
    const errorContainer = document.getElementById("errorContainer");

    // Function to toggle the visibility of input fields based on the selected category
    function toggleFields() {
        const createButton = document.getElementById("createButton");
        const cancelButton = document.getElementById("cancelButton");
        const errorContainer = document.getElementById("errorContainer");

        // Reset previous validation styles and error messages
        resetValidationStyles();
        errorContainer.innerHTML = "";

        if (categoryDropdown.value === "warranty" || categoryDropdown.value === "sale" || categoryDropdown.value === "orders") {
            warrantyFields.style.display = categoryDropdown.value === "warranty" ? "block" : "none";
            saleFields.style.display = categoryDropdown.value === "sale" ? "block" : "none";
            orderFields.style.display = categoryDropdown.value === "orders" ? "block" : "none";

            // Show the buttons when a category is selected
            createButton.removeAttribute("hidden");
            cancelButton.removeAttribute("hidden");
        } else {
            warrantyFields.style.display = "none";
            saleFields.style.display = "none";
            orderFields.style.display = "none";

            // Hide the buttons when no category is selected
            createButton.setAttribute("hidden", true);
            cancelButton.setAttribute("hidden", true);
        }
    }

    // Attach the toggleFields function to the change event of the category dropdown
    categoryDropdown.addEventListener("change", toggleFields);

    const saveButton = document.getElementById("createButton");
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
        const equipmentDetailsInput = document.getElementById("equipment");
        const ordersDetailsInput = document.getElementById("orderDetails");
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
                equipmentList: equipmentDetailsInput.value
            };

            if (reportAdditionalInfo.warrantyStart.trim() !== "" && reportAdditionalInfo.warrantyEnd.trim() !== "") {
                const start = new Date(reportAdditionalInfo.warrantyStart);
                const end = new Date(reportAdditionalInfo.warrantyEnd);

                if (start > end) {
                    markInvalidInput(warrantyStartInput);
                    markInvalidInput(warrantyEndInput);
                    displayError("Warranty start date cannot be after the warranty end date.");
                }
            }
        }

        // Get sales-specific input values
        if (reportCategory === "sale") {
            reportAdditionalInfo = {
                salesPrice: reportPriceInput.value,
                salesQuantity: reportQuantityInput.value,
                salesTotal: reportTotalInput.value
            }
        }

        // Get orders-specific input values
        if (reportCategory === "orders") {
            reportAdditionalInfo = {
                orderDetails: ordersDetailsInput.value
            }
        }

        const report = {
            category: reportCategory,
            owner: reportOwnerInput.value,
            date: reportDateInput.value,
            description: reportDescriptionInput.value,
            additionalInfo: reportAdditionalInfo
        };

        // Perform form validation
        if (validateForm(report)) {
            window.location.href = "reports.html";
        }
    });

function validateForm(report) {
    // Flag to track whether the form is valid
    let isValid = true;

    // Validation for warranty
    if (report.category === "warranty") {
        
        if (report.owner.trim() === "") {
            markInvalidInput(document.getElementById("owner"));
            displayError("Please select the owner's name.");
            isValid = false;
        }

        if (report.additionalInfo.equipmentList.trim() === "") {
            markInvalidInput(document.getElementById("equipment"));
            displayError("Please select the equipment.");
            isValid = false;
        }
    
        if (report.date.trim() === "") {
            markInvalidInput(document.getElementById("reportDate"));
            displayError("Please enter the report date.");
            isValid = false;
        }

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

        if (report.additionalInfo.warrantyDetails.trim() === "") {
            markInvalidInput(document.getElementById("warrantyDetails"));
            displayError("Please enter the warranty details.");
            isValid = false;
        }
    }

    // Sales validation
    if (report.category === "sale") {

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

        if (report.additionalInfo.salesPrice.trim() === "") {
            markInvalidInput(document.getElementById("reportPrice"))
            displayError("Please enter a price above the value of 0.")
            isValid = false;
        }

        if (report.additionalInfo.salesQuantity.trim() === "") {
            markInvalidInput(document.getElementById("reportQuantity"))
            displayError("Please enter a quantity above the value of 0.")
            isValid = false;
        }

        if (report.additionalInfo.salesTotal.trim() === "") {
            markInvalidInput(document.getElementById("reportTotal"))
            displayError("Please enter a total above the value of 0.")
            isValid = false;
        }
    }

    // Orders validation
    if (report.category === "orders") {

        if (report.additionalInfo.orderDetails.trim() === "") {
            markInvalidInput(document.getElementById("orderDetails"))
            displayError("Please enter order details.")
            isValid = false;
        }
    }
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


function goToReportsPage() {
    window.location.href = "reports.html";
}