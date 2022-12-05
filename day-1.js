function getMax(data) {
  let sum = 0;
  let max = 0;

  data.split('\n').forEach((line) => {
    if (line === '') {
      if (sum > max) {
        max = sum;
      }
      sum = 0;
      return;
    }

    sum += +line;
  })

  console.log(max);
}

function getSumOfTop3(data) {
  let sum = 0;
  const elves = [];

  data.split('\n').forEach((line) => {
    if (line === '') {
      elves.push(sum);
      sum = 0;
      return;
    }

    sum += +line;
  })

  elves.sort((a, b) => a > b ? 1 : -1);

  console.log(elves.pop() + elves.pop() + elves.pop());
}

module.exports = { getMax, getSumOfTop3 };
