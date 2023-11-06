document.addEventListener("DOMContentLoaded", function () {
    // Get the repair data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const repairDataString = urlParams.get("repairData");

    if (repairDataString) {
        try {
            // Parse the JSON data
            const repairToEdit = JSON.parse(repairDataString);

            // Populate the input fields with the repair data
            document.getElementById("equipment").value = repairToEdit.equipment;
            document.getElementById("description").value = repairToEdit.description;
            document.getElementById("partsUsed").value = repairToEdit.partsUsed;
            document.getElementById("startTime").value = repairToEdit.startTime;
            document.getElementById("endTime").value = repairToEdit.endTime;

            // Handle the customer dropdown
            const customerDropdown = document.getElementById("customer");
            customerDropdown.value = repairToEdit.customer;

            // Add an event listener to save changes
            const saveButton = document.getElementById("saveButton");
            saveButton.addEventListener("click", function () {
                // Reset previous error styles and messages
                resetValidationStyles();
                const errorContainer = document.getElementById("errorContainer");
                errorContainer.innerText = "";

                // Validate the input fields
                const equipment = document.getElementById("equipment").value;
                const description = document.getElementById("description").value;
                const partsUsed = document.getElementById("partsUsed").value;
                const startTime = document.getElementById("startTime").value;
                const endTime = document.getElementById("endTime").value;
                const customer = customerDropdown.value;

                const errorMessages = [];

                if (!equipment) {
                    errorMessages.push("Please select an 'Equipment'.");
                    document.getElementById("equipment").classList.add("invalid-input");
                }

                if (!description) {
                    errorMessages.push("Please provide a 'Description'.");
                    document.getElementById("description").classList.add ("invalid-input");
                }

                if (!partsUsed) {
                    errorMessages.push("Please fill in 'Parts Used'.");
                    document.getElementById("partsUsed").classList.add("invalid-input");
                }

                if (!startTime) {
                    errorMessages.push("Please select a 'Start Time'.");
                    document.getElementById("startTime").classList.add("invalid-input");
                }

                if (!endTime) {
                    errorMessages.push ("Please select an 'End Time'.");
                    document.getElementById("endTime").classList.add("invalid-input");
                }

                if (!customer) {
                    errorMessages.push("Please select a 'Customer'.");
                    customerDropdown.classList.add("invalid-input");
                }

                if (errorMessages.length > 0) {
                    // Display error messages on the page
                    errorContainer.innerHTML = errorMessages.join("<br>");
                } else {
                    // All fields are filled, proceed with saving changes
                    repairToEdit.equipment = equipment;
                    repairToEdit.description = description;
                    repairToEdit.partsUsed = partsUsed;
                    repairToEdit.startTime = startTime;
                    repairToEdit.endTime = endTime;
                    repairToEdit.customer = customer; // Update "customer" field

                    // Update the data (you can store this data in local storage or send it to a server)
                    // For demonstration, we'll log it to the console
                    console.log("Updated Repair Data:", repairToEdit);

                    // Redirect back to the repairs page
                    window.location.href = "repairs.html";
                }
            });
        } catch (error) {
            console.error("Error parsing repair data:", error);
        }
    } else {
        // Handle missing or invalid repair data
        alert("Invalid or missing repair data.");
        window.location.href = "repairs.html";
    }
});

function resetValidationStyles() {
    const elements = document.getElementsByClassName("invalid-input");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("invalid-input");
    }
}

function goToRepairsPage() {
    window.location.href = "repairs.html";
}
