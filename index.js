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

let playerWon = false
let isDraw = false

const playRound = (humanChoice, computerChoice) => {
  playerWon = false
  isDraw = false

  if(humanChoice == "rock"){
    if(computerChoice == "rock"){
      isDraw = true
      return "Draw!"
    } else if(computerChoice == "paper"){
      playerWon = false
      computerScore++
      return "You lose! Paper beats rock"
    } else {
      playerWon = true
      humanScore++
      return "You win! Rock beats scissors"
    }
  } else if(humanChoice == "paper"){
    if(computerChoice == "paper"){
      isDraw = true
      return "Draw!"
    } else if(computerChoice == "rock"){
      humanScore++
      playerWon = true
      return "You win! Paper beats rock"
    } else {
      computerScore++
      currentWinner = "computer"
      return "You lose! Scissors beat paper"
    }
  } else { //humanChoice == "scissors"
    if(computerChoice == "scissors"){
      isDraw = "true"
      return "Draw!"
    } else if(computerChoice == "rock"){
      computerScore++
      playerWon = false
      return "You lose!"
    } else {
      humanScore++
      playerWon = true
      return "You win! Scissors beat paper"
    }
  }
}

const playerNum = document.querySelector("#player-num")
const computerNum = document.querySelector("#computer-num")

playerNum.textContent = humanScore
computerNum.textContent = computerScore

const capitalize = (s) => {
  return s[0].toUpperCase() + s.slice(1)
}

const playerButtons = document.querySelectorAll(".score-button button")

playerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentComputerHand = getComputerChoice()

    const announcement = document.querySelector(".score-announcement")

    announcement.textContent = playRound(button.id, currentComputerHand)

    const currPHand = document.querySelector("#player-hand")
    currPHand.textContent = capitalize(button.id)

    const currCHand = document.querySelector("#computer-hand")
    currCHand.textContent = capitalize(currentComputerHand)

    playerNum.textContent = humanScore
    computerNum.textContent = computerScore

    if(!isDraw){
      if(playerWon){
        currPHand.style.color = "lightgreen"
        currCHand.style.color = "red"
      } else {
        currPHand.style.color = "red"
        currCHand.style.color = "lightgreen"
      }
    } else {
      currPHand.style.color = "blue"
      currCHand.style.color = "blue"
    }
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
