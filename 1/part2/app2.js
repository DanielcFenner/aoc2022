const rl = require("readline").createInterface({
  input: require("fs").createReadStream("input.txt"),
});

let largest = [0, 0, 0];
let calories = 0;

rl.on("line", function (line) {
  if (line.length > 0) {
    calories += parseInt(line);
  } else {
    for (let i = 0; i < largest.length; i++) {
      const element = largest[i];

      if (calories > element) {
        largest[i] = calories;
        break;
      }
    }
    calories = 0;
  }
});

rl.on("close", function () {
  let total = largest.reduce((a, b) => a + b);
  console.log(total);
});
