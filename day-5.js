// 5.1
function rearrangeCargo(data) {
  const newCargo = _getCargo();

  data.split('\n').forEach((line) => {
    const [quantity, from, to] = line.match(/\d+/g);

    for (let i = 0; i < quantity; i++) {
      newCargo[to - 1].push(newCargo[from - 1].pop());
    }
  });

  console.log(newCargo.reduce(
    (result, cargo) => result += cargo.pop(),
    ''
  ));
}

// 5.2
function rearrangeCargo2(data) {
  const newCargo = _getCargo();

  data.split('\n').forEach((line) => {
    const [quantity, from, to] = line.match(/\d+/g);

    newCargo[to - 1].push(...newCargo[from - 1].splice(-quantity));
  });

  console.log(newCargo.reduce(
      (result, cargo) => result += cargo.pop(),
      ''
  ));
}

// [T]             [P]     [J]
// [F]     [S]     [T]     [R]     [B]
// [V]     [M] [H] [S]     [F]     [R]
// [Z]     [P] [Q] [B]     [S] [W] [P]
// [C]     [Q] [R] [D] [Z] [N] [H] [Q]
// [W] [B] [T] [F] [L] [T] [M] [F] [T]
// [S] [R] [Z] [V] [G] [R] [Q] [N] [Z]
// [Q] [Q] [B] [D] [J] [W] [H] [R] [J]
//  1   2   3   4   5   6   7   8   9
function _getCargo() {
  return [
    ['Q', 'S', 'W', 'C', 'Z', 'V', 'F', 'T'],
    ['Q', 'R', 'B'],
    ['B', 'Z', 'T', 'Q', 'P', 'M', 'S'],
    ['D', 'V', 'F', 'R', 'Q', 'H'],
    ['J', 'G', 'L', 'D', 'B', 'S', 'T', 'P'],
    ['W', 'R', 'T', 'Z'],
    ['H', 'Q', 'M', 'N', 'S', 'F', 'R', 'J'],
    ['R', 'N', 'F', 'H', 'W'],
    ['J', 'Z', 'T', 'Q', 'P', 'R', 'B'],
  ];
}

module.exports = { rearrangeCargo, rearrangeCargo2 };
