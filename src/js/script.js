// Utils

const printMessage = (message) => {
  console.log(message);
};

const shapesRelations = {
  rock: {
    win: ['scissors'],
    lose: ['paper'],
  },
  paper: {
    win: ['rock'],
    lose: ['scissors'],
  },
  scissors: {
    win: ['paper'],
    lose: ['rock'],
  },
};

const messages = {
  invalid: 'Invalid move! Please try again.',
  draw: "It's a draw!",
  playerWin: 'Congratulations! You win!',
  computerWin: 'Oops! Computer wins!',
};

// Read Computer move
const computerInput = Math.ceil(Math.random() * 3);
let computerMove = 'unknown move';

if (computerInput == '1') {
  computerMove = 'rock';
} else if (computerInput == '2') {
  computerMove = 'paper';
} else if (computerInput == '3') {
  computerMove = 'scissors';
}

printMessage(`Computer move is: ${computerMove}`);

// Read player move
let playerInput = prompt('Choose Your move! 1: rock, 2: paper, 3: scissors.');
let playerMove = 'unknown move';

if (playerInput == '1') {
  playerMove = 'rock';
} else if (playerInput == '2') {
  playerMove = 'paper';
} else if (playerInput == '3') {
  playerMove = 'scissors';
}

printMessage(`Player move is: ${playerMove}`);

// Read game result
if (playerMove === 'unknown move') {
  printMessage(messages.invalid);
} else if (playerMove === computerMove) {
  printMessage(messages.draw);
} else if (shapesRelations[playerMove].win.includes(computerMove)) {
  printMessage(messages.playerWin);
} else {
  printMessage(messages.computerWin);
}
