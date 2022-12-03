const fs = require("fs");
let largest = 0;

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
      if (calories > largest) {
        largest = calories;
      }
      calories = 0;
    }
  }

  console.log(largest);
});
