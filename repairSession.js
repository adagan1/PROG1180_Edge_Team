document.addEventListener("DOMContentLoaded", function () {
    // Get the equipment data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const repairDataString = urlParams.get("repairData");

    if (repairDataString) {
        try {
            // Parse the JSON data
            const repairToEdit = JSON.parse(repairDataString);

            // Populate the input fields with the equipment data
            document.getElementById("repairTitle").textContent = repairToEdit.customer + "'s " + repairToEdit.equipment;
            document.getElementById("equipmentLabel").value = repairToEdit.equipment;
            document.getElementById("equipmentDescription").value = repairToEdit.description;

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
                //const customer = customerDropdown.value;

                if (name && brand && description && customer) {
                    // All fields are filled, proceed with saving changes
                    repairToEdit.customer = customer;
                    repairToEdit.brand = brand;
                    repairToEdit.description = description;
                    repairToEdit.customer = customer;

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
                    if (!customer) {
                        errorContainer.innerText += "Please select an customer.";
                        customerDropdown.classList.add("invalid-input");
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

function goToEquipmentPage() {
    window.location.href = "inventory.html";
}

function resetValidationStyles() {
    const elements = document.getElementsByClassName("invalid-input");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("invalid-input");
    }
}

document.addEventListener("DOMContentLoaded", function () {

    //automatically fill start time
    var currentDateTime = new Date();
    var currentDate = currentDateTime.toISOString().split('T')[0];
    var currentTime = currentDateTime.toTimeString().split(' ')[0].substring(0, 5);

    document.getElementById('startDate').value = currentDate;
    document.getElementById('startTime').value = currentTime;

    // Populate parts dropdown on page load
    const partsDropdown = document.getElementById("part-select-1");
    const partsData = [
        { name: 'Bolt' },
        { name: 'Screw' },
        { name: 'Washer' },
        { name: 'Nut' },
        { name: 'Spring' },
    ];

    partsData.forEach(part => {
        const option = document.createElement("option");
        option.value = part.name;
        option.text = part.name;
        partsDropdown.appendChild(option);
    });

    // Get the repair data from the URL parameter as a JSON string
    const urlParams = new URLSearchParams(window.location.search);
    const repairDataString = urlParams.get("selectedRepair");

    // ... rest of the original script ...

});

// Function to add a new part row
function addPartRow() {
    const partsList = document.getElementById("parts-list");
    const newRow = document.createElement("div");
    newRow.innerHTML = `
        <div class="part-select-container">
            <select>` +
                partsData.map(part => `<option value="${part.name}">${part.name}</option>`).join('') +
            `</select>
        </div>
        <div class="quantity-input-container">
            <input type="number" class="quantity-input" value="1" min="1">
        </div>
    `;
    partsList.appendChild(newRow);
}
//SJ Add part and quantity
let partIndex = 2;

    function addPartRow() {
        const partsList = document.getElementById('parts-list');
        const newRow = document.createElement('div');
        newRow.classList.add('part-row');

        // Create containers for the part select and quantity input
        const partSelectContainer = document.createElement('div');
        partSelectContainer.classList.add('part-select-container');

        const quantityInputContainer = document.createElement('div');
        quantityInputContainer.classList.add('quantity-input-container');

        // Create and append the 'Part' label and select element
        const partLabel = document.createElement('label');
        partLabel.textContent = 'Part';
        partLabel.htmlFor = `part-select-${partIndex}`;

        const newSelect = document.createElement('select');
        newSelect.id = `part-select-${partIndex}`;
        newSelect.innerHTML = '<option value="">Select Part</option>'; // Add more options dynamically if needed

        partSelectContainer.appendChild(partLabel);
        partSelectContainer.appendChild(newSelect);

        // Create and append the 'Quantity' label and input element
        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'Quantity';
        quantityLabel.htmlFor = `quantity-input-${partIndex}`;

        const newQuantityInput = document.createElement('input');
        newQuantityInput.type = 'number';
        newQuantityInput.id = `quantity-input-${partIndex}`;
        newQuantityInput.className = 'quantity-input';
        newQuantityInput.value = '1';
        newQuantityInput.min = '1';

        quantityInputContainer.appendChild(quantityLabel);
        quantityInputContainer.appendChild(newQuantityInput);

        // Append the containers to the new row
        newRow.appendChild(partSelectContainer);
        newRow.appendChild(quantityInputContainer);

        // Append the new row to the parts list in the DOM
        partsList.appendChild(newRow);

        // Increment the part index for the next part row
        partIndex++;
    }
