var selectedRow = null;
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    
    var formData = {};
    formData["userName"] = document.getElementById("userName").value;
    formData["itemId"] = document.getElementById("itemId").value;
    formData["itemName"] = document.getElementById("itemName").value;
    formData["itemDesc"] = document.getElementById("itemDesc").value;
    formData["itemQunt"] = document.getElementById("itemQunt").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.itemId;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.itemName;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.itemDesc;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.itemQunt;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this,a=1)">Edit</a> <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("userName").value = "";
    document.getElementById("itemName").value = "";
    document.getElementById("itemId").value = "";
    document.getElementById("itemDesc").value = "";
    document.getElementById("itemQunt").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    // document.getElementById("sub").value = "Update";
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("itemId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("itemName").value = selectedRow.cells[2].innerHTML;
    document.getElementById("itemDesc").value = selectedRow.cells[3].innerHTML;
    document.getElementById("itemQunt").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.itemId;
    selectedRow.cells[2].innerHTML = formData.itemName;
    selectedRow.cells[3].innerHTML = formData.itemDesc;
    selectedRow.cells[4].innerHTML = formData.itemQunt;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("userName").value == "") {
        isValid = false;
        document.getElementById("userNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("userNameValidationError").classList.contains("hide"))
            document.getElementById("userNameValidationError").classList.add("hide");
    }
    return isValid;
}
