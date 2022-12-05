// 3.1
function sumErrorsInRucksacks(data) {
  let sum = 0;

  data.split('\n').forEach((line) => {
    const half = Math.ceil(line.length / 2);

    const firstCompartment = line.slice(0, half);
    const secondCompartment = line.slice(half);

    for (let part of firstCompartment) {
      if (secondCompartment.includes(part)) {
        console.log({part, value: PART_VALUE[part]});
        sum += PART_VALUE[part];
        return;
      }
    }
  });

  console.log(sum);
}

// 3.2
function sumBadges(data) {
  let sum = 0;

  data = data.split('\n');
  for (let i = 0; i < data.length; i += 3) {
    sum += _getBadge(data[i], data[i + 1], data[i + 2]);
  }

  console.log(sum);
}

const PART_VALUE = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
    'A': 27,
    'B': 28,
    'C': 29,
    'D': 30,
    'E': 31,
    'F': 32,
    'G': 33,
    'H': 34,
    'I': 35,
    'J': 36,
    'K': 37,
    'L': 38,
    'M': 39,
    'N': 40,
    'O': 41,
    'P': 42,
    'Q': 43,
    'R': 44,
    'S': 45,
    'T': 46,
    'U': 47,
    'V': 48,
    'W': 49,
    'X': 50,
    'Y': 51,
    'Z': 52
}

function _getBadge(elf1, elf2, elf3) {
  for (let part of elf1) {
    if (elf2.includes(part) && elf3.includes(part)) {
      return PART_VALUE[part];
    }
  }
}

module.exports = { sumErrorsInRucksacks, sumBadges };
