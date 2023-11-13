document.addEventListener("DOMContentLoaded", function () {
    // Get the brands data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const brandsDataString = urlParams.get("data");
    const brandsName = urlParams.get("brandsName"); // Get the brands name

    if (brandsDataString) {
        try {
            // Parse the JSON data
            const brandsToEdit = JSON.parse(brandsDataString);
        
            // Populate the input fields with the brands data
            document.getElementById("brandsName").value = brandsName; // Set the brands name in the text box
        
            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();
        
                // Validate the input fields
                if (validateForm()) {
                    // Update the brands data with the new values
                    brandsToEdit.name = document.getElementById("brandsName").value;
        
                    // Update the data in local storage
                    // Retrieve the existing brands data
                    const storedBrandsData = JSON.parse(localStorage.getItem("brandsData")) || [];
        
                    // Update the brands data in local storage
                    storedBrandsData[brandsToEdit.index] = brandsToEdit;
        
                    // Save the updated data back to local storage
                    localStorage.setItem("brandsData", JSON.stringify(storedBrandsData));
        
                    // Redirect back to the brands page
                    window.location.href = "tables.html";
                }
            });
        } catch (error) {
            console.error("Error parsing brands data:", error); // Define the 'error' variable
        }
    }
});

function validateForm() {
    const brandsName = document.getElementById("brandsName").value;

    const errorMessages = [];

    if (brandsName === "") {
        errorMessages.push("Please fill in the 'Brands' field.");
        document.getElementById("brandsName").classList.add("invalid-input");
    } else if (!validateBrands(brandsName)) {
        errorMessages.push("The 'Brands' field should only contain letters.");
        document.getElementById("brandsName").classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }
    return true;
}

function validateBrands(name) {
    const brandsPattern = /^[A-Za-z\s]+$/;
    return brandsPattern.test(name);
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
