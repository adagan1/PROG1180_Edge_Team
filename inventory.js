// Function to generate a random equipment
function generateRandomEquipment() {
    const equipmentTypes = ["Lawnmower", "Drill", "Saw", "Weedwacker", "Wrench"];
    const randomEquipment = equipmentTypes[Math.floor(Math.random() * equipmentTypes.length)];
    const randomName = `Brand${Math.floor(Math.random() * 10) + 1} ${randomEquipment}`;
    const description = `This is a ${randomEquipment} from Brand${Math.floor(Math.random() * 10) + 1}.`;
    const price = (Math.random() * 1000).toFixed(2); // Random price between 0 and 1000
    const statuses = ["Available", "In Use", "Under Maintenance"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const amount = Math.floor(Math.random() * 10) + 1; // Random amount between 1 and 10

    return {
        equipment: randomEquipment,
        name: randomName,
        description: description,
        price: price,
        status: randomStatus,
        amount: amount,
    };
}

// Function to fill the table with randomly generated equipment
function fillTableWithRandomEquipment() {
    const table = document.getElementById("equipmentTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < 10; i++) { // Generate 10 random equipment
        const equipment = generateRandomEquipment();
        const row = document.createElement("tr");
        row.innerHTML = `<td>${equipment.equipment}</td><td>${equipment.name}</td><td>${equipment.description}</td><td>$${equipment.price}</td><td>${equipment.status}</td><td>${equipment.amount}</td>`;
        tbody.appendChild(row);
    }
}

// Call the function to populate the table when the page loads
window.onload = fillTableWithRandomEquipment;
