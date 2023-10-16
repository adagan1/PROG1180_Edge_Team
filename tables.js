// Hardcoded data for the colors and types tables
const colorsData = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Yellow' },
    { id: 5, name: 'Purple' },
    { id: 6, name: 'Pink' },
    { id: 7, name: 'Orange' },
    { id: 8, name: 'White' },
    { id: 9, name: 'Brown' },
    { id: 10, name: 'Grey' },
    { id: 11, name: 'Black' }
];

const typesData = [
    { id: 1, type: 'ball lawnmower' },
    { id: 2, type: 'sack lawnmower' },
    { id: 3, type: 'goku lawnmower' },
    { id: 4, type: 'type jawn' },
    { id: 5, type: 'top 10 minecraft mobs' }
];

const citiesData = [
    { id: 1, name: 'Niagara Falls' },
    { id: 2, name: 'Toronto' },
    { id: 3, name: 'Ottawa' },
    { id: 4, name: 'Calgary' },
    { id: 5, name: 'Winnipeg' }
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
