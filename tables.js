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
        data = coloursData;
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

// Function to handle editing an item and redirect to the appropriate edit page
function editItem(row, tableId) {
    const rowIndex = row.rowIndex - 1; // Subtract 1 to account for the header row

    // Determine the edit page URL based on the active tab
    let editPage;
    let rowType; // Define a variable to store the row type
    if (tableId === 'coloursTable') {
        editPage = 'coloursEdit.html';
        rowType = 'colour'; // Set the row type for colours
    } else if (tableId === 'typesTable') {
        editPage = 'typesEdit.html';
        rowType = 'types'; // Set the row type for types
    } else if (tableId === 'citiesTable') {
        editPage = 'citiesEdit.html';
        rowType = 'cities'; // Set the row type for cities
    } else {
        return;
    }

    // Get the data for the selected row
    const rowData = getTableData(tableId)[rowIndex];

    // Encode the data as a JSON string
    const jsonData = JSON.stringify(rowData);

    // Pass the corresponding type name as a query parameter
    const paramName = rowType === 'cities' ? 'citiesName' : (rowType === 'types' ? 'typesName' : 'colourName');
    const typeName = rowData.name || rowData.type;
    
    // Redirect to the appropriate edit page with the JSON data and type name as query parameters
    window.location.href = `${editPage}?data=${encodeURIComponent(jsonData)}&${paramName}=${encodeURIComponent(typeName)}`;
}

// Helper function to get data from a selected table
function getTableData(tableId) {
    let data;
    if (tableId === 'coloursTable') {
        data = coloursData;
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

// Initial population of the colours and types tables
populateTable('coloursTable', coloursData);
populateTable('typesTable', typesData);
populateTable('citiesTable', citiesData);

// Activate the "colours" tab by default
showTable('coloursTable');

// Add an event listener to the search input for real-time filtering
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', filterTable);

// Call the function to add Edit buttons when the page loads
updateTableWithEditButtons();

// Initial population of the colours and types tables
populateTable('coloursTable', coloursData);
populateTable('typesTable', typesData);
populateTable('citiesTable', citiesData);

// Activate the "colours" tab by default
showTable('coloursTable');

function makeButtonCreateColourByDefault() {
    const createButton = document.getElementById('createButton');
    createButton.onclick = function() {
        window.location.href = 'coloursCreate.html';
    }
}

// Function to make the add button work upon page load
window.onload = function (buttonText, link) {
    // Get the initially active tab (in this case, "colours")
    const createButton = document.getElementById('createButton');
    createButton.textContent = buttonText;
    createButton.textContent = 'Add Colour'
    createButton.onclick = function () {
        window.location.href = 'coloursCreate.html';
    };
}

// Function to update the "Create" button text and link
function updateCreateButton(buttonText, link) {
    const createButton = document.getElementById('createButton');
    createButton.textContent = buttonText;
    createButton.onclick = function () {
        window.location.href = link + '.html';
    };
}
