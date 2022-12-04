const fs = require("fs");

let file = fs.readFileSync("input.txt", "utf-8").split("\n");

let score = 0;

for (const line of file) {
  let pairMinMax = getPairMinMax(line);

  if (rangeCheck(pairMinMax)) {
    score++;
  }
}

console.log(score);

function rangeCheck(pairMinMax) {
  let range = [];

  for (let i = pairMinMax[0]; i <= pairMinMax[1]; i++) {
    range.push(i);
  }

  for (let i = pairMinMax[2]; i <= pairMinMax[3]; i++) {
    range.push(i);
  }

  let originalLength = range.length;
  let uniqueLength = new Set(range).size;

  return originalLength !== uniqueLength;
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
