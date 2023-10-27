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
    tableBody.innerHTML = ''; // Clear the table

    data.forEach(item => {
        const row = tableBody.insertRow();
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const cell = row.insertCell();
                cell.textContent = item[key];
            }
        }
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
        return Object.values(item).some(value => value.toString().toLowerCase().includes(searchTerm));
    });

    populateTable(activeTableId, filteredData);
}

// Initial population of the colors and types tables
populateTable('coloursTable', colorsData);
populateTable('typesTable', typesData);
populateTable('citiesTable', citiesData)

// Activate the "Colors" tab by default
showTable('coloursTable');
