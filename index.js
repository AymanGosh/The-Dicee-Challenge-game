
var randomNymber1= Math.floor(Math.random()*6)+1 ; // 1-6
var randomNymber2= Math.floor(Math.random()*6)+1 ;


var randomDiceImage="dice"+randomNymber1+".png";
var randomDiceImageSource="images/"+randomDiceImage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImageSource);


var randomDiceImage2="dice"+randomNymber2+".png";
var randomDiceImageSource2="images/"+randomDiceImage2;

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImageSource2);


if(randomNymber1>randomNymber2){
  document.querySelector("h1").innerHTML="player 1 wins!";
}else{
  if(randomNymber1<randomNymber2){
  document.querySelector("h1").innerHTML="player 2 wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
  }
}
