const args = process.argv.slice(2);

const diceRoller = function(numOfTimes) {
  let output = "";

  for (let i = 0; i < numOfTimes; i++) {
    let randomNumber = Math.floor(Math.random() * 7);
    if (i === numOfTimes - 1) {
      output += randomNumber;
    } else {
      output += randomNumber + ", ";
    }
  }

  return `Rolled ${numOfTimes} dice: ${output}`;
};

console.log(diceRoller(args));