var bool = true;

function displayX(ID) {
  // var square = document.getElementById(thisID);
  // console.log(square);
  // square.innerHTML = 'X';

  if (bool === true) {
    document.getElementById(ID).innerHTML = 'X';
    bool = false;
  } else if (bool === false) {
    document.getElementById(ID).innerHTML = 'O';
    bool = true;
  }
}
