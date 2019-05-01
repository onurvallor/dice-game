
  var diceArray = ["one","two","three","four","five","six"];


  var diceNumberOne = Math.floor(Math.random() * 6);
  var selectArrayOne = diceArray[diceNumberOne];
  var diceFileOne = "fas fa-dice-" + selectArrayOne + " fa-7x";

  var diceNumberTwo = Math.floor(Math.random() * 6);
  var selectArrayTwo = diceArray[diceNumberTwo];
  var diceFileTwo = "fas fa-dice-" + selectArrayTwo + " fa-7x";



  document.querySelector('#player1').setAttribute("class", diceFileOne);
  document.querySelector('#player2').setAttribute("class", diceFileTwo);


  if (diceNumberOne > diceNumberTwo){
    document.querySelector('h2 span').innerHTML = "player one!";
    document.querySelector('#player1').style.color = "#76a21e";
    document.querySelector('#player2').style.color = "";
  } else if (diceNumberOne < diceNumberTwo){
    document.querySelector('h2 span').innerHTML = "player two!";
    document.querySelector('#player2').style.color = "#76a21e";
    document.querySelector('#player1').style.color = "";
  } else {
    document.querySelector('h2').innerHTML = "It's a draw...";
  }
