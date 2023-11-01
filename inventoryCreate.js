function createInventory() {
    // Get the data for the new inventory item
    const name = document.getElementById("name").value;
    const brand = document.getElementById("brand").value;
    const description = document.getElementById("description").value;
    const colour = document.getElementById("colour").value;

    // Create an object with the new equipment data
    const newEquipment = {
        name: name,
        brand: brand,
        description: description,
        colour: colour
    };

    // For this example, we'll log the new data to the console
    console.log("New Equipment Data:", newEquipment);

    // Redirect back to the inventory page
    window.location.href = "inventory.html";
}

function goToEquiptmentPage() {
    window.location.href = "inventory.html";
}
