function createCustomer() {
    // Get the data for the new customer
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postal = document.getElementById("postal").value;
    const province = document.getElementById("province").value;

    // Input validation
    if (!name || !email || !phone || !address || !city || !postal || !province) {
        // Show an error message if any of the fields are empty
        alert("Please fill in all the required fields.");
    } else if (!validateEmail(email)) {
        // Show an error message if the email is not valid
        alert("Please enter a valid email address.");
    } else if (!validatePhone(phone)) {
        // Show an error message if the phone number is not in the correct format
        alert("Please enter a valid phone number (xxx-xxx-xxxx).");
    } else if (!validatePostalCode(postal)) {
        // Show an error message if the postal code is not in the correct format
        alert("Please enter a valid postal code (XXX XXX).");
    } else {
        // Create an object with the new customer data
        const newCustomer = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            city: city,
            postal: postal,
            province: province
        };

        // For this example, we'll log the new data to the console
        console.log("New Customer Data:", newCustomer);

        // Redirect back to the customer page
        window.location.href = "customer.html";
    }
}

function goToCustomerPage() {
    window.location.href = "customer.html";
}

function validateEmail(email) {
    // Email validation regex pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validatePhone(phone) {
    // Phone number validation regex pattern (xxx-xxx-xxxx)
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    return phonePattern.test(phone);
}

function validatePostalCode(postal) {
    // Postal code validation regex pattern (XXX XXX)
    const postalPattern = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    return postalPattern.test(postal);
}
