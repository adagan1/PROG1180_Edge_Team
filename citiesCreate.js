function createCity() {
    // Get the data for the new maintenance item
    const name = document.getElementById("cityName").value;

    // Create an object with the new equipment data
    const newCity = {
        name: name
    };

    // For this example, we'll log the new data to the console
    console.log("New Maintenance Data:", newCity);

    // Redirect back to the inventory page
    window.location.href = "tables.html";
}

function goToMaintenancePage() {
    window.location.href = "tables.html";
}
