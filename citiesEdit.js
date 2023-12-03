document.addEventListener("DOMContentLoaded", function () {
    // Get the city data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const cityDataString = urlParams.get("data");
    const cityName = urlParams.get("cityName"); // Get the city name

    if (cityDataString) {
        try {
            // Parse the JSON data
            const cityToEdit = JSON.parse(cityDataString);
        
            // Populate the input fields with the city data
            document.getElementById("cityName").value = cityName; // Set the city name in the text box
        
            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();
        
                // Validate the input fields
                if (validateForm()) {
                    // Update the city data with the new values
                    cityToEdit.name = document.getElementById("cityName").value;
        
                    // Update the data in local storage
                    // Retrieve the existing city data
                    const storedcityData = JSON.parse(localStorage.getItem("cityData")) || [];
        
                    // Update the city data in local storage
                    storedcityData[cityToEdit.index] = cityToEdit;
        
                    // Save the updated data back to local storage
                    localStorage.setItem("cityData", JSON.stringify(storedcityData));
        
                    // Redirect back to the city page
                    window.location.href = "tables.html";
                }
            });
        } catch (error) {
            console.error("Error parsing city data:", error); // Define the 'error' variable
        }
    }
});

function validateForm() {
    const cityName = document.getElementById("cityName").value;

    const errorMessages = [];

    if (cityName === "") {
        errorMessages.push("Please fill in the 'city' field.");
        document.getElementById("cityName").classList.add("invalid-input");
    } else if (!validatecity(cityName)) {
        errorMessages.push("The 'city' field should only contain letters.");
        document.getElementById("cityName").classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }
    return true;
}

function validatecity(name) {
    const cityPattern = /^[A-Za-z\s]+$/;
    return cityPattern.test(name);
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
