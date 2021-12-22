const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn');
const color= document.querySelector(".color");

btn.addEventListener("click" , function(){
  const randomNumber=getRandomNumber(); // I want to get a random number btw 0 and 3
  document.body.style.backgroundColor=colors[randomNumber];
  color.textContent=colors[randomNumbers];

});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}