function printMessage(msg) {
  let div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

let computerMove = `rock`;
let playerMove = 'paper';

printMessage(
  `I played ${computerMove}! If your move is ${playerMove}, you won!`
);
