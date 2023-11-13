document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the "Save Changes" button
    document.getElementById("createInventoryButton").addEventListener("click", function () {
        // Reset the input field outlines
        resetInputOutlines();

        // Validate the input fields
        if (validateForm()) {
            // Get the data for the new inventory item
            const name = document.getElementById("name").value;
            const brand = document.getElementById("brand").value;
            const description = document.getElementById("description").value;
            const colour = document.getElementById("colour").value;

            // Get the selected owner from the dropdown list
            const owner = document.getElementById("owner").value;

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
    });
});

function validateForm() {
    const name = document.getElementById("name").value;
    const brand = document.getElementById("brand").value;
    const description = document.getElementById("description").value;
    const colour = document.getElementById("colour").value;
    const owner = document.getElementById("owner").value;

    const errorMessages = [];

    if (name.trim() === "") {
        errorMessages.push("Please fill in the 'Name' field.");
        document.getElementById("name").classList.add("invalid-input");
    }

    if (brand === "") {
        errorMessages.push("Please select a 'Brand'.");
        document.getElementById("brand").classList.add("invalid-input");
    }

    if (colour === "") {
        errorMessages.push("Please select a 'Colour'.");
        document.getElementById("colour").classList.add("invalid-input");
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

function goToEquipmentPage() {
    window.location.href = "inventory.html";
}


function goToCreateCustomerPage() {
    window.location.href = "customerCreate.html";
}
