function createCustomer() {
    // Get the data for the new inventory item
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const postal = document.getElementById("postal").value;
    const province = document.getElementById("province").value;

    // Create an object with the new equipment data
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
    console.log("New Equipment Data:", newCustomer);

    // Redirect back to the inventory page
    window.location.href = "customer.html";
}

function goToCustomerPage() {
    window.location.href = "customer.html";
}
