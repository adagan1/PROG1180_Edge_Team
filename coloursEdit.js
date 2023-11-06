document.addEventListener("DOMContentLoaded", function () {
    // Get the colour data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const colourDataString = urlParams.get("data");
    const colorName = urlParams.get("colorName"); // Get the color name

    if (colourDataString) {
        try {
            // Parse the JSON data
            const colourToEdit = JSON.parse(colourDataString);
        
            // Populate the input fields with the color data
            document.getElementById("colourName").value = colorName; // Set the color name in the text box
        
            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();
        
                // Validate the input fields
                if (validateForm()) {
                    // Update the colour data with the new values
                    colourToEdit.name = document.getElementById("colourName").value;
        
                    // Update the data in local storage
                    // Retrieve the existing colour data
                    const storedColourData = JSON.parse(localStorage.getItem("colourData")) || [];
        
                    // Update the colour data in local storage
                    storedColourData[colourToEdit.index] = colourToEdit;
        
                    // Save the updated data back to local storage
                    localStorage.setItem("colourData", JSON.stringify(storedColourData));
        
                    // Redirect back to the colour page
                    window.location.href = "tables.html";
                }
            });
        } catch (error) {
            console.error("Error parsing colour data:", error); // Define the 'error' variable
        }
    }
});

function validateForm() {
    const colourName = document.getElementById("colourName").value;

    const errorMessages = [];

    if (colourName === "") {
        errorMessages.push("Please fill in the 'Colour' field.");
        document.getElementById("colourName").classList.add("invalid-input");
    }
    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }
    return true;
}

function goToTablesPage() {
    window.location.href = "tables.html";
}

function validateColour(name) {
    const colourPattern = /^[^0-9]*$/;
    return colourPattern.test(name);
}

function resetInputOutlines() {
    // Remove the 'invalid-input' class from all input fields and dropdown lists
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.classList.remove("invalid-input");
    });
}
