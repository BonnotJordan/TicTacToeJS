var lastPlayer = 1;
var numberOfWinsPlayer1 =0;
var numberOfWinsPlayer2 =0;
var numberOfDraw =0;
var winner;
var textPlayerTurn = document.getElementById("playerTurn");
var numberOfCellsFilled = 0;
window.onload = function() {
	console.log("Page Loaded");
	textPlayerTurn.innerHTML = "";
	textPlayerTurn.innerHTML += "Au tour du joueur "+lastPlayer;
}


// Implementations of functions
function createGameTable() {
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
        	td.className = "gameCell";
        	tr.appendChild(td);
        	
		}
		tableBody.appendChild(tr);
	}
	table.appendChild(tableBody);
	body.appendChild(table);
}

function createScoreTable() {
	var body = document.getElementById('scores');
	var table = document.createElement('table');
	table.setAttribute("id","myTableScore");
	var tableBody = document.createElement('tbody');
  	table.setAttribute('border', '1');
	for (var i=0;i<2;i++) {
		var tr = document.createElement('tr');
		for (var j=0;j<3;j++){
        	var td = document.createElement('td');
        	td.setAttribute("id","score"+i+j);
        	td.className = "scoreCell";
        	tr.appendChild(td);
        	
		}
		tableBody.appendChild(tr);
	}
	table.appendChild(tableBody);
	body.appendChild(table);
}

function fillNameInScoreTable() {
	document.getElementById("score00").innerHTML = "Joueur 1";
	document.getElementById("score01").innerHTML = "Joueur 2";
	document.getElementById("score02").innerHTML = "Nul";
	document.getElementById("score10").innerHTML = "0";
	document.getElementById("score11").innerHTML = "0";
	document.getElementById("score12").innerHTML = "0";
}

function checkIfTableIsFilled () {
	if (numberOfCellsFilled == 9) {
		numberOfDraw += 1;
		showAlertDraw();
	}
}

function updateScoreTable() {
	document.getElementById("score10").innerHTML = "";
	document.getElementById("score11").innerHTML = "";
	document.getElementById("score12").innerHTML = "";
	document.getElementById("score10").innerHTML = numberOfWinsPlayer1;
	document.getElementById("score11").innerHTML = numberOfWinsPlayer2;
	document.getElementById("score12").innerHTML = numberOfDraw;
}

function checkIfWinner() {
	console.log("check");
	// première ligne
	if(document.getElementById("cell00").innerHTML==document.getElementById("cell01").innerHTML && document.getElementById("cell00").innerHTML==document.getElementById("cell02").innerHTML){
		if(document.getElementById("cell00").innerHTML == "X"){
			console.log("Player 1 win 1 line");
			showAlert(1);
			numberOfWinsPlayer1 += 1;
		} else if (document.getElementById("cell00").innerHTML == "O") {
			console.log("Player 2 win 1 line");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	
	} 
	// deuxième ligne
	else if(document.getElementById("cell10").innerHTML==document.getElementById("cell11").innerHTML && document.getElementById("cell10").innerHTML==document.getElementById("cell12").innerHTML){
		if(document.getElementById("cell10").innerHTML == "X"){
			console.log("Player 1 win 2 line");
			showAlert(1);
			numberOfWinsPlayer1 += 1;
		} else if(document.getElementById("cell10").innerHTML == "O"){
			console.log("Player 2 win 2 line");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	
	} 
	// troisième ligne
	else if(document.getElementById("cell20").innerHTML==document.getElementById("cell21").innerHTML && document.getElementById("cell20").innerHTML==document.getElementById("cell22").innerHTML){
		if(document.getElementById("cell20").innerHTML == "X"){
			console.log("Player 1 win 3 line");
			numberOfWinsPlayer1 += 1;
			showAlert(1);
		} else if (document.getElementById("cell20").innerHTML == "O") {
			console.log("Player 2 win 3 line");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	
	} 
	// première colonne
	else if(document.getElementById("cell00").innerHTML==document.getElementById("cell10").innerHTML && document.getElementById("cell00").innerHTML==document.getElementById("cell20").innerHTML){
		if(document.getElementById("cell00").innerHTML == "X"){
			console.log("Player 1 win 1 col");
			numberOfWinsPlayer1 += 1;
			showAlert(1);
		} else if (document.getElementById("cell00").innerHTML == "O") {
			console.log("Player 2 win 1 col");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	
	} 
	// deuxième colonne
	else if(document.getElementById("cell01").innerHTML==document.getElementById("cell11").innerHTML && document.getElementById("cell01").innerHTML==document.getElementById("cell21").innerHTML){
		if(document.getElementById("cell01").innerHTML == "X"){
			console.log("Player 1 win 2 col");
			numberOfWinsPlayer1 += 1;
			showAlert(1);
		} else if (document.getElementById("cell01").innerHTML == "O"){
			console.log("Player 2 win 2 col");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	
	}
	// troisième colonne 
	else if(document.getElementById("cell02").innerHTML==document.getElementById("cell12").innerHTML && document.getElementById("cell02").innerHTML==document.getElementById("cell22").innerHTML){
		if(document.getElementById("cell02").innerHTML == "X"){
			console.log("Player 1 win 3 col");
			numberOfWinsPlayer1 += 1;
			showAlert(1);
		} else if (document.getElementById("cell02").innerHTML == "O"){
			console.log("Player 2 win 3 col");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	
	} 
	// diagonale \
	else if(document.getElementById("cell00").innerHTML==document.getElementById("cell11").innerHTML && document.getElementById("cell00").innerHTML==document.getElementById("cell22").innerHTML){
		if(document.getElementById("cell00").innerHTML == "X"){
			console.log("Player 1 win 1 diag");
			numberOfWinsPlayer1 += 1;
			showAlert(1);
		} else if (document.getElementById("cell00").innerHTML == "O"){
			console.log("Player 2 win 1 diag");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	} 
	//diagonale /
	else if(document.getElementById("cell02").innerHTML==document.getElementById("cell11").innerHTML && document.getElementById("cell02").innerHTML==document.getElementById("cell20").innerHTML){
		if(document.getElementById("cell02").innerHTML == "X"){
			console.log("Player 1 win 2 diag");
			numberOfWinsPlayer1 += 1;
			showAlert(1);
		} else if (document.getElementById("cell02").innerHTML == "O"){
			console.log("Player 2 win 2 diag");
			numberOfWinsPlayer2 += 1;
			showAlert(2);
		}
	}
	checkIfTableIsFilled();
	updateScoreTable();
}

function razFunction() {
	console.log("RAZ clicked");
	lastPlayer = 1;
	numberOfCellsFilled = 0;
	
	updateScoreTable();
	textPlayerTurn.innerHTML = "";
	textPlayerTurn.innerHTML += "Au tour du joueur "+lastPlayer;
	for(var i=0;i<3;i++){
		for(var j=0;j<3;j++){
			document.getElementById("cell"+i+j).innerHTML = "";
		}
	}
}

document.getElementById("raz").addEventListener("click",function() {
	numberOfDraw = 0;
	numberOfWinsPlayer2 =0;
	numberOfWinsPlayer1 =0;
	razFunction();
})

function showAlert(winner){
	alert("Le gagnant est le joueur "+winner);
	razFunction();
}

function showAlertDraw() {
	alert("Personne n'a gagné cette partie, voulez-vous faire une autre partie ?");
	razFunction();
}
var onClickFunction = function()
{
	var cellId = this.id;
    var cellClicked = document.getElementById(cellId);
    if(cellClicked.innerHTML == "X" || cellClicked.innerHTML =="O"){
    	console.log("Impossible sur la case "+cellClicked);
    } else {
    	if (lastPlayer == 1){
    		cellClicked.innerHTML = "X"
			lastPlayer =2;
		}
		else if (lastPlayer == 2){
			cellClicked.innerHTML = "O"
			lastPlayer =1;
		}
    }
    numberOfCellsFilled += 1;
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



// Function calls
createGameTable();
setOnClickMethodToCells();
createScoreTable();
fillNameInScoreTable();






