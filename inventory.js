var selectedRow = null;

function onFormSubmit(event) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["equipment"] = document.getElementById("equipment").value;
    formData["name"] = document.getElementById("name").value;
    formData["description"] = document.getElementById("description").value;
    formData["price"] = document.getElementById("price").value;
    formData["status"] = document.getElementById("status").value;
    formData["amount"] = document.getElementById("amount").value;
    formData["colour"] = document.getElementById("colour").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.equipment;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.description;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.price;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.status;
    cell6 = newRow.insertCell(5);
        cell6.innerHTML = data.amount;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = data.colour;
    cell8 = newRow.insertCell(7);
        cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("equipment").value = selectedRow.cells[0].innerHTML;
    document.getElementById("name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("description").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
    document.getElementById("status").value = selectedRow.cells[4].innerHTML;
    document.getElementById("amount").value = selectedRow.cells[5].innerHTML;
    document.getElementById("colour").value = selectedRow.cells[6].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.equipment;
    selectedRow.cells[1].innerHTML = formData.name;
    selectedRow.cells[2].innerHTML = formData.description;
    selectedRow.cells[3].innerHTML = formData.price;
    selectedRow.cells[4].innerHTML = formData.status;
    selectedRow.cells[5].innerHTML = formData.amount;
    selectedRow.cells[6].innerHTML = formData.colour;
}

//Reset the data
function resetForm() {
    document.getElementById("equipment").value = '';
    document.getElementById("name").value = '';
    document.getElementById("description").value = '';
    document.getElementById("price").value = '';
    document.getElementById("status").value = '';
    document.getElementById("amount").value = '';
    document.getElementById("colour").value = '';
    selectedRow = null;
}


// //Function to filter equipment based on the search input
// function filterEquipment() {
//     const input = document.getElementById("searchInput");
//     const filter = input.value.toLowerCase();
//     const table = document.getElementById("equipmentTable");
//     const tbody = table.getElementsByTagName("tbody")[0];
//     const rows = tbody.getElementsByTagName("tr");

//     for (let i = 0; i < rows.length; i++) {
//         const row = rows[i];
//         const columns = row.getElementsByTagName("td");
//         let found = false;

//         for (let j = 0; j < columns.length; j++) {
//             const cell = columns[j];
//             if (cell) {
//                 const text = cell.textContent.toLowerCase();
//                 if (text.includes(filter)) {
//                     found = true;
//                     break;
//                 }
//             }
//         }
//         if (found) {
//             row.style.display = "";
//         } else {
//             row.style.display = "none";
//         }
//     }
// }
