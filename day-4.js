// 4.1
function sumRangeInOtherRange(data) {
  let sum = 0;

  data.split('\n').forEach((line) => {
      const [firstRange, secondRange] = _lineToRanges(line);

    sum += _rangeContains(firstRange, secondRange);
  });

  console.log(sum);
}

// 4.2
function sumOverlaps(data) {
  let sum = 0;

  data.split('\n').forEach((line) => {
    const [firstRange, secondRange] = _lineToRanges(line);

    sum += _rangeOverlaps(firstRange, secondRange);
  });

  console.log(sum);
}

function _lineToRanges(line) {
  const [range1, range2] = line.split(',');

  return [_rangeMinMax(range1), _rangeMinMax(range2)];
}

function _rangeMinMax(range) {
  let [start, end] = range.split('-');

  return [+start, +end];
}

function _rangeContains([range1Min, range1Max], [range2Min, range2Max]) {
  return (range1Min >= range2Min && range1Max <= range2Max)
      || (range1Min <= range2Min && range1Max >= range2Max);
}

function _rangeOverlaps([range1Min, range1Max], [range2Min, range2Max]) {
  return range1Min <= range2Max && range1Max >= range2Min;
}

module.exports = { sumRangeInOtherRange, sumOverlaps };
