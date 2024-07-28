let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg"); 
let restart = document.querySelector("#restart-btn"); 

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice =() =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log("Game was Draw")
    msg.innerText = "Game was Draw,Play again";
    msg.style.backgroundColor = "#081b31"; 
}

const restartbtn = () => {
    userScore=0;
    compScore=0;
    userScorepara.innerText = "0";
    compScorepara.innerText = "0";
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31"; 
    
}

restart.addEventListener("click",restartbtn);

const showWinner = (userWin,userChoice,compChoice) =>  {
   if(userWin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; 
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice =",userChoice);

    const compChoice = genCompChoice();
    console.log("Computer choice = ",compChoice);

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else  if (userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //
            userWin = compChoice === "rock" ? false : true;
        } 
        showWinner(userWin,userChoice,compChoice);
    }
    
}
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});