function createTable() {
	var body = document.getElementById('myTableBody');
	var table = document.createElement('table');
	var tableBody = document.createElement('tbody');
	//table.style.width = '100%';
  table.setAttribute('border', '1');
	for (var i=0;i<3;i++) {
		var tr = document.createElement('tr');
		for (var j=0;j<3;j++){
        	var td = document.createElement('td');
        	tr.appendChild(td);
		}
		tableBody.appendChild(tr);
	}
	table.appendChild(tableBody);
	body.appendChild(table);


}

createTable();