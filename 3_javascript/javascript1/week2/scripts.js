/// Flight booking fullname function /////

function getFullname(firstname, surname) {
  return firstname + ' ' + surname;
}

/// Create two variables and assign them the results of the function
const fullname1 = getFullname('Benjamin', 'Hughes');
const fullname2 = getFullname('Jaden', 'Smith');

/// Log out the two fullname variables//////
console.log(fullname1);
console.log(fullname2);

/// Formal fullname////
function getFullname(firstname, surname, useFormalName = false) {
  if (useFormalName === true) {
    return `Lord ${firstName} ${lastName}`;
  } else {
    return `${firstName} ${lastName}`;
  }
}
///Create an extra parameter useFormalName that is a boolean////

const formalFullName = getFullName('peter', 'Dadson', true); // Adds "Lord" in front
const informalFullName = getFullName('Jane', 'matic', false); // Doesn't add "Lord"

/// Describe how you would fix the getFullname so it also works for women///
function getFullname(firstName, lastName, gender) {
  if (gender === 'male') {
    return 'Mr. ' + firstName + ' ' + lastName;
  } else if (gender === 'female') {
    return 'Ms. ' + firstName + ' ' + lastName;
  } else {
    return firstName + ' ' + lastName;
  }
}

///// Event Application /////
const weekDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const today = weekDay[new Date().getDay()];

const daysToAdd = 5; // Example: event is 5 days from today

// result //
let eventDays = [];

function eventCalendar(today, daysToAdd) {
  for (let i = 0; i < weekDay.length; i++) {
    const day = weekDay[i];
    if (day === today) {
      for (let j = 1; j <= daysToAdd; j++) {
        const nextDayIndex = (i + j) % weekDay.length;
        eventDays.push(weekDay[nextDayIndex]);
      }
      return eventDays;
    }
  }
}

const eventSchedule = eventCalendar('Sunday', 5);
console.log(
  `Today is ${today}. Event schedule for the next ${daysToAdd} days:`
);
console.log(eventSchedule.join(', '));

///// Weather Wear /////
function suggestClothing(temperature) {
  if (temperature >= 30) {
    return 'You should wear shorts and a tank top.';
  } else if (temperature >= 20 && temperature < 30) {
    return 'You can wear shorts and a t-shirt.';
  } else if (temperature >= 10 && temperature < 20) {
    return 'A light jacket and jeans would be suitable.';
  } else if (temperature < 10) {
    return "It's cold! Wear a coat, scarf, and gloves.";
  } else {
    return "I'm not sure what to suggest. Use your best judgment.";
  }
}
const clothesToWear2 = suggestClothing(5);
console.log(clothesToWear2); // Logs out: "It's cold! Wear a coat, scarf, and gloves."

//// Student Manager /////
const class07Students = [];
const maxClassSize = 6;
let queenAdded = false; // To keep track of whether the Queen is added

function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
  } else if (studentName === 'Queen' && !queenAdded) {
    class07Students.push(studentName);
    queenAdded = true;
    console.log(`${studentName} has been added to the class.`);
  } else if (class07Students.length < maxClassSize) {
    class07Students.push(studentName);
    console.log(`${studentName} has been added to the class.`);
  } else {
    console.log('Cannot add more students to class 07.');
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

// Try out the cases:
addStudentToClass('Mat');
addStudentToClass('Stones');
addStudentToClass('Gina');
addStudentToClass('David');
addStudentToClass('Emma');
addStudentToClass('Joe'); // Class is full
addStudentToClass('Joe'); // Already in the class
addStudentToClass('Queen'); // Add the Queen to a full class
addStudentToClass('Tina'); // Class is full
console.log(`Number of students in class 07: ${getNumberOfStudents()}`);

//// Candy helper optional /////

// Initialize an array to store candy prices outside of the addCandy function
const boughtCandyPrices = [];

// Function to add candy with type and weight parameters
function addCandy(candyType, weight) {
  const candyPrices = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    'chewing-gum': 0.03,
  };

  const pricePerGram = candyPrices[candyType];

  if (pricePerGram !== undefined) {
    const totalPrice = pricePerGram * weight;
    boughtCandyPrices.push(totalPrice);
  }
}

// Generate a random amount to spend
const amountToSpend = Math.random() * 100;

// Function to check if more candy can be bought
function canBuyMoreCandy() {
  let totalCost = 0;

  // Calculate the total cost of bought candies
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalCost += boughtCandyPrices[i];
  }

  if (totalCost < amountToSpend) {
    console.log('You can buy more, so please do!');
    return true;
  } else {
    console.log('Enough candy for you!');
    return false;
  }
}

// Example usage:
addCandy('sweet', 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices

// Check if more candy can be bought
canBuyMoreCandy();
