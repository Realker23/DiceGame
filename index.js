var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomDiceSource1 = "images/dice" + randomNumber1 + ".png"
var randomDiceSource2 = "images/dice" + randomNumber2 + ".png"

document.getElementsByClassName("img1")[0].setAttribute("src",randomDiceSource1)

document.getElementsByClassName("img2")[0].setAttribute("src",randomDiceSource2)

if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins";
}
else{
  document.querySelector("h1").textContent = "Draw";
}
