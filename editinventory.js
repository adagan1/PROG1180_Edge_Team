document.addEventListener("DOMContentLoaded", function () {
    // Get the equipment data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const equipmentDataString = urlParams.get("equipmentData");

    if (equipmentDataString) {
        try {
            // Parse the JSON data
            const equipmentToEdit = JSON.parse(equipmentDataString);

            // Populate the input fields with the equipment data
            document.getElementById("equipmentName").value = equipmentToEdit.name;
            document.getElementById("equipmentDescription").value = equipmentToEdit.description;
            document.getElementById("equipmentPrice").value = equipmentToEdit.price;
            document.getElementById("equipmentStatus").value = equipmentToEdit.status;
            document.getElementById("equipmentAmount").value = equipmentToEdit.amount;
            document.getElementById("equipmentColour").value = equipmentToEdit.colour;

            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Update the equipment data with the new values
                equipmentToEdit.name = document.getElementById("equipmentName").value;
                equipmentToEdit.description = document.getElementById("equipmentDescription").value;
                equipmentToEdit.price = document.getElementById("equipmentPrice").value;
                equipmentToEdit.status = document.getElementById("equipmentStatus").value;
                equipmentToEdit.amount = document.getElementById("equipmentAmount").value;
                equipmentToEdit.colour = document.getElementById("equipmentColour").value;

                // Update the data in local storage
                // Retrieve the existing equipment data
                const storedEquipmentData = JSON.parse(localStorage.getItem("equipmentData")) || [];

                // Update the equipment data in local storage
                storedEquipmentData[equipmentToEdit.index] = equipmentToEdit;

                // Save the updated data back to local storage
                localStorage.setItem("equipmentData", JSON.stringify(storedEquipmentData));

                // Redirect back to the inventory page
                window.location.href = "inventory.html";
            });
        } catch (error) {
            console.error("Error parsing equipment data:", error);
        }
    } else {
        // Handle missing or invalid equipment data
        alert("Invalid or missing equipment data.");
        window.location.href = "inventory.html";
    }
});
