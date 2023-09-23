// HomeWork #3 //

// /// MY FREECODECAMP LINK https://www.freecodecamp.org/SpartanDeBoss
// /// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/build-javascript-objects/
//  https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-dot-notation/
//  https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation/
//  https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/updating-object-properties/
//  https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object/
//  https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups/
// // AND THIS MY USERNAME: SpartanDeBoss

//// Item array removal ////
const names = [
  'Peter',
  'Ahmad',
  'Yana',
  'kristina',
  'Rasmus',
  'Samuel',
  'katrine',
  'Tala',
];
const nameToRemove = 'Ahmad';

const indexToRemove = names.indexOf(nameToRemove);
if (indexToRemove !== -1) {
  names.splice(indexToRemove, 1);
}

console.log(names);

///// When will we be there?? /////

function calculateTravelTime(travelInformation) {
  const { speed, destinationDistance } = travelInformation;
  const totalHours = destiscrnationDistance / speed;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // This will print "8 hours and 38 minutes"

///// Series duration of my life /////
const seriesDurations = [
  {
    title: 'The chronicles of Narnia',
    days: 3,
    hours: 23,
    minutes: 15,
  },
  {
    title: 'The Wheel Of Time',
    days: 4,
    hours: 5,
    minutes: 11,
  },
  {
    title: 'Banshee',
    days: 4,
    hours: 21,
    minutes: 55,
  },
];

function calculatePercentageOfLife(seriesDurations) {
  const totalMinutesInALife = 80 * 365 * 24 * 60; // Assuming a life expectancy of 80 years

  let totalMinutesSpentWatching = 0;

  for (const series of seriesDurations) {
    const { days, hours, minutes } = series;
    const seriesMinutes = days * 24 * 60 + hours * 60 + minutes;
    totalMinutesSpentWatching += seriesMinutes;
    const seriesPercentage = (seriesMinutes / totalMinutesInALife) * 100;
    console.log(
      `"${series.title}" is ${seriesPercentage.toFixed(3)}% of my life`
    );
  }

  const totalPercentage =
    (totalMinutesSpentWatching / totalMinutesInALife) * 100;
  console.log(`In total, that is ${totalPercentage.toFixed(3)}% of my life`);
}

calculatePercentageOfLife(seriesDurations);

///// Save a note /////
const notes = [];

function saveNote(content, id) {
  const note = {
    content,
    id,
  };
  notes.push(note);
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);

console.log(notes);

/////// Get a note /////
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }
  return null;
}

const firstNote = getNote(1);

console.log(firstNote);

////// Log out notes /////
function logOutNotesFormatted() {
  const notes = [
    { id: 1, content: 'Pick up groceries' },
    { id: 2, content: 'Do laundry' },
  ];

  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`
    );
  }
}

logOutNotesFormatted();

////// Adding an activity //////
let activities = [];
function addActivity(date, activity, duration) {
  activities.push;
  ({
    date: 'date',
    activity: 'activity',
    duration: duration,
  });
}

addActivity('23/7-18', 'Youtube', 30);

/*
activities should now look like this
[{
    date: '23/7-18',
    activity: 'Youtube',
    duration: 30,
}]
*/

function showStatus() {
  if (activities.length === 0) {
    return 'Add some activities before calling showStatus';
  }
}
//// Usage limit ////
if (timeDuration > usageLimit) {
  return 'You have reached your limit, no more smartphoning for you!';
}
