// Implementations of functions
function createTable() {
	var body = document.getElementById('myTableBody');
	var table = document.createElement('table');
	table.setAttribute("id","myTable");
	var tableBody = document.createElement('tbody');
  	table.setAttribute('border', '1');
	for (var i=0;i<3;i++) {
		var tr = document.createElement('tr');
		for (var j=0;j<3;j++){
        	var td = document.createElement('td');
        	td.setAttribute("id","cell"+i+j);
        	tr.appendChild(td);
        	
		}
		tableBody.appendChild(tr);
	}
	table.appendChild(tableBody);
	body.appendChild(table);
}
// Function calls

var onClickFunction = function()
{
    console.log("Clicked on :"+this.id);
    var cellId = this.id;
    var cellClicked = document.getElementById(cellId);
    cellClicked.innerHTML = "X"
}


function setOnClickMethodToCells() {
	for (var i=0;i<3;i++) {
		for (var j=0;j<3;j++){
        	var cell = document.getElementById("cell"+i+j);
        	cell.onclick = onClickFunction;
		}
		
	}
}

createTable();
setOnClickMethodToCells();




