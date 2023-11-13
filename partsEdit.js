document.addEventListener("DOMContentLoaded", function () {
    // Get the part data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const partsDataString = urlParams.get("data");
    const partName = urlParams.get("partName"); // Get the part name

    if (partsDataString) {
        try {
            // Parse the JSON data
            const partToEdit = JSON.parse(partsDataString);
        
            // Populate the input fields with the part data
            document.getElementById("partName").value = partName; // Set the part name in the text box
        
            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();
        
                // Validate the input fields
                if (validateForm()) {
                    // Update the part data with the new values
                    partToEdit.name = document.getElementById("partName").value;
        
                    // Update the data in local storage
                    // Retrieve the existing part data
                    const storedPartData = JSON.parse(localStorage.getItem("partsData")) || [];
        
                    // Update the part data in local storage
                    storedPartData[partToEdit.index] = partToEdit;
        
                    // Save the updated data back to local storage
                    localStorage.setItem("partsData", JSON.stringify(storedPartData));
        
                    // Redirect back to the part page
                    window.location.href = "tables.html";
                }
            });
        } catch (error) {
            console.error("Error parsing part data:", error);
        }
    }
});

function validateForm() {
    const partName = document.getElementById("partName").value;
    const errorMessages = [];

    if (partName === "") {
        errorMessages.push("Please fill in the 'part' field.");
        document.getElementById("partName").classList.add("invalid-input");
    } else if (!validatePart(partName)) {
        errorMessages.push("The 'part' field should only contain letters.");
        document.getElementById("partName").classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }
    return true;
}

function validatePart(name) {
    const partPattern = /^[A-Za-z\s]+$/;
    return partPattern.test(name);
}

function goToTablesPage() {
    window.location.href = "tables.html";
}

function resetInputOutlines() {
    // Remove the 'invalid-input' class from all input fields
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.classList.remove("invalid-input");
    });
}
