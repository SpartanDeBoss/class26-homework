//startup-name-generator
const firstWords = [
  'Wecan',
  'Undefined',
  'Answers',
  'Datany',
  'Primeloop',
  'Duany',
  'Anyx',
  'Virtan',
  'Artyfy',
  'Luvany',
];

const secondWords = [
  'Onyx',
  'Eligo',
  'Haify',
  'Motion',
  'Chosen',
  'Answered',
  'Blitzly',
  'Voxify',
  'BlueSwifty',
  'LevelLeap',
];

const randomNumber = (array) => Math.floor(Math.random() * array.length);

const randomFirstWord = firstWords[randomNumber(firstWords)];
const randomSecondWord = secondWords[randomNumber(secondWords)];

const startupName = `The startup: ${randomFirstWord} ${randomSecondWord} contains ${
  randomFirstWord.length + randomSecondWord.length
} characters`;

console.log(startupName);
