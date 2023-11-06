document.addEventListener("DOMContentLoaded", function () {
    // Get the type data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const typesDataString = urlParams.get("data");
    const typesName = urlParams.get("typesName"); // Get the type name

    if (typesDataString) {
        try {
            // Parse the JSON data
            const typesToEdit = JSON.parse(typesDataString);
        
            // Populate the input fields with the type data
            document.getElementById("typesName").value = typesName; // Set the type name in the text box
        
            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();
        
                // Validate the input fields
                if (validateForm()) {
                    // Update the type data with the new values
                    typesToEdit.name = document.getElementById("typesName").value;
        
                    // Update the data in local storage
                    // Retrieve the existing type data
                    const storedtypeData = JSON.parse(localStorage.getItem("typesData")) || [];
        
                    // Update the type data in local storage
                    storedtypeData[typesToEdit.index] = typesToEdit;
        
                    // Save the updated data back to local storage
                    localStorage.setItem("typesData", JSON.stringify(storedtypeData));
        
                    // Redirect back to the type page
                    window.location.href = "tables.html";
                }
            });
        } catch (error) {
            console.error("Error parsing type data:", error); // Define the 'error' variable
        }
    }
});

function validateForm() {
    const typesName = document.getElementById("typesName").value;

    const errorMessages = [];

    if (typesName === "") {
        errorMessages.push("Please fill in the 'type' field.");
        document.getElementById("typesName").classList.add("invalid-input");
    } else if (!validatetype(typesName)) {
        errorMessages.push("The 'type' field should only contain letters.");
        document.getElementById("typesName").classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }
    return true;
}

function validatetype(name) {
    const typesPattern = /^[A-Za-z\s]+$/;
    return typesPattern.test(name);
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
