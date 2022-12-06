const fs = require('fs');
const { getMax, getSumOfTop3 } = require('./day-1');
const { getPRS, getPRS2 } = require('./day-2');
const { sumErrorsInRucksacks, sumBadges } = require('./day-3');
const { sumRangeInOtherRange, sumOverlaps } = require('./day-4');
const { rearrangeCargo, rearrangeCargo2 } = require('./day-5');
const { first, sec } = require('./day-6');

function _readFile(file, callback) {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        callback(data);
    });
}

// Day 1 solutions
// _readFile('day-1.txt', getMax);
// _readFile('day-1.txt', getSumOfTop3);
//
// // Day 2 solutions
// _readFile('day-2.txt', getPRS);
// _readFile('day-2.txt', getPRS2);
//
// // Day 3 solutions
// _readFile('day-3.txt', sumErrorsInRucksacks);
// _readFile('day-3.txt', sumBadges);
//
// // Day 4 solutions
// _readFile('day-4.txt', sumRangeInOtherRange);
// _readFile('day-4.txt', sumOverlaps);
//
// // Day 5 solutions
// _readFile('day-5.txt', rearrangeCargo);
// _readFile('day-5.txt', rearrangeCargo2);

// Day 6 solutions
_readFile('day-6.txt', first);
_readFile('day-6.txt', sec);
