let playerText = document.querySelector("#player");
let computerText = document.querySelector("#computer");
let results = document.querySelector(".result1");
let btn = document.querySelectorAll("button");
let audio = new Audio("ting.mp3");
let player;
let computer;

btn.forEach(button => {
   button.addEventListener("click",()=>{
    audio.play()
    player = button.textContent;
    // console.log(player);
    computerTurn()
    playerText.value = ` ${player}`
    computerText.value = `${computer}`
    results.textContent = `${checkWinner()}`
   })
    
});
function computerTurn(){
    let randomNo = Math.floor(Math.random() *3 + 1)
    switch(randomNo){
        case 1:
            computer = 'Rock'
            break;
        case 2:
            computer = 'Paper'
            break;
        case 3:
            computer = 'Scissor'
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!"
    }
    else if(computer === "Rock"){
        return (player == "Paper") ? "You Win" : "You Loose"
    }
    else if(computer === "Paper"){
        return (player == "Scissor") ? "You Win" : "You Loose"
    }
    else if(computer === "Scissor"){
        return (player == "Rock") ? "You Win" : "You Loose"
    }
}


