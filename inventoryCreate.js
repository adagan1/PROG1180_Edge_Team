function createInventory() {
    // Get the data for the new inventory item
    const name = document.getElementById("name").value;
    const brand = document.getElementById("brand").value;
    const description = document.getElementById("description").value;
    const colour = document.getElementById("colour").value;

    // Get the selected owner from the dropdown list
    const owner = document.getElementById("owner").value;

    // Validate the required fields
    if (name.trim() === "" || brand === "" || colour === "" || owner === "") {
        alert("Please fill in all required fields.");
        return;
    }

    // Create an object with the new equipment data
    const newEquipment = {
        name: name,
        brand: brand,
        description: description,
        colour: colour,
        owner: owner
    };

    // For this example, we'll log the new data to the console
    console.log("New Equipment Data:", newEquipment);

    // Redirect back to the inventory page
    window.location.href = "inventory.html";
}

function goToEquiptmentPage() {
    window.location.href = "inventory.html";
}
