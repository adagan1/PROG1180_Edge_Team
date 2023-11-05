document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the "Save Changes" button
    document.getElementById("createRepairsButton").addEventListener("click", function () {
        // Reset the input field outlines
        resetInputOutlines();

        // Validate the input fields
        if (validateForm()) {
            // Get the data for the new repair report
            const equipmentName = document.getElementById("equipmentName").value;
            const brand = document.getElementById("brand").value;
            const description = document.getElementById("description").value;
            const partsUsed = document.getElementById("partsUsed").value;
            const startTime = document.getElementById("startTime").value;
            const startDate = document.getElementById("startDate").value;
            const endTime = document.getElementById("endTime").value;
            const endDate = document.getElementById("endDate").value;          

            // Get the selected owner from the dropdown list
            const owner = document.getElementById("owner").value;

            // Create an object with the new equipment data
            const newRepairsReport = {
                equipmentName: equipmentName,
                brand: brand,
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

            // Redirect back to the inventory page
            window.location.href = "repairs.html";
        }
    });
});

function validateForm() {
const equipmentName = document.getElementById("equipmentName").value;
const brand = document.getElementById("brand").value;
const description = document.getElementById("description").value;
const partsUsed = document.getElementById("partsUsed").value;
const startTime = document.getElementById("startTime").value;
const startDate = document.getElementById("startDate").value;
const endTime = document.getElementById("endTime").value;
const endDate = document.getElementById("endDate").value; 
const owner = document.getElementById("owner").value;

const errorMessages = [];

if (equipmentName.trim() === "") {
    errorMessages.push("Please fill in the 'Equipment Name' field.");
    document.getElementById("equipmentName").classList.add("invalid-input");
}

if (brand === "") {
    errorMessages.push("Please select a 'Brand'.");
    document.getElementById("brand").classList.add("invalid-input");
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
