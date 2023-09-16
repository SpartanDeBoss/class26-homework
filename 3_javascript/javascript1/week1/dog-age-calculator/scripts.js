//A dog age calculator
let dogYearOfBirth = 2007;
let dogYearFuture = 2020;
let dogAge = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears === true) {
  console.log(`Your dog will be ${dogAge} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogAge} human years old in ${dogYearFuture}`);
}
