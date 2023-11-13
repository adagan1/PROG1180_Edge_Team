function createPart() {
    // Get the data for the new part
    const name = document.getElementById("partName").value;

    // Create an object with the new part data
    const newPart = {
        name: name
    };

    // For this example, we'll log the new data to the console
    console.log("New Part Data:", newPart);

    // Redirect back to the maintenance page
    window.location.href = "tables.html";
}

function goToMaintenancePage() {
    window.location.href = "tables.html";
}
