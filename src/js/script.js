{
  // SSOT for basic shapes
  const shapes = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors',
    invalid: 'invalid',
  };

  // All messages
  const messages = {
    initText: 'Choose Your move! Rock, Paper or Scissors.',
    invalid: 'Invalid move! Please try again.',
    draw: "It's a draw!",
    playerWin: 'Congratulations! You win!',
    computerWin: 'Oops! Computer wins!',
    unknownMove(id) {
      return `Unknown move with ID: ${id}`;
    },
    resultsMessage(computerMove, playerMove) {
      return `Computer played: ${computerMove.toUpperCase()}! Player played: ${playerMove.toUpperCase()}!`;
    },
  };

  const printMessage = function (msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  };

  const clearMessages = function () {
    document.getElementById('messages').innerHTML = '';
  };

  // Utils functions
  const randomNumber = (max = 3) => Math.ceil(Math.random() * max);

  // Game Events
  const getMoveName = function (argMoveId) {
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

    const shape = shapesRelations.find(({ id }) => id === argMoveId);

    if (!shape) {
      printMessage(messages.unknownMove(argMoveId));
      return shapesRelations.find(
        ({ displayName }) => displayName === shapes.invalid
      );
    }

    return shape;
  };

  const displayResult = function (argComputerMove, argPlayerMove) {
    printMessage(
      messages.resultsMessage(
        argComputerMove.displayName,
        argPlayerMove.displayName
      )
    );

    // Evaluate game result
    if (argPlayerMove.displayName === shapes.invalid) {
      printMessage(messages.invalid);
    } else if (argComputerMove.displayName === argPlayerMove.displayName) {
      printMessage(messages.draw);
    } else if (argPlayerMove.win.includes(argComputerMove.displayName)) {
      printMessage(messages.playerWin);
    } else {
      printMessage(messages.computerWin);
    }
  };

  const playGame = function (playerInput) {
    clearMessages();
    const computerMove = getMoveName(randomNumber());
    const playerMove = getMoveName(playerInput);
    displayResult(computerMove, playerMove);
  };

  const init = function () {
    const BUTTONS_ID = 'buttons';
    const buttons = document.getElementById(BUTTONS_ID);
    printMessage(messages.initText);

    buttons.addEventListener('click', (event) => {
      if (event.target !== buttons) {
        playGame(parseInt(event.target.value));
      }
    });
  };

  init();
}
