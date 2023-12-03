document.addEventListener("DOMContentLoaded", function () {
    // Get the customer data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const customerDataString = urlParams.get("customerData");

    if (customerDataString) {
        try {
            // Parse the JSON data
            const customerToEdit = JSON.parse(customerDataString);

            // Populate the input fields with the customer data
            document.getElementById("customerName").value = customerToEdit.name;
            document.getElementById("customerEmail").value = customerToEdit.email;
            document.getElementById("customerPhone").value = customerToEdit.phone;
            document.getElementById("customerAddress").value = customerToEdit.address;
            const customerCitySelect = document.getElementById("customerCity");
            for (const option of customerCitySelect.options) {
                if (option.value === customerToEdit.city) {
                    option.selected = true;
                    break; // Exit the loop once a match is found
                }
            }
            document.getElementById("customerPostal").value = customerToEdit.postal;
            //document.getElementById("customerProvince").value = customerToEdit.province;
            const customerProvinceSelect = document.getElementById("customerProvince");
            for (const option of customerProvinceSelect.options) {
                if (option.value === customerToEdit.province) {
                    option.selected = true;
                    break; // Exit the loop once a match is found
                }
            }

            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();

                // Validate the input fields
                if (validateForm()) {
                    // Update the customer data with the new values
                    customerToEdit.name = document.getElementById("customerName").value;
                    customerToEdit.email = document.getElementById("customerEmail").value;
                    customerToEdit.phone = document.getElementById("customerPhone").value;
                    customerToEdit.address = document.getElementById("customerAddress").value;
                    customerToEdit.city = document.getElementById("customerCity").value;
                    customerToEdit.postal = document.getElementById("customerPostal").value;
                    customerToEdit.province = document.getElementById("customerProvince").value;

                    // Update the data in local storage
                    // Retrieve the existing customer data
                    const storedCustomerData = JSON.parse(localStorage.getItem("customerData")) || [];

                    // Update the customer data in local storage
                    storedCustomerData[customerToEdit.index] = customerToEdit;

                    // Save the updated data back to local storage
                    localStorage.setItem("customerData", JSON.stringify(storedCustomerData));

                    // Redirect back to the customer page
                    window.location.href = "customer.html";
                }
            });
        } catch (error) {
            console.error("Error parsing customer data:", error);
        }
    } else {
        // Handle missing or invalid equipment data
        alert("Invalid or missing customer data.");
        window.location.href = "customer.html";
    }
});

function validateForm() {
    const customerName = document.getElementById("customerName").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerPhone = document.getElementById("customerPhone").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerCity = document.getElementById("customerCity").value;
    const customerPostal = document.getElementById("customerPostal").value;
    const customerProvince = document.getElementById("customerProvince").value;

    const errorMessages = [];

    if (customerName === "") {
        errorMessages.push("Please fill in the 'Customer Name' field.");
        document.getElementById("customerName").classList.add("invalid-input");
    }

    if (customerEmail === "") {
        errorMessages.push("Please fill in the 'Email' field.");
        document.getElementById("customerEmail").classList.add("invalid-input");
    } else if (!validateEmail(customerEmail)) {
        errorMessages.push("Please enter a valid email address.");
        document.getElementById("customerEmail").classList.add("invalid-input");
    }

    if (customerPhone === "") {
        errorMessages.push("Please fill in the 'Phone' field.");
        document.getElementById("customerPhone").classList.add("invalid-input");
    } else if (!validatePhone(customerPhone)) {
        errorMessages.push("Please enter a valid phone number in the format xxx-xxx-xxxx.");
        document.getElementById("customerPhone").classList.add("invalid-input");
    }

    if (customerAddress === "") {
        errorMessages.push("Please fill in the 'Address' field.");
        document.getElementById("customerAddress").classList.add("invalid-input");
    }

    if (customerCity === "") {
        errorMessages.push("Please select a 'City'.");
        document.getElementById("customerCity").classList.add("invalid-input");
    }

    if (customerPostal === "") {
        errorMessages.push("Please fill in the 'Postal' field.");
        document.getElementById("customerPostal").classList.add("invalid-input");
    } else if (!validatePostalCode(customerPostal)) {
        errorMessages.push("Please enter a valid postal code.");
        document.getElementById("customerPostal").classList.add("invalid-input");
    }

    if (customerProvince === "") {
        errorMessages.push("Please select a 'Province'.");
        document.getElementById("customerProvince").classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }

    return true;
}

function goToCustomerPage() {
    window.location.href = "customer.html";
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    return phonePattern.test(phone);
}

function validatePostalCode(postal) {
    const postalPattern = /^[A-Za-z0-9\s]{6,10}$/;
    return postalPattern.test(postal);
}

function resetInputOutlines() {
    // Remove the 'invalid-input' class from all input fields and dropdown lists
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.classList.remove("invalid-input");
    });
    
}
/*  Mohammads Fix */
function openAddEquipmentPage() {
    // Open the add equipment page
    window.location.href = 'inventoryCreate.html';
}
