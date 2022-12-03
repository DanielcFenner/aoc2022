const fs = require("fs");

let file = fs.readFileSync("input.txt", "utf-8").split("\n");
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let total = 0;

for (let i = 0; i < file.length; i++) {
  const line = file[i];
  const lineFirstHalf = line.slice(0, line.length / 2);
  const lineSecondHalf = line.slice(line.length / 2);
  let letter;

  for (let j = 0; j < lineFirstHalf.length; j++) {
    const firstHalfLetter = lineFirstHalf[j];
    index = lineSecondHalf
      .split("")
      .findIndex((element) => element === firstHalfLetter);
    if (index > -1) {
      letter = firstHalfLetter;
      break;
    }
  }

  total += alpha.findIndex((e) => e === letter) + 1;
}

console.log(total);
