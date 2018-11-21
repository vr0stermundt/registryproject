function enterInfo() {
	var table = document.getElementById("info");
	var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	var input1 = document.getElementById('name');
	var input2 = document.getElementById('age');
	var input3 = document.getElementById('gender');
	var input4 = document.getElementById('color');
	var input5 = document.getElementById('animal');
    cell1.innerHTML = input1.value;
	cell2.innerHTML = input2.value;
	cell3.innerHTML = input3.value;
	cell4.innerHTML = input4.value;
	cell5.innerHTML = input5.value;
	
	if ( input1.value === "" && input2.value === "" && input3.value === "" && input4.value === "" && input5.value === "") {	
		var row1 = table.deleteRow(1);
		document.getElementById("delete").disabled = true;
	} 
	
	input1.value = "";
	input2.value = "";
	input3.value = "";
	input4.value = "";
	input5.value = "";
	document.getElementById("delete").disabled = false;
}

function deleteInfo() { 
	var x = document.getElementById("info").rows.length;
	var table = document.getElementById("info");
	if (x <= 2) {
		document.getElementById("delete").disabled = true;
	} else {
		document.getElementById("delete").disabled = false;
		table.deleteRow(1);
	}
}