document.querySelector("button").addEventListener("click", handleClick);
function handleClick(){
var random1 = Math.floor(Math.random()*6)+1;
var randomimg1 = "images/dice"+random1+".png";
var random2 = Math.floor(Math.random()*6)+1;
var randomimg2 = "images/dice"+random2+".png";
document.querySelector(".img1").setAttribute("src",randomimg1);
document.querySelector(".img2").setAttribute("src",randomimg2);
if (random1 > random2){
document.querySelector("h1").innerHTML="🚩Player 1 Win";
}
if(random1<random2)
    {
    document.querySelector("h1").innerHTML="Player 2 Win🚩";
}
if (random1 === random2){
    document.querySelector("h1").innerHTML="🚩It's a Bore Draw!🚩";
}
}
