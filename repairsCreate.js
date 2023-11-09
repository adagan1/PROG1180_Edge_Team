document.addEventListener("DOMContentLoaded", function () {
    // Get the "New Customer" button and attach a click event listener to it
    document.getElementById("newCustomerButton").addEventListener("click", function () {
        window.location.href = "customerCreate.html"; // Redirects to the customer creation page
    });

    // Get the "New Equipment" button and attach a click event listener to it
    document.getElementById("newEquipmentButton").addEventListener("click", function () {
        window.location.href = "inventoryCreate.html"; // Redirects to the inventory creation page
    });
    // Add an event listener to the "Save Changes" button
    document.getElementById("createRepairsButton").addEventListener("click", function () {
        // Reset the input field outlines
        resetInputOutlines();

        // Validate the input fields
        if (validateForm()) {
            // Get the data for the new repair report
            const EquipmentInfo = document.getElementById("EquipmentInfo").value;
            const description = document.getElementById("description").value;
            const partsUsed = document.getElementById("partsUsed").value;
            const startTime = document.getElementById("startTime").value;
            const startDate = document.getElementById("startDate").value;
            const endTime = document.getElementById("endTime").value;
            const endDate = document.getElementById("endDate").value;          

            // Get the selected owner from the dropdown list
            const owner = document.getElementById("owner").value;

            // Create an object with the new repairs report
            const newRepairsReport = {
                EquipmentInfo: EquipmentInfo,
                description: description,
                partsUsed: partsUsed,
                startTime: startTime,
                startDate: startDate,
                endTime: endTime,
                endDate: endDate,
                owner: owner
            };

            // For this example, we'll log the new data to the console
            console.log("New RepairsReport Data:", newRepairsReport);

            // Redirect back to the repairs page
            window.location.href = "repairs.html";

            
        }
    });
});

function validateForm() {
const EquipmentInfo = document.getElementById("EquipmentInfo").value;
const description = document.getElementById("description").value;
const partsUsed = document.getElementById("partsUsed").value;
const startTime = document.getElementById("startTime").value;
const startDate = document.getElementById("startDate").value;
const endTime = document.getElementById("endTime").value;
const endDate = document.getElementById("endDate").value; 
const owner = document.getElementById("owner").value;

const errorMessages = [];
if (description === "") {
    errorMessages.push("Please fill in the 'Description' field.");
    document.getElementById("description").classList.add("invalid-input");
}

if (EquipmentInfo === "") {
    errorMessages.push("Please select an 'Equipment'.");
    document.getElementById("EquipmentInfo").classList.add("invalid-input");
}

if (partsUsed === "") {
    errorMessages.push("Please fill in the 'Parts used' field.");
    document.getElementById("partsUsed").classList.add("invalid-input");
}

if (startTime === "") {
    errorMessages.push("Please select a 'Start time'.");
    document.getElementById("startTime").classList.add("invalid-input");
}

if (startDate === "") {
    errorMessages.push("Please select a 'Start date'.");
    document.getElementById("startDate").classList.add("invalid-input");
}

if (endTime === "") {
    errorMessages.push("Please select a 'End time'.");
    document.getElementById("endTime").classList.add("invalid-input");
}

if (endDate === "") {
    errorMessages.push("Please select a 'End date'.");
    document.getElementById("endDate").classList.add("invalid-input");
}

if (owner === "") {
    errorMessages.push("Please select an 'Owner'.");
    document.getElementById("owner").classList.add("invalid-input");
}

if (errorMessages.length > 0) {
    // Display error messages on the page
    document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
    return false;
}

return true;
}

function resetInputOutlines() {
    // Remove the 'invalid-input' class from all input fields and dropdown lists
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.classList.remove("invalid-input");
    });
}

function goToRepairsPage() {
    window.location.href = "repairs.html";
}


