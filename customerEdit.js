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
            document.getElementById("customerCity").value = customerToEdit.city;
            document.getElementById("customerPostal").value = customerToEdit.postal;
            document.getElementById("customerProvince").value = customerToEdit.province;

            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
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

    if (customerName === "" || customerEmail === "" || customerPhone === "" || customerAddress === "" || customerCity === "" || customerPostal === "" || customerProvince === "") {
        alert("Please fill in all fields.");
        return false;
    }

    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(customerPhone)) {
        alert("Please enter a valid phone number in the format xxx-xxx-xxxx.");
        return false;
    }

    const postalPattern = /^[A-Za-z0-9\s]{6,10}$/;
    if (!postalPattern.test(customerPostal)) {
        alert("Please enter a valid postal code.");
        return false;
    }

    return true;
}

function goToCustomerPage() {
    window.location.href = "customer.html";
}
