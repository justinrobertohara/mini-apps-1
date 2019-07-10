// X or O turn
var bool = true;
//matrix of the board
var boardArray = [[null, null, null], [null, null, null], [null, null, null]];
//object to correspond with the matrix
var pieceLocation = {
  top: 0,
  center: 1,
  bottom: 2,
  Left: 0,
  Center: 1,
  Right: 2
};

//function to check if there are any winning combos
function winning() {
  //rows for x's and o's
  if (
    boardArray[0][0] === 'X' &&
    boardArray[0][1] === 'X' &&
    boardArray[0][2] === 'X'
  ) {
    alert('X Wins');
  } else if (
    boardArray[1][0] === 'X' &&
    boardArray[1][1] === 'X' &&
    boardArray[1][2] === 'X'
  ) {
    alert('X wins');
  } else if (
    boardArray[2][0] === 'X' &&
    boardArray[2][1] === 'X' &&
    boardArray[2][2] === 'X'
  ) {
    alert('X wins');
  } else if (
    boardArray[0][0] === 'O' &&
    boardArray[0][1] === 'O' &&
    boardArray[0][2] === 'O'
  ) {
    alert('O Wins');
  } else if (
    boardArray[1][0] === 'O' &&
    boardArray[1][1] === 'O' &&
    boardArray[1][2] === 'O'
  ) {
    alert('O wins');
  } else if (
    boardArray[2][0] === 'O' &&
    boardArray[2][1] === 'O' &&
    boardArray[2][2] === 'O'
  ) {
    alert('O wins');
  } else if (
    boardArray[0][0] === 'X' &&
    boardArray[1][0] === 'X' &&
    boardArray[2][0] === 'X'
  ) {
    alert('X Wins');
  } else if (
    boardArray[0][1] === 'X' &&
    boardArray[1][1] === 'X' &&
    boardArray[2][1] === 'X'
  ) {
    alert('X wins');
  } else if (
    boardArray[0][2] === 'X' &&
    boardArray[1][2] === 'X' &&
    boardArray[2][2] === 'X'
  ) {
    alert('X wins');
  } else if (
    boardArray[0][0] === 'O' &&
    boardArray[1][0] === 'O' &&
    boardArray[2][0] === 'O'
  ) {
    alert('O Wins');
  } else if (
    boardArray[0][1] === '0' &&
    boardArray[1][1] === 'O' &&
    boardArray[2][1] === 'O'
  ) {
    alert('O wins');
  } else if (
    boardArray[0][2] === 'O' &&
    boardArray[1][2] === 'O' &&
    boardArray[2][2] === 'O'
  ) {
    alert('O wins');
  }
  //diaganols for x's and o's
  else if (
    boardArray[0][0] === 'X' &&
    boardArray[1][1] === 'X' &&
    boardArray[2][2] === 'X'
  ) {
    alert('X wins');
  } else if (
    boardArray[0][2] === 'X' &&
    boardArray[1][1] === 'X' &&
    boardArray[2][0] === 'X'
  ) {
    alert('X wins');
  } else if (
    boardArray[0][0] === 'O' &&
    boardArray[1][1] === 'O' &&
    boardArray[2][2] === 'O'
  ) {
    alert('O wins');
  } else if (
    boardArray[0][2] === 'O' &&
    boardArray[1][1] === 'O' &&
    boardArray[2][0] === 'O'
  ) {
    alert('O wins');
  }
}

function displayX(id) {
  //conditional statement to check if it's x or o's turn and that it is null
  if (bool === true && document.getElementById(id).innerHTML === '') {
    //input an X into the html
    document.getElementById(id).innerHTML = 'X';
    //flip the switch to O
    bool = false;

    //variable declaration for corresponding matrix
    var splitId = id.split('_');
    var first = pieceLocation[splitId[0]];
    var second = pieceLocation[splitId[1]];
    boardArray[first][second] = 'X';
    //running the winning function to check if there are any winning combos
    winning();
  } else if (bool === false && document.getElementById(id).innerHTML === '') {
    document.getElementById(id).innerHTML = 'O';
    bool = true;

    var splitId = id.split('_');
    var first = pieceLocation[splitId[0]];
    var second = pieceLocation[splitId[1]];
    boardArray[first][second] = 'O';
    winning();
  }
}

function clearBoard() {
  //variable declaration to get all 'cell' TD
  var textBoxes = document.getElementsByTagName('td');

  //clear the matrix to all null
  for (let i = 0; i < boardArray.length; i++) {
    for (let j = 0; j < boardArray[i].length; j++) {
      boardArray[i][j] = null;
    }
  }
  //clear all innerHTML's
  for (let x = 0; x < textBoxes.length; x++) {
    textBoxes[x].innerHTML = '';
  }
  //reset the first move to X
  bool = true;
}
