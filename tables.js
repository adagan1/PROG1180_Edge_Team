// Hardcoded data for the tables
const coloursData = [
    { name: 'Red' }, { name: 'Green' }, { name: 'Blue' }, 
    { name: 'Yellow' }, { name: 'Purple' }, { name: 'Pink' },
    { name: 'Orange' }, { name: 'White' }, { name: 'Brown' },
    { name: 'Grey' }, { name: 'Black' }
];

const citiesData = [
    { name: 'Niagara Falls' }, { name: 'Toronto' }, 
    { name: 'Ottawa' }, { name: 'Calgary' }, { name: 'Winnipeg' }
];

const typesData = [
    { type: 'Electric lawnmower' }, { type: 'Gas powered lawnmower' }, 
    { type: 'Bagged lawnmower' }, { type: 'Push Mower' }, { type: 'Scythe' }
];

const partsData = [
    { name: 'Bolt' }, { name: 'Screw' }, { name: 'Washer' }, 
    { name: 'Nut' }, { name: 'Spring' }
];

// Add stock information to each part (example stock data)
partsData.forEach(part => part.stock = Math.floor(Math.random() * 100));

function populateTable(tableId, data) {
    const table = document.getElementById(tableId);
    const tableBody = table.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    data.forEach(item => {
        const row = tableBody.insertRow();
        const cell = row.insertCell();
        cell.textContent = item.name || item.type;

        // Add a Stock column for parts
        if (tableId === 'partsTable') {
            const stockCell = row.insertCell();
            stockCell.textContent = item.stock;
        }

        // Add a Controls column for editing and ordering more
        const controlsCell = row.insertCell();
        
        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function () {
            editItem(row, tableId);
        };
        controlsCell.appendChild(editButton);

        // Create Order More button (only for parts and types tables)
        if (tableId === 'partsTable' || tableId === 'typesTable') {
            const orderMoreButton = document.createElement('button');
            orderMoreButton.textContent = 'Order More';
            orderMoreButton.onclick = function () {
                orderMorePartsOrTypes(item);
            };
            controlsCell.appendChild(orderMoreButton);
        }
    });
}

function filterTable() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const activeTableId = Array.from(document.getElementsByClassName('table active')).map(table => table.id)[0];

    let data;
    if (activeTableId === 'coloursTable') { data = coloursData; }
    else if (activeTableId === 'typesTable') { data = typesData; }
    else if (activeTableId === 'citiesTable') { data = citiesData; }
    else if (activeTableId === 'partsTable') { data = partsData; }

    const filteredData = data.filter(item => (item.name || item.type).toLowerCase().includes(searchTerm));
    populateTable(activeTableId, filteredData);
}

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

function editItem(row, tableId) {
    const rowIndex = row.rowIndex - 1;
    let editPage, rowType, data;
    if (tableId === 'coloursTable') { editPage = 'coloursEdit.html'; rowType = 'colour'; data = coloursData; }
    else if (tableId === 'typesTable') { editPage = 'typesEdit.html'; rowType = 'type'; data = typesData; }
    else if (tableId === 'citiesTable') { editPage = 'citiesEdit.html'; rowType = 'city'; data = citiesData; }
    else if (tableId === 'partsTable') { editPage = 'partsEdit.html'; rowType = 'part'; data = partsData; }

    const rowData = data[rowIndex];
    const jsonData = JSON.stringify(rowData);
    const paramName = `${rowType}Name`;
    const typeName = rowData.name || rowData.type;
    window.location.href = `${editPage}?data=${encodeURIComponent(jsonData)}&${paramName}=${encodeURIComponent(typeName)}`;
}

function updateCreateButton(buttonText, link) {
    const createButton = document.getElementById('createButton');
    createButton.textContent = buttonText;
    createButton.onclick = function () {
        window.location.href = link + '.html';
    };
}

window.onload = function () {
    populateTable('coloursTable', coloursData);
    populateTable('typesTable', typesData);
    populateTable('citiesTable', citiesData);
    populateTable('partsTable', partsData);
    showTable('coloursTable');
    updateCreateButton('Add Colour', 'coloursCreate');

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterTable);
};

// Function for handling the order more action
function orderMoreParts(row, part) {
    // Redirect to the reportsCreate.html page
    window.location.href = 'reportsCreate.html';
}

// Function for handling the order more action for parts or types
function orderMorePartsOrTypes(row, item) {
    // Redirect to the reportsCreate.html page
    window.location.href = 'reportsCreate.html';
}
