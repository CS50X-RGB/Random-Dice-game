var randomNumber1 = Math.floor(Math.random()*6 + 1);
var site1 = document.querySelector(".img1");

if(randomNumber1 === 1){
    site1.setAttribute("src","images/dice1.png");
}else if(randomNumber1 === 2){
    site1.setAttribute("src","images/dice2.png");
}else if(randomNumber1 === 3){
    site1.setAttribute("src","images/dice3.png");
}else if(randomNumber1 === 4){
    site1.setAttribute("src","images/dice4.png"); 
}else if(randomNumber1 == 5){
    site1.setAttribute("src","images/dice5.png");
}else{
    site1.setAttribute("src","images/dice6.png");
}
var site2 = document.querySelector(".img2");
var randomNumber2 = Math.floor(Math.random()*6 + 1);
if(randomNumber2 === 1){
    site2.setAttribute("src","images/dice1.png");
}else if(randomNumber2 === 2){
    site2.setAttribute("src","images/dice2.png");
}else if(randomNumber2 === 3){
    site2.setAttribute("src","images/dice3.png");
}else if(randomNumber2 === 4){
    site2.setAttribute("src","images/dice4.png"); 
}else if(randomNumber2 == 5){
    site2.setAttribute("src","images/dice5.png");
}else{
    site2.setAttribute("src","images/dice6.png");
}
var winner = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    winner.textContent = "Player 1 Wins....";
}else if(randomNumber1 < randomNumber2){
    winner.textContent = "Player 2 Wins....";
}else{
    winner.textContent = "Tied...Refresh Again..";
}          