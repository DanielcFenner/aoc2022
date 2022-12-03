const fs = require("fs");

let file = fs.readFileSync("input.txt", "utf-8").split("\n");
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let total = 0;

let charTracker = {};

for (let i = 0; i < file.length; i++) {
  // remove all dupes from the line
  const line = [...new Set(file[i].split(""))];

  for (let j = 0; j < line.length; j++) {
    const letter = line[j];

    if (charTracker[letter]) {
      charTracker[letter]++;
    } else {
      charTracker[letter] = 1;
    }
  }

  for (const key in charTracker) {
    if (charTracker[key] === 3) {
      total += alpha.findIndex((e) => e === key) + 1;
      charTracker = {};
      break;
    }
  }
}

console.log(total);
