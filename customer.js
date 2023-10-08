// Function to generate a random person
function generateRandomPerson() {
    const names = ["John", "Alice", "Bob", "Emma", "Michael", "Olivia"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const age = Math.floor(Math.random() * 50) + 18; // Random age between 18 and 67
    const email = `${randomName.toLowerCase()}${age}@example.com`;

    return {
        name: randomName,
        age: age,
        email: email,
    };
}

// Function to fill the table with randomly generated people
function fillTableWithRandomPeople() {
    const table = document.getElementById("peopleTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < 10; i++) { // Generate 10 random people
        const person = generateRandomPerson();
        const row = document.createElement("tr");
        row.innerHTML = `<td>${person.name}</td><td>${person.age}</td><td>${person.email}</td>`;
        tbody.appendChild(row);
    }
}

// Call the function to populate the table when the page loads
window.onload = fillTableWithRandomPeople;
