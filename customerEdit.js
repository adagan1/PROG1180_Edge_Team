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
            document.getElementById("customerAge").value = customerToEdit.age;
            document.getElementById("customerEmail").value = customerToEdit.email;
            document.getElementById("customerPhone").value = customerToEdit.phone;
            document.getElementById("customerAddress").value = customerToEdit.address;
            document.getElementById("customerCity").value = customerToEdit.city;

            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Update the customer data with the new values
                customerToEdit.name = document.getElementById("customerName").value;
                customerToEdit.age = document.getElementById("customerAge").value;
                customerToEdit.email = document.getElementById("customerEmail").value;
                customerToEdit.phone = document.getElementById("customerPhone").value;
                customerToEdit.address = document.getElementById("customerAddress").value;
                customerToEdit.city = document.getElementById("customerCity").value;

                // Update the data in local storage
                // Retrieve the existing customer data
                const storedCustomerData = JSON.parse(localStorage.getItem("customerData")) || [];

                // Update the customer data in local storage
                storedCustomerData[customerToEdit.index] = customerToEdit;

                // Save the updated data back to local storage
                localStorage.setItem("customerData", JSON.stringify(storedCustomerData));

                // Redirect back to the customer page
                window.location.href = "customer.html";
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
