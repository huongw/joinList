const string = process.argv[2];

const obfuscatePassword = function(string) {
  let output = "";
  for (let letter of string) {

    switch (letter) {
    case "a":
      output += "4";
      break;
    case "e":
      output += "3";
      break;
    case "o":
      output += "0";
      break;
    case "l":
      output += "1";
      break;
    default:
      output += letter;
    }
  }
  return output;
};

let results = obfuscatePassword(string);

console.log(results);