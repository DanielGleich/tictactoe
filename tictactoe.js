function printCell(rowIndex,cellIndex)
{
  document.write("<td id='cell" + rowIndex + cellIndex + "' onClick='cellClick("+ rowIndex+","+cellIndex+")'>"+"</td>");
}

function printTable()
{
  document.write("<table>");
  for (var rowCount = 0; rowCount < 3; rowCount++)
  {
    document.write("<tr>");
    for (var cellCount = 0; cellCount < 3; cellCount++)
    {
      printCell(rowCount,cellCount);
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

function cellClick(rowIndex, cellIndex)
{
  var hinweis = document.getElementById("hinweisbox");
  var cell = document.getElementById("cell"+rowIndex+cellIndex);
  var spieler = getCurrentPlayerNbr();
  
  hinweis.innerHTML="Sie haben die Zelle " + rowIndex+"/"+cellIndex+ " geklickt";
  
  switch(spieler)
	{
		case 0:
		cell.innerHTML = "X";
		break;
		
		case 1:
		cell.innerHTML = "O";
		
		break;
	}
  hasWon(rowIndex,cellIndex);
  selectNextPlayer(spieler);
}

function clearCell(rowIndex,cellIndex)
{
	document.getElementById("cell"+rowIndex+cellIndex).innerHTML = "";
}

function restart()
{
	for(var rowIndex=0;rowIndex<3;rowIndex++)
	{
		for(var cellIndex=0;cellIndex<3;cellIndex++)
		{
			clearCell(rowIndex,cellIndex);
		}
	}
	setPlayer(1);
}

function getCurrentPlayerNbr()
{
	var player = document.getElementById("player").innerHTML;
	if (player == "Spieler 1")
		return 0;
	if (player == "Spieler 2")
		return 1;
}

function selectNextPlayer(spieler)
{
	if (spieler == 0)
	{
		setPlayer(spieler);
	}
	
	else if (spieler == 1)
	{
		setPlayer(spieler);
	}
}
function setPlayer(spieler)
{
		if (spieler == 0)
	{
		document.getElementById("player").innerHTML = "Spieler 2";
	}
	
	else if (spieler == 1)
	{
		document.getElementById("player").innerHTML = "Spieler 1";
	}
}

function hasWon(rowIndex,cellIndex)
{
	isRowFilledWithSameSymbol(rowIndex,cellIndex);
	isColumnFilledWithSameSymbol(rowIndex,cellIndex);
	isDiagonalFilledWithSameSymbol(rowIndex,cellIndex);
	if (isRowFilledWithSameSymbol == 1 || isColumnFilledWithSameSymbol == 1 || isDiagonalFilledWithSameSymbol == 1)
	{
		window.alert("gewonnen!");
	}
}

function getSymbol(rowIndex,cellIndex)
{
	var symbol = document.getElementById("cell"+rowIndex+cellIndex).innerHTML;
	return symbol;
}

function isRowFilledWithSameSymbol(rowIndex,cellIndex)
{
	getSymbol(rowIndex,cellIndex);
	if 		(getSymbol(0,0) == getSymbol(0,1) && getSymbol(0,1) == getSymbol(0,2))
		return 1;
	else if (getSymbol(1,0) == getSymbol(1,1) && getSymbol(1,1) == getSymbol(1,2))
		return 1;
	else if (getSymbol(2,0) == getSymbol(2,1) && getSymbol(2,1) == getSymbol(2,2))
		return 1;
	else
		return 0;
}

function isColumnFilledWithSameSymbol(rowIndex,cellIndex)
{
	getSymbol(rowIndex,cellIndex);
	if 		(getSymbol(0,0) == getSymbol(1,0) && getSymbol(1,0) == getSymbol(2,0))
		return 1;
	else if (getSymbol(0,1) == getSymbol(1,1) && getSymbol(1,1) == getSymbol(2,1))
		return 1;
	else if (getSymbol(0,2) == getSymbol(1,2) && getSymbol(1,2) == getSymbol(2,2))
		return 1;
	else
		return 0;
}

function isDiagonalFilledWithSameSymbol(rowIndex,cellIndex)
{
	getSymbol(rowIndex,cellIndex);
	if 		(getSymbol(0,0) == getSymbol(1,1) && getSymbol(1,1) == getSymbol(2,2))
		return 1;
	else if (getSymbol(0,2) == getSymbol(1,1) && getSymbol(1,1) == getSymbol(2,0))
		return 1;
	else
		return 0;
}