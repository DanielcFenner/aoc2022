const fs = require("fs");
let largest = [0, 0, 0];

fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let split = data.split("\n");

  let calories = 0;

  for (const line of split) {
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
  }

  let total = 0;
  for (const calorie of largest) {
    total += calorie;
  }

  console.log(total);
});
