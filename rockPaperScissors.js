const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput ==='scissors' || userInput === 'bomb'){
  return userInput
  } else {
		console.log('Error!')   
  }
};

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
   return 'tie!'; 
  }
  if (userChoice === 'bomb'){
    return 'You won no matter what!!'
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'You won!'
    } else {
      return 'Computer won!'
    }
  }
  if (userChoice === 'scissors'){
    if(computerChoice === 'paper'){
      return 'You won!'
    } else {
      return 'Computer won!'
    }
  }
  if (userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'You won!'
    } else {
      return 'Computer won!'
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
	const computerChoice = getComputerChoice(); 
	console.log('You threw ' + userChoice);
  console.log('Computer threw ' +computerChoice);
 	console.log(determineWinner(userChoice,computerChoice));
};

playGame();

