var rNumber1 = Math.floor((Math.random() * 6) + 1);
var rNumber2 = Math.floor((Math.random() * 6) + 1);

// NOTE: Dice 1 Conditionals
if(rNumber1 == 1) {
  document.setAttribute("img","images/dice1.png");
}
else if(rNumber1 == 2){
  document.querySelector("img").setAttribute("src","images/dice2.png");
}
else if(rNumber1 == 3){
  document.querySelector("img").setAttribute("src","images/dice3.png");
}
else if(rNumber1 == 4){
  document.querySelector("img").setAttribute("src","images/dice4.png");
}
else if(rNumber1 == 5){
  document.querySelector("img").setAttribute("src","images/dice5.png");
}
else if(rNumber1 == 6){
  document.querySelector("img").setAttribute("src","images/dice6.png");
}

// NOTE: Dice 2 Conditionals
if(rNumber2 == 1) {
  document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
}
else if(rNumber2 == 2){
  document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
}
else if(rNumber2 == 3){
  document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
}
else if(rNumber2 == 4){
  document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
}
else if(rNumber2 == 5){
  document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
}
else if(rNumber2 == 6){
  document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
}

if(rNumber1 > rNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if(rNumber1 < rNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Oh Man! It's a draw";
}
