const rl = require("readline").createInterface({
  input: require("fs").createReadStream("input.txt"),
});

let largest = 0;
let calories = 0;

rl.on("line", function (line) {
  if (line.length > 0) {
    calories += parseInt(line);
  } else {
    if (calories > largest) {
      largest = calories;
    }
    calories = 0;
  }
});

rl.on("close", function () {
  console.log(largest);
});
