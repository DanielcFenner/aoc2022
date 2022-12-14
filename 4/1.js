const fs = require("fs");

let file = fs.readFileSync("input.txt", "utf-8").split("\n");

let score = 0;

for (const line of file) {
  let pairMinMax = getPairMinMax(line);
  let minA = pairMinMax[0];
  let maxA = pairMinMax[1];
  let minB = pairMinMax[2];
  let maxB = pairMinMax[3];

  if (rangeCheck(minA, maxA, minB, maxB)) {
    score++;
  }
}

console.log(score);

function rangeCheck(minA, maxA, minB, maxB) {
  if ((minA <= minB && maxA >= maxB) || (minB <= minA && maxB >= maxA)) {
    return true;
  } else {
    return false;
  }
}

function getPairMinMax(line) {
  let split = line.split(",");
  let arr = [];
  for (range of split) {
    let splitRange = range.split("-");
    arr.push(parseInt(splitRange[0]));
    arr.push(parseInt(splitRange[1]));
  }
  return arr;
}
