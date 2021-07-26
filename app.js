const buttonOne = document.querySelector("#buttonOne");
const buttonTwo = document.querySelector("#buttonTwo");
const scoreOne = document.querySelector("#scoreOne");
const scoreTwo = document.querySelector("#scoreTwo");
const buttonReset = document.querySelector("#reset");
const winScoreSelect = document.querySelector("#playto");

let playerOne = 0;
let playerTwo = 0;
let winningScore=3;
let isGameOver= false;

winScoreSelect.addEventListener("change", function(){
    winningScore =parseInt(this.value);
    reset();
})

buttonOne.addEventListener("click", function(){
    if(!isGameOver){
    playerOne +=1;
    if(playerOne===winningScore){
    isGameOver=true;
    scoreOne.classList.add("winner");
    scoreTwo.classList.add("loser");
    }
    scoreOne.textContent = playerOne;
    }   
})

buttonTwo.addEventListener("click", function(){
    if(!isGameOver){
    playerTwo +=1;
    if(playerTwo===winningScore){
    isGameOver=true;
    scoreTwo.classList.add("winner");
    scoreOne.classList.add("loser");
    }
    scoreTwo.textContent = playerTwo;
    }   
})

buttonReset.addEventListener("click", reset)

function reset(){
    isGameOver=false;
    playerOne=0;
    playerTwo=0;
    scoreOne.textContent = 0;
    scoreTwo.textContent = 0; 
    scoreTwo.classList.remove("winner", "loser");
    scoreOne.classList.remove("winner","loser");
};
