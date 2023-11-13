document.addEventListener("DOMContentLoaded", function () {
    // Get the brand data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const brandDataString = urlParams.get("data");
    const brandName = urlParams.get("brandName"); // Get the brand name

    if (brandDataString) {
        try {
            // Parse the JSON data
            const brandToEdit = JSON.parse(brandDataString);
        
            // Populate the input fields with the brand data
            document.getElementById("brandName").value = brandName; // Set the brand name in the text box
        
            // Add an event listener to save changes
            document.getElementById("saveButton").addEventListener("click", function () {
                // Reset the input field outlines
                resetInputOutlines();
        
                // Validate the input fields
                if (validateForm()) {
                    // Update the brand data with the new values
                    brandToEdit.name = document.getElementById("brandName").value;
        
                    // Update the data in local storage
                    // Retrieve the existing brand data
                    const storedbrandData = JSON.parse(localStorage.getItem("brandData")) || [];
        
                    // Update the brand data in local storage
                    storedbrandData[brandToEdit.index] = brandToEdit;
        
                    // Save the updated data back to local storage
                    localStorage.setItem("brandData", JSON.stringify(storedbrandData));
        
                    // Redirect back to the brand page
                    window.location.href = "tables.html";
                }
            });
        } catch (error) {
            console.error("Error parsing brand data:", error); // Define the 'error' variable
        }
    }
});

function validateForm() {
    const brandName = document.getElementById("brandName").value;

    const errorMessages = [];

    if (brandName === "") {
        errorMessages.push("Please fill in the 'brand' field.");
        document.getElementById("brandName").classList.add("invalid-input");
    } else if (!validatebrand(brandName)) {
        errorMessages.push("The 'brand' field should only contain letters.");
        document.getElementById("brandName").classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        document.getElementById("errorContainer").innerHTML = errorMessages.join("<br>");
        return false;
    }
    return true;
}

function validatebrand(name) {
    const brandPattern = /^[A-Za-z\s]+$/;
    return brandPattern.test(name);
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
