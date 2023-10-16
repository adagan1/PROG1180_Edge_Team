function createInventory() {
    // Get the data for the new inventory item
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;

    // Create an object with the new equipment data
    const newCustomer = {
        name: name,
        age: age,
        email: email,
        phone: phone,
        address: address,
        city: city
    };

    // For this example, we'll log the new data to the console
    console.log("New Equipment Data:", newCustomer);

    // Redirect back to the inventory page
    window.location.href = "customer.html";
}
