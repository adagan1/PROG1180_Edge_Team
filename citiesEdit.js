document.addEventListener("DOMContentLoaded", function () {
    // Get the cities data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const citiesDataString = urlParams.get("data");
    const citiesName = urlParams.get("citiesName"); // Get the cities name

    if (citiesDataString) {
        try {
            // Parse the JSON data
            const citiesToEdit = JSON.parse(citiesDataString);
        
            // Populate the input fields with the cities data
            document.getElementById("citiesName").value = citiesName; // Set the cities name in the text box
        
            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();
        
                // Validate the input fields
                if (validateForm()) {
                    // Update the cities data with the new values
                    citiesToEdit.name = document.getElementById("citiesName").value;
        
                    // Update the data in local storage
                    // Retrieve the existing cities data
                    const storedCitiesData = JSON.parse(localStorage.getItem("citiesData")) || [];
        
                    // Update the cities data in local storage
                    storedCitiesData[citiesToEdit.index] = citiesToEdit;
        
                    // Save the updated data back to local storage
                    localStorage.setItem("citiesData", JSON.stringify(storedCitiesData));
        
                    // Redirect back to the cities page
                    window.location.href = "tables.html";
                }
            });
        } catch (error) {
            console.error("Error parsing cities data:", error); // Define the 'error' variable
        }
    }
});

function validateForm() {
    const citiesName = document.getElementById("citiesName").value;

    const errorMessages = [];

    if (citiesName === "") {
        errorMessages.push("Please fill in the 'Cities' field.");
        document.getElementById("citiesName").classList.add("invalid-input");
    } else if (!validateCities(citiesName)) {
        errorMessages.push("The 'Cities' field should only contain letters.");
        document.getElementById("citiesName").classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }
    return true;
}

function validateCities(name) {
    const citiesPattern = /^[A-Za-z\s]+$/;
    return citiesPattern.test(name);
}


function goToTablesPage() {
    window.location.href = "tables.html";
}



function resetInputOutlines() {
    // Remove the 'invalid-input' class from all input fields and dropdown lists
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.classList.remove("invalid-input");
    });
}
