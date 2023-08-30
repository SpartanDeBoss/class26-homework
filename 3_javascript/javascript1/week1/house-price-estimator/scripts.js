//A house price estimator

//peter's house
const peterWidth = 8;
const peterDepth = 10;
const peterHeight = 10;
const peterGardenSize = 100;
const peterHouseCost = 2500000

function calculateHousePrice(volumeInMeters, gardenSizeInM2) {
  return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}
//calculating Peter's house Value

const peterVolume = peterDepth * peterHeight *  peterWidth;
const peterValuationPrice = calculateHousePrice (peterVolume, peterGardenSize);

if (peterHouseCost < peterValuationPrice) {
  console.log("Peter is paying too little for the house.");
} else if (peterHouseCost > peterValuationPrice) {
  console.log("Peter is paying too much for the house.");
} else {
  console.log("Peter's house price is reasonable.");
}


//julia's house
const juliaWidth = 5;
const juliaDepth = 11;
const juliaHeight = 8;
const juliaGarden = 70;
const juliaHouseCost =1000000;

//calculating Julia's house Value
const juliaVolume = juliaDepth * juliaHeight * juliaWidth;
const juliaValuationPrice = calculateHousePrice(peterVolume, peterGardenSize);

if (juliaHouseCost < juliaValuationPrice) {
  console.log("julia is paying too little for the house.");
} else if (juliaHouseCost > juliaValuationPrice) {
  console.log("julia is paying too much for the house.");
} else {
  console.log("julia's house price is reasonable.");
}