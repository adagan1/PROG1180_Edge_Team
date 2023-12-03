function createCustomer() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const postal = document.getElementById("postal");
    const province = document.getElementById("province");
    const equipment = document.getElementById("EquipmentInfo");
    const errorContainer = document.getElementById("errorContainer");

    // Clear previous error messages and reset input field outlines
    errorContainer.innerHTML = "";
    resetInputOutlines();

    let errorMessages = [];

    if (!name.value) {
        errorMessages.push("Please fill in the 'Name' field.");
        name.classList.add("invalid-input");
    }

    if (!email.value) {
        errorMessages.push("Please fill in the 'Email' field.");
        email.classList.add("invalid-input");
    } else if (!validateEmail(email.value)) {
        errorMessages.push("Please enter a valid email address.");
        email.classList.add("invalid-input");
    }

    if (!phone.value) {
        errorMessages.push("Please fill in the 'Phone' field.");
        phone.classList.add("invalid-input");
    } else if (!validatePhone(phone.value)) {
        errorMessages.push("Please enter a valid phone number (xxx-xxx-xxxx).");
        phone.classList.add("invalid-input");
    }

    if (!address.value) {
        errorMessages.push("Please fill in the 'Address' field.");
        address.classList.add("invalid-input");
    }

    if (!city.value) {
        errorMessages.push("Please select a city.");
        city.classList.add("invalid-input");
    }

    if (!postal.value) {
        errorMessages.push("Please fill in the 'Postal Code' field.");
        postal.classList.add("invalid-input");
    } else if (!validatePostalCode(postal.value)) {
        errorMessages.push("Please enter a valid postal code (XXX XXX).");
        postal.classList.add("invalid-input");
    }

    if (!province.value) {
        errorMessages.push("Please select a province.");
        province.classList.add("invalid-input");
    }

    if (equipment.value === "") {
        errorMessages.push("Please select an 'Equipment'.");
        equipment.classList.add("invalid-input");
    }

    if (errorMessages.length > 0) {
        // Display error messages on the page
        errorContainer.innerHTML = errorMessages.join("<br>");
    } else {
        const newCustomer = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            city: city.value,
            postal: postal.value,
            province: province.value,
            equipment: equipment.value
        };

        console.log("New Customer Data:", newCustomer);
        window.location.href = "customer.html";
    }
}

function goToCustomerPage() {
    window.location.href = "customer.html";
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    return phonePattern.test(phone);
}

function validatePostalCode(postal) {
    const postalPattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return postalPattern.test(postal);
}

function resetInputOutlines() {
    // Remove the 'invalid-input' class from all input fields and dropdown lists
    const inputs = document.querySelectorAll("input, select");
    inputs.forEach(input => {
        input.classList.remove("invalid-input");
    });
}
function openAddEquipmentPage() {
    // Open the add equipment page
    window.location.href = 'inventoryCreate.html';
}
