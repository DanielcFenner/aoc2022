const fs = require("fs");

const file = fs.readFileSync("input.txt", "utf-8");
let fileSplit = file.split("\n");

let score = 0;

for (let i = 0; i < fileSplit.length; i++) {
  let elfA = fileSplit[i][0];
  let elfB = fileSplit[i][2];
  score += scoreCalc(elfA, elfB);
}

console.log(score);

function scoreCalc(elfA, elfB) {
  let score = 0;

  // shape score
  switch (elfB) {
    case "X":
      score += 1;
      break;
    case "Y":
      score += 2;
      break;
    case "Z":
      score += 3;
      break;
  }

  // win loss draw score
  if (
    (elfB === "X" && elfA === "A") ||
    (elfB === "Y" && elfA === "B") ||
    (elfB === "Z" && elfA === "C")
  ) {
    score += 3;
  } else if (
    (elfB === "X" && elfA === "C") ||
    (elfB === "Y" && elfA === "A") ||
    (elfB === "Z" && elfA === "B")
  ) {
    score += 6;
  }

  return score;
}
