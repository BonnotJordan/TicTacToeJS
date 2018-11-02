var lastPlayer = 1;
var numberOfWinsPlayer1 =0;
var numberOfWinsPlayer2 =0;
var winner;
window.onload = function() {
	console.log("Page Loaded");
	var textPlayerTurn = document.getElementById("playerTurn");
	textPlayerTurn.innerHTML = "";
	textPlayerTurn.innerHTML += "Au tour du joueur "+lastPlayer;
}


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

function checkIfWinner() {
	console.log("check");
	
}

var onClickFunction = function()
{
	var cellId = this.id;
    var cellClicked = document.getElementById(cellId);
    var cellClickedValue = document.getElementById(cellId).value;
    if(cellClickedValue === "X" || cellClickedValue ==="O"){
    	console.log("Impossible");
    }
    if (lastPlayer == 1){
    	cellClicked.innerHTML = "X"
		lastPlayer =2;
	}
	else if (lastPlayer == 2){
		cellClicked.innerHTML = "O"
		lastPlayer =1;
	}
	
	var textPlayerTurn = document.getElementById("playerTurn");
	textPlayerTurn.innerHTML = "";
	textPlayerTurn.innerHTML += "Au tour du joueur "+lastPlayer;
	
	
    console.log("Clicked on :"+this.id);
    checkIfWinner();
}

function setOnClickMethodToCells() {
	for (var i=0;i<3;i++) {
		for (var j=0;j<3;j++){
        	var cell = document.getElementById("cell"+i+j);
        	cell.onclick = onClickFunction;
		}
	}
}

document.getElementById("raz").addEventListener("click",function(){
	console.log("RAZ clicked");
	lastPlayer = 1;
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			document.getElementById("cell"+i+j).innerHTML = "";
		}
	}
});


// Function calls
createTable();
setOnClickMethodToCells();






