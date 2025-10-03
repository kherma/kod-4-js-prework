// Shapes
const shapes = {
  rock: 'rock',
  paper: 'paper',
  scissors: 'scissors',
  invalid: 'invalid',
};

const shapesRelations = [
  {
    displayName: shapes.rock,
    id: 1,
    win: [shapes.scissors],
    lose: [shapes.paper],
  },
  {
    displayName: shapes.paper,
    id: 2,
    win: [shapes.rock],
    lose: [shapes.scissors],
  },
  {
    displayName: shapes.scissors,
    id: 3,
    win: [shapes.paper],
    lose: [shapes.rock],
  },
  {
    displayName: shapes.invalid,
  },
];

// Messages
const messages = {
  promptText: 'Choose Your move! 1: rock, 2: paper, 3: scissors.',
  invalid: 'Invalid move! Please try again.',
  draw: "It's a draw!",
  playerWin: 'Congratulations! You win!',
  computerWin: 'Oops! Computer wins!',
  unknownMove(id) {
    return `Unknown move with ID: ${id}`;
  },
  resultsMessage(computerMove, playerMove) {
    return `
    Computer played: ${computerMove}!
    -------
    Player played: ${playerMove}!
    `;
  },
};

const printMessage = (message) => {
  console.log(message);
};

// Utils
const randomNumber = (max = 3) => Math.ceil(Math.random() * max);

// Game Events
function getMoveName(argMoveId) {
  const shape = shapesRelations.find(({ id }) => id === argMoveId);

  if (!shape) {
    printMessage(messages.unknownMove(argMoveId));
    return shapesRelations.find(
      ({ displayName }) => displayName === shapes.invalid
    );
  }

  return shape;
}

function displayResult(argComputerMove, argPlayerMove) {
  printMessage(
    messages.resultsMessage(
      argComputerMove.displayName,
      argPlayerMove.displayName
    )
  );

  if (argPlayerMove.displayName === shapes.invalid) {
    printMessage(messages.invalid);
  } else if (argComputerMove.displayName === argPlayerMove.displayName) {
    printMessage(messages.draw);
  } else if (argPlayerMove.win.includes(argComputerMove.displayName)) {
    printMessage(messages.playerWin);
  } else {
    printMessage(messages.computerWin);
  }
}

// Game Init
function init() {
  let computerMove = getMoveName(randomNumber());
  let playerInput = prompt(messages.promptText);
  let playerMove = getMoveName(Number(playerInput));
  displayResult(computerMove, playerMove);
}

init();
