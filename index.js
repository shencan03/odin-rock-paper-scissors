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


const getHumanChoice = () => {
  const choice = prompt("Enter your choice: ").toLowerCase()

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

const playGame = () => {
  for(let i = 0; i < 5; i++){
    console.log(playRound(getHumanChoice(), getComputerChoice()))
  }

  console.log(`Your score: ${humanScore}\nComputer's score: ${computerScore}`)

  if(humanScore > computerScore){
    console.log("You win!")
  } else if(humanScore < computerScore){
    console.log("You lose!")
  } else {
    console.log("Draw!")
  }
}


playGame()
