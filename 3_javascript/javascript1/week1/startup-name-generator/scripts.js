//startup-name-generator
const firstWords = [
  "Wecan",
  "Undefined",
  "Answers",
  "Datany",
  "Primeloop",
  "Duany",
  "Anyx",
  "Virtan",
  "Artyfy",
  "Luvany",
];

const secondWords = [
  "Onyx",
  "Eligo",
  "Haify",
  "Motion",
  "Chosen",
  "Answered",
  "Blitzly",
  "Voxify",
  "BlueSwifty",
  "LevelLeap",
];
const randomFirstWord =
  firstWords[Math.floor(Math.random() * firstWords.length)];
const randomSecondWord =
  secondWords[Math.floor(Math.random() * secondWords.length)];
const startupName = `The startup: ${randomFirstWord} ${randomSecondWord} contains ${
  randomFirstWord.length + randomSecondWord.length
} characters`;
console.log(startupName);
