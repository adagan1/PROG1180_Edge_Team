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
    const table = document.getElementById("customerTable");
    const tbody = table.getElementsByTagName("tbody")[0];

    for (let i = 0; i < 10; i++) { // Generate 10 random people
        const person = generateRandomPerson();
        const row = document.createElement("tr");
        row.innerHTML = `<td>${person.name}</td><td>${person.age}</td><td>${person.email}</td>`;
        tbody.appendChild(row);
    }
}

// Function to filter equipment based on the search input
function filterCustomer() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("customerTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const rows = tbody.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const columns = row.getElementsByTagName("td");
        let found = false;

        for (let j = 0; j < columns.length; j++) {
            const cell = columns[j];
            if (cell) {
                const text = cell.textContent.toLowerCase();
                if (text.includes(filter)) {
                    found = true;
                    break;
                }
            }
        }

        if (found) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchInput").addEventListener("input", filterCustomer);
    fillTableWithRandomPeople();
});
