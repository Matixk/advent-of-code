// 2.1
function getPRS(data) {
  const PLAYER_MOVES = {
    'X': MOVES.ROCK,
    'Y': MOVES.PAPER,
    'Z': MOVES.SCISSORS,
  };

  let sum = 0;
  data.split('\n').forEach((line) => {
    if (!line) {
      return;
    }
    const [opponent, player] = line.split(' ');
    const opponentMove = OPPONENT_MOVES[opponent];
    const playerMove = PLAYER_MOVES[player];

    sum += _getRoundPoints(playerMove, opponentMove);
  });

  console.log(sum);
}

// 2.2
function getPRS2(data) {
  let sum = 0;

  data.split('\n').forEach((line) => {
    if (!line) {
      return;
    }
    const [opponent, player] = line.split(' ');
    const opponentMove = OPPONENT_MOVES[opponent];
    let playerMove;

    if (player === DRAW) {
      playerMove = opponentMove;
    } else {
      if (opponentMove === MOVES.ROCK) {
        playerMove = player === LOSE ? MOVES.SCISSORS : MOVES.PAPER;
      } else if (opponentMove === MOVES.PAPER) {
        playerMove = player === LOSE ? MOVES.ROCK : MOVES.SCISSORS;
      } else if (opponentMove === MOVES.SCISSORS) {
        playerMove = player === LOSE ? MOVES.PAPER : MOVES.ROCK;
      }
    }

    sum += _getRoundPoints(playerMove, opponentMove);
  });

  console.log(sum);
}

// 3
const WIN_POINTS = 6;
const MOVES = {
  ROCK: 0,
  PAPER: 1,
  SCISSORS: 2,
};
const POINTS = {
  [MOVES.ROCK]: 1,
  [MOVES.PAPER]: 2,
  [MOVES.SCISSORS]: 3,
};
const OPPONENT_MOVES = {
  'A': MOVES.ROCK,
  'B': MOVES.PAPER,
  'C': MOVES.SCISSORS,
};
const DRAW = 'Y';
const LOSE = 'X';

function _getRoundPoints(playerMove, opponentMove) {
  let sum = POINTS[playerMove];

  if (playerMove === opponentMove) {
    sum += 3;
  } else {
    switch (opponentMove) {
      case MOVES.ROCK:
        if (playerMove === MOVES.PAPER) {
          sum += WIN_POINTS;
        }
        break;
      case MOVES.PAPER:
        if (playerMove === MOVES.SCISSORS) {
          sum += WIN_POINTS;
        }
        break;
      case MOVES.SCISSORS:
        if (playerMove === MOVES.ROCK) {
          sum += WIN_POINTS;
        }
        break;
    }
  }

  return sum;
}

module.exports = { getPRS, getPRS2 };
