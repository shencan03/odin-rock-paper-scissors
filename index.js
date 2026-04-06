const getComputerChoice = () => {
  const num = Math.round(Math.random() * 10) % 3
  let choice

  if(num == 0){
    choice = "rock"
  } else if(num == 1){
    choice = "paper"
  } else {
    choice = "scissors"
  }

  return choice
}


let humanScore = 0, computerScore = 0


const playRound = (humanChoice, computerChoice) => {

  if(humanChoice == "rock"){
    if(computerChoice == "rock"){
      humanScore++
      computerScore++
      return "Draw!"
    } else if(computerChoice == "paper"){
      computerScore++
      return "You lose! Paper beats rock"
    } else {
      humanScore++
      return "You win! Rock beats scissors"
    }
  } else if(humanChoice == "paper"){
    if(computerChoice == "paper"){
      computerScore++
      humanScore++
      return "Draw!"
    } else if(computerChoice == "rock"){
      humanScore++
      return "You win! Paper beats rock"
    } else {
      computerScore++
      return "You lose! Scissors beat paper"
    }
  } else { //humanChoice == "scissors"
    if(computerChoice == "scissors"){
      humanScore++
      computerScore++
      return "Draw!"
    } else if(computerChoice == "rock"){
      computerScore++
      return "You lose!"
    } else {
      humanScore++
      return "You win! Scissors beat paper"
    }
  }
}

const body = document.querySelector("body")

const gameDiv = document.createElement("div")
gameDiv.id = "game-div"
gameDiv.textContent = "container"
gameDiv.style.backgroundColor = "red"
body.appendChild(gameDiv)

const btnRock = document.createElement("button")
btnRock.id = "rock"
btnRock.textContent = "Rock"

const btnPaper = document.createElement("button")
btnPaper.id = "paper"
btnPaper.textContent = "Paper"

const btnScissors = document.createElement("button")
btnScissors.id = "scissors"
btnScissors.textContent = "Scissors"

gameDiv.appendChild(btnRock)
gameDiv.appendChild(btnPaper)
gameDiv.appendChild(btnScissors)

const buttons = document.querySelectorAll("button")

buttons.forEach((button) => {
  const btnId = button.id
  button.addEventListener("click", () => {
    console.log(playRound(btnId, getComputerChoice()))
  })
})

//   if(humanScore > computerScore){
//     console.log("You win!")
//   } else if(humanScore < computerScore){
//     console.log("You lose!")
//   } else {
//     console.log("Draw!")
//   }
// }
