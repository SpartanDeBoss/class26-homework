//A house price estimator

//peter's house
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterHouseGardenSize = 100;
const peterHouseCost = 2500000;

function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
  return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

//calculating Peter's house Value
const peterVolume = peterDepth * peterHeight * peterWidth;
const peterValuationPrice = calculateHousePrice(peterVolume, peterGardenSize);

if (peterHouseCost < peterValuationPrice) {
  console.log('Peter is paying too little for the house.');
} else if (peterHouseCost > peterValuationPrice) {
  console.log('Peter is paying too much for the house.');
} else {
  console.log("Peter's house price is reasonable.");
}

//julia's house
const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaHouseGarden = 70;
const juliaHouseCost = 1000000;

//calculating Julia's house Value
const juliaVolume = juliaDepth * juliaHeight * juliaWidth;
const juliaValuationPrice = calculateHousePrice(peterVolume, peterGardenSize);

if (juliaHouseCost < juliaValuationPrice) {
  console.log('julia is paying too little for the house.');
} else if (juliaHouseCost > juliaValuationPrice) {
  console.log('julia is paying too much for the house.');
} else {
  console.log("julia's house price is reasonable.");
}
