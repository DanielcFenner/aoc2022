const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");
let fileSplit = file.split("\n");

let score = 0;

for (let i = 0; i < fileSplit.length; i++) {
  let elfA = fileSplit[i][0];
  let outcome = fileSplit[i][2];
  score += scoreCalc(elfA, outcome);
}

console.log(score);

function scoreCalc(elfA, outcome) {
  let score = 0;
  let shape;

  // shape select X = lose, Y = draw, Z = win
  let pointer;
  switch (elfA) {
    case "A":
      pointer = 2;
      break;
    case "B":
      pointer = 1;
      break;
    case "C":
      pointer = 0;
      break;
  }
  let spr = ["S", "P", "R"];

  if (outcome === "X") {
    let pointerUpdated = mod(pointer + 1, 3);
    shape = spr[pointerUpdated];
  } else if (outcome === "Y") {
    shape = spr[pointer];
  } else {
    let pointerUpdated = mod(pointer - 1, 3);
    shape = spr[pointerUpdated];
  }

  // shape score
  switch (shape) {
    case "R":
      score += 1;
      break;
    case "P":
      score += 2;
      break;
    case "S":
      score += 3;
      break;
  }

  // win loss draw score
  if (outcome === "Z") {
    score += 6;
  } else if (outcome === "Y") {
    score += 3;
  }

  return score;
}

function mod(n, m) {
  return ((n % m) + m) % m;
}
