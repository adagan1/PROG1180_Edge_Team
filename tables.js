// Hardcoded data for the colors and types tables
const colorsData = [
    { name: 'Red' },
    { name: 'Green' },
    { name: 'Blue' },
    { name: 'Yellow' },
    { name: 'Purple' },
    { name: 'Pink' },
    { name: 'Orange' },
    { name: 'White' },
    { name: 'Brown' },
    { name: 'Grey' },
    { name: 'Black' }
];

const typesData = [
    { type: 'Electric lawnmower' },
    { type: 'Gas powered lawnmower' },
    { type: 'Bagged lawnmower' },
    { type: 'Push Mower' },
    { type: 'Scythe' }
];

const citiesData = [
    { name: 'Niagara Falls' },
    { name: 'Toronto' },
    { name: 'Ottawa' },
    { name: 'Calgary' },
    { name: 'Winnipeg' }
];

// Function to populate a table with data
function populateTable(tableId, data) {
    const table = document.getElementById(tableId);
    const tableBody = table.getElementsByTagName('tbody')[0];

    // Clear the existing table rows
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.textContent = item.name || item.type; // Use item.name for the cell content

        // Add a Controls column for editing
        const controlsCell = row.insertCell();
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            editItem(row, tableId);
        };
        controlsCell.appendChild(editButton);
    });
}

// Function to show a table and deactivate the other tab
function showTable(tableId) {
    const tabs = document.getElementById('tabs').getElementsByTagName('button');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    
    // Hide all tables
    const allTables = document.getElementsByClassName('table');
    for (const table of allTables) {
        table.classList.remove('active');
    }
    
    document.getElementById(tableId).classList.add('active');
}

// Function to filter the table based on user input
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    // Determine which table is currently active
    const activeTableId = Array.from(document.getElementsByClassName('table active')).map(table => table.id)[0];
    
    // Determine the dataset based on the active table
    let data;
    if (activeTableId === 'coloursTable') {
        data = colorsData;
    } else if (activeTableId === 'typesTable') {
        data = typesData;
    } else if (activeTableId === 'citiesTable') {
        data = citiesData;
    } else {
        return;
    }
    
    const filteredData = data.filter(item => {
        return (item.name || item.type).toLowerCase().includes(searchTerm); // Update this line to check both "name" and "type"
    });

    populateTable(activeTableId, filteredData);
}

// Function to handle editing an item
function editItem(row, tableId) {
    const data = getTableData(tableId);
    const rowIndex = row.rowIndex - 1; // Subtract 1 to account for the header row
    const cellToEdit = row.cells[0]; // Assuming you're editing the first cell

    // Prompt the user for the new value
    const newValue = prompt("Edit item:", data[rowIndex].name || data[rowIndex].type);

    if (newValue !== null) {
        if (data[rowIndex].name) {
            data[rowIndex].name = newValue;
        } else {
            data[rowIndex].type = newValue;
        }
        cellToEdit.textContent = newValue; // Update the cell content
    }
}

// Helper function to get data from a selected table
function getTableData(tableId) {
    let data;
    if (tableId === 'coloursTable') {
        data = colorsData;
    } else if (tableId === 'typesTable') {
        data = typesData;
    } else if (tableId === 'citiesTable') {
        data = citiesData;
    }
    return data;
}

// Update the table to include Edit buttons
function updateTableWithEditButtons() {
    const tables = document.getElementsByClassName('table');
    for (const table of tables) {
        const rows = table.rows;
        for (let i = 1; i < rows.length; i++) {
            const editCell = rows[i].insertCell(-1);
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = function () {
                editItem(rows[i], table.id);
            };
            editCell.appendChild(editButton);
        }
    }
}

// Call the function to add Edit buttons when the page loads
updateTableWithEditButtons();

// Initial population of the colors and types tables
populateTable('coloursTable', colorsData);
populateTable('typesTable', typesData);
populateTable('citiesTable', citiesData);

// Activate the "Colors" tab by default
showTable('coloursTable');

// Add an event listener to the search input for real-time filtering
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterTable);

// Call the function to add Edit buttons when the page loads
updateTableWithEditButtons();

// Initial population of the colors and types tables
populateTable('coloursTable', colorsData);
populateTable('typesTable', typesData);
populateTable('citiesTable', citiesData);

// Activate the "Colors" tab by default
showTable('coloursTable');
