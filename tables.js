// Hardcoded data for the colours and types tables
const coloursData = [
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

const partsData = [
    { name: 'Bolt' },
    { name: 'Screw' },
    { name: 'Washer' },
    { name: 'Nut' },
    { name: 'Spring' },
];

function populateTable(tableId, data) {
    const table = document.getElementById(tableId);
    const tableBody = table.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.textContent = item.name || item.type; 

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
// Function to filter the table based on user input
function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeTableId = Array.from(document.getElementsByClassName('table active')).map(table => table.id)[0];

    let data;
    if (activeTableId === 'coloursTable') { data = coloursData; }
    else if (activeTableId === 'typesTable') { data = typesData; }
    else if (activeTableId === 'citiesTable') { data = citiesData; }
    else if (activeTableId === 'partsTable') { data = partsData; }
    else { return; }

    const filteredData = data.filter(item => (item.name || item.type).toLowerCase().includes(searchTerm));
    populateTable(activeTableId, filteredData);
}


// Function to show a table and deactivate the other tab
function showTable(tableId) {
    const tabs = document.getElementById('tabs').getElementsByTagName('button');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }

    const allTables = document.getElementsByClassName('table');
    for (const table of allTables) {
        table.classList.remove('active');
    }

    document.getElementById(tableId).classList.add('active');
}

// Function to handle editing an item and redirect to the appropriate edit page
function editItem(row, tableId) {
    const rowIndex = row.rowIndex - 1;
    let editPage, rowType, data;
    if (tableId === 'coloursTable') { editPage = 'coloursEdit.html'; rowType = 'colour'; data = coloursData; }
    else if (tableId === 'typesTable') { editPage = 'typesEdit.html'; rowType = 'type'; data = typesData; }
    else if (tableId === 'citiesTable') { editPage = 'citiesEdit.html'; rowType = 'city'; data = citiesData; }
    else if (tableId === 'partsTable') { editPage = 'partsEdit.html'; rowType = 'part'; data = partsData; }
    else { return; }

    const rowData = data[rowIndex];
    const jsonData = JSON.stringify(rowData);
    const paramName = `${rowType}Name`;
    const typeName = rowData.name || rowData.type;
    window.location.href = `${editPage}?data=${encodeURIComponent(jsonData)}&${paramName}=${encodeURIComponent(typeName)}`;
}

// Helper function to get data from a selected table
function getTableData(tableId) {
    let data;
    if (tableId === 'coloursTable') { data = coloursData; }
    else if (tableId === 'typesTable') { data = typesData; }
    else if (tableId === 'citiesTable') { data = citiesData; }
    else if (tableId === 'partsTable') { data = partsData; }
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

// Function to update the "Create" button text and link
function updateCreateButton(buttonText, link) {
    const createButton = document.getElementById('createButton');
    createButton.textContent = buttonText;
    createButton.onclick = function () {
        window.location.href = link + '.html';
    };
}


// Initial setup for the page
window.onload = function () {
    updateTableWithEditButtons();  // Add edit buttons to tables
    populateTable('coloursTable', coloursData); // Populate initial table
    populateTable('typesTable', typesData);
    populateTable('citiesTable', citiesData);
    populateTable('partsTable', partsData);
    showTable('coloursTable'); // Show the colours table by default
    updateCreateButton('Add Colour', 'coloursCreate'); // Set default create button

    // Set up search filter
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterTable);
};

// Call the function to add Edit buttons when the page loads
updateTableWithEditButtons();

// Initial population of the colours and types tables
populateTable('coloursTable', coloursData);
populateTable('typesTable', typesData);
populateTable('citiesTable', citiesData);
populateTable('partsTable', partsData);


// Activate the "colours" tab by default
showTable('coloursTable');

// Add an event listener to the search input for real-time filtering
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterTable);

// Call the function to add Edit buttons when the page loads
updateTableWithEditButtons();

function makeButtonCreateColourByDefault() {
    const createButton = document.getElementById('createButton');
    createButton.onclick = function() {
        window.location.href = 'coloursCreate.html';
    }
}

// Function to update the "Create" button text and link
function updateCreateButton(buttonText, link) {
    const createButton = document.getElementById('createButton');
    createButton.textContent = buttonText;
    createButton.onclick = function () {
        window.location.href = link + '.html';
    };
}
