function createInventory() {
    // Get the data for the new inventory item
    const equipment = document.getElementById("equipment").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const status = document.getElementById("status").value;
    const amount = document.getElementById("amount").value;
    const colour = document.getElementById("colour").value;

    // Create an object with the new equipment data
    const newEquipment = {
        equipment: equipment,
        name: name,
        description: description,
        price: price,
        status: status,
        amount: amount,
        colour: colour
    };

    // For this example, we'll log the new data to the console
    console.log("New Equipment Data:", newEquipment);

    // Redirect back to the inventory page
    window.location.href = "inventory.html";
}
