const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result
alert("CLICK ON THE BUTTONS FOR YOUR CHOICE")
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
generateComputerChoice()
getresult()
}))

function generateComputerChoice (){
    const random = Math.floor(Math.random() * 3)+ 1 // you can use possiblechoices.length()

    if(random === 1){
        computerChoice = 'Rock'
    }
    if(random === 2){
        computerChoice = 'Scissor'
    }
    if(random === 3){
        computerChoice = 'Paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
function getresult(){
    if(computerChoice === userChoice){
        result='its a draw'
    }
    
    if(computerChoice === 'Rock' && userChoice === 'Paper'){
        result='CONGRATULATIONS! You win' 
    }
    
    if(computerChoice === 'Paper' && userChoice === 'Rock'){
        result='OH OH! you lost'
    }
    
    if(computerChoice === 'Scissor' && userChoice === 'Rock'){
        result='CONGRATULATIONS! You win'
    }
    
    if(computerChoice === 'Paper' && userChoice === 'Scissor'){
        result='CONGRATULATIONS! You win'
    }
    
    if(computerChoice === 'Rock' && userChoice === 'Scissor'){
        result='OH OH! you lost'
    }
    
    if(computerChoice === 'Scissor' && userChoice === 'Paper'){
        result='OH OH! you lost'
    }
    resultDisplay.innerHTML= result
}
