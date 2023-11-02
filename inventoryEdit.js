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
            document.getElementById("brand").value = equipmentToEdit.brand;
            document.getElementById("equipmentDescription").value = equipmentToEdit.description;
            document.getElementById("colour").value = equipmentToEdit.colour;

            // Handle the owner dropdown
            const ownerDropdown = document.getElementById("owner");
            ownerDropdown.value = equipmentToEdit.owner;

            // Add an event listener to save changes
            const saveButton = document.getElementById("saveButton");
            saveButton.addEventListener("click", function () {
                // Validate the input fields
                const name = document.getElementById("equipmentName").value;
                const brand = document.getElementById("brand").value;
                const description = document.getElementById("equipmentDescription").value;
                const colour = document.getElementById("colour").value;
                const owner = ownerDropdown.value;

                if (name && brand && description && colour && owner) {
                    // All fields are filled, proceed with saving changes
                    equipmentToEdit.name = name;
                    equipmentToEdit.brand = brand;
                    equipmentToEdit.description = description;
                    equipmentToEdit.colour = colour;
                    equipmentToEdit.owner = owner;

                    // Update the data in local storage
                    const storedEquipmentData = JSON.parse(localStorage.getItem("equipmentData")) || [];
                    storedEquipmentData[equipmentToEdit.index] = equipmentToEdit;
                    localStorage.setItem("equipmentData", JSON.stringify(storedEquipmentData));

                    // Redirect back to the inventory page
                    window.location.href = "inventory.html";
                } else {
                    // Display an alert if any required field is empty
                    alert("Please fill in all the required fields.");
                }
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

function goToEquipmentPage() {
    window.location.href = "inventory.html";
}
