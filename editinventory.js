document.addEventListener("DOMContentLoaded", function () {
    // Get the index from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const index = parseInt(urlParams.get("index"));

    // Get the equipment data from the inventory page (inventory.html)
    const equipmentData = getEquipmentDataFromInventoryPage(index);

    // Populate the form fields with the equipment data
    document.getElementById("equipment").value = equipmentData.equipment;
    document.getElementById("name").value = equipmentData.name;
    document.getElementById("description").value = equipmentData.description;
    document.getElementById("price").value = equipmentData.price;
    document.getElementById("status").value = equipmentData.status;
    document.getElementById("amount").value = equipmentData.amount;
    document.getElementById("colour").value = equipmentData.colour;

    // Enable the form fields for editing
    const saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", function () {
        // Update the equipment data with the edited values
        equipmentData.equipment = document.getElementById("equipment").value;
        equipmentData.name = document.getElementById("name").value;
        equipmentData.description = document.getElementById("description").value;
        equipmentData.price = document.getElementById("price").value;
        equipmentData.status = document.getElementById("status").value;
        equipmentData.amount = document.getElementById("amount").value;
        equipmentData.colour = document.getElementById("colour").value;

        // Save the edited data to local storage
        saveEquipmentDataToLocalStorage(index, equipmentData);

        // Redirect back to the inventory page
        window.location.href = "inventory.html";
    });
});

// Function to get equipment data from the inventory page based on the index
function getEquipmentDataFromInventoryPage(index) {
    // Assuming that the inventory page (inventory.html) defines the equipment data in a global variable called "hardCodedEquipment"
    // You can access the equipment data using the index
    if (Array.isArray(hardCodedEquipment) && index >= 0 && index < hardCodedEquipment.length) {
        return hardCodedEquipment[index];
    } else {
        // Handle the case where the index is out of bounds or "hardCodedEquipment" is not available
        console.error("Equipment data not found.");
        return null; // or return a default value or error handling logic
    }
}

// Function to save edited equipment data to local storage
function saveEquipmentDataToLocalStorage(index, equipmentData) {
    const updatedEquipmentData = JSON.parse(localStorage.getItem('equipmentData')) || [];
    updatedEquipmentData[index] = equipmentData;
    localStorage.setItem('equipmentData', JSON.stringify(updatedEquipmentData));
}
