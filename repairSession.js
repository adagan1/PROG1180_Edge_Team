const partsData = [
    { name: 'Bolt' },
    { name: 'Screw' },
    { name: 'Washer' },
    { name: 'Nut' },
    { name: 'Spring' },
];

document.addEventListener("DOMContentLoaded", function () {
    // Get the equipment data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const repairDataString = urlParams.get("repairData");

    // Populate initial parts dropdown
    const initialPartsDropdown = document.querySelector(".part-select");
    partsData.forEach(part => {
        const option = document.createElement("option");
        option.value = part.name;
        option.text = part.name;
        initialPartsDropdown.appendChild(option);
    });

    // Automatically fill start time
    var currentDateTime = new Date();
    var currentDate = currentDateTime.toISOString().split('T')[0];
    var currentTime = currentDateTime.toTimeString().split(' ')[0].substring(0, 5);

    document.getElementById('startDate').value = currentDate;
    document.getElementById('startTime').value = currentTime;

    // Retrieve and parse the repair session data
    let repairData = null;

    if (repairDataString) {
        try {
            repairData = JSON.parse(repairDataString);
        } catch (error) {
            console.error("Error parsing repair data:", error);
        }
    }

    // Check the repair session status and update the complete button visibility
    if (repairData && repairData.status === 'Completed') {
        const completeButton = document.getElementById('completeButton');
        completeButton.style.display = 'none';
    }

    // Add click event listener to the complete button
    completeButton.addEventListener('click', function () {
        // Redirect to the repairs.html page
        window.location.href = 'repairs.html';
    });

    if (repairDataString) {
        try {
            // Parse the JSON data
            const repairToEdit = JSON.parse(repairDataString);

            // Populate the input fields with the equipment data
            document.getElementById("repairTitle").textContent = repairToEdit.customer + "'s " + repairToEdit.equipment;

            // Display Repair ID in a label
            document.getElementById("repairIdLabel").textContent = "Repair ID: " + repairToEdit.repairid;

            document.getElementById("description").value = repairToEdit.description;

            // Handle the customer dropdown
            const customerDropdown = document.getElementById("customer");
            customerDropdown.value = repairToEdit.customer;

            // Add an event listener to save changes
            const saveButton = document.getElementById("saveButton");
            saveButton.addEventListener("click", function () {
                // Reset previous error styles and messages
                resetValidationStyles();
                const errorContainer = document.getElementById("errorContainer");
                errorContainer.innerText = "";

                // Validate the input fields
                const customer = document.getElementById("customer").value;
                const brand = document.getElementById("brand").value;
                const description = document.getElementById("equipmentDescription").value;

                if (customer && brand && description) {
                    // All fields are filled, proceed with saving changes
                    repairToEdit.customer = customer;
                    repairToEdit.brand = brand;
                    repairToEdit.description = description;

                    // Update the data in local storage
                    const storedRepairData = JSON.parse(localStorage.getItem("equipmentData")) || [];
                    storedRepairData[repairToEdit.index] = repairToEdit;
                    localStorage.setItem("repairData", JSON.stringify(storedRepairData));

                    // Redirect back to the inventory page
                    window.location.href = "repairs.html";
                } else {
                    // Display error messages for missing or incorrect fields
                    if (!customer) {
                        errorContainer.innerText += "Please enter a name.\n";
                        document.getElementById("customer").classList.add("invalid-input");
                    }
                    if (!brand) {
                        errorContainer.innerText += "Please select a brand.\n";
                        document.getElementById("brand").classList.add("invalid-input");
                    }
                    if (!description) {
                        errorContainer.innerText += "Please enter equipment description.\n";
                        document.getElementById("equipmentDescription").classList.add("invalid-input");
                    }
                }
            });
        } catch (error) {
            console.error("Error parsing equipment data:", error);
        }
    } else {
        // Handle missing or invalid equipment data
        alert("Invalid or missing equipment data.");
        window.location.href = "repairs.html";
    }
});

function goToRepairsPage() {
    window.location.href = "repairs.html";
}

function resetValidationStyles() {
    const elements = document.getElementsByClassName("invalid-input");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("invalid-input");
    }
}

function addPartRow() {
    const partsList = document.getElementById("parts-list");
    const newRow = document.createElement("div");
    newRow.className = 'part-row';

    newRow.innerHTML = `
        <select class="part-select">
            <option value="">Select Part</option>
            ${partsData.map(part => `<option value="${part.name}">${part.name}</option>`).join('')}
        </select>
        <input type="number" class="quantity-input" value="1" min="1">
        <button type="button" class="remove-part-button" onclick="removeThisPartRow(this)">-</button>
    `;

    partsList.appendChild(newRow);
}

function removeThisPartRow(button) {
    const partRow = button.parentElement;
    partRow.remove();
}
