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

const startupName = `${firstWords} ${secondWords}`;
const randomNumber = Math.floor(Math.random() * startupName.length);
console.log(
  `The setup: "${randomNumber}" contains ${startupName[randomNumber]} characters`
);
