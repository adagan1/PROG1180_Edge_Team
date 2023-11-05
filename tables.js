<!DOCTYPE html>
<html>
<head>
    <title>Maintenance</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<style>
    table {
        text-align: center;
    }
</style>
<body>
    <header id="header">
        <h1><a href="main.html" id="logo-link">Emma's Small Engines</a></h1>
        <nav>
            <ul>
                <li><a href="main.html">Home</a></li>
                <li><a href="inventory.html">Equipment</a></li>
                <li><a href="customer.html">Customer</a></li>
                <li><a href="tables.html">Maintenance</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h1>Maintenance</h1>
        <div class="center-container">
            <input type="text" id="searchInput" placeholder="Search for colours, types, or cities..." oninput="filterTable()">
        </div>
        
        <div id="tabs">
            <button id="colorsTab" class="active" onclick="showTable('coloursTable'); updateCreateButton('Add Colour', 'coloursCreate')">Colours</button>
            <button id="typesTab" onclick="showTable('typesTable'); updateCreateButton('Add Type', 'typesCreate')">Types</button>
            <button id="citiesTab" onclick="showTable('citiesTable'); updateCreateButton('Add City', 'citiesCreate')">Cities</button>
        </div>

        <div id="createButtonContainer">
            <button onload="makeButtonCreateColourByDefault()" id="createButton">Add Colour</button>
        </div>

        <table id="coloursTable" class="table" border="1">
            <col span="1" >
            <thead>
                <tr>
                    <th>Colour</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                <!-- Generated equipment will be added here -->
            </tbody>
        </table>

        <table id="typesTable" class="table" border="1">
            <col span="1" >
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                <!-- Type table data will be populated using JavaScript -->
            </tbody>
        </table>

        <table id="citiesTable" class="table" border="1">
            <col span="1" >
            <thead>
                <tr>
                    <th>City</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                <!-- City table data will be populated using JavaScript -->
            </tbody>
        </table>
    </main>
    <script src="tables.js"></script>
</body>
</html>
