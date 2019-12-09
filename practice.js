const calculateAgeInDogYears = (age) => {
    const ageInDogYears = age / 22
    return ageInDogYears
}
const dogAge = calculateAgeInDogYears(45)
console.log(dogAge)

const go = (direction, speed) => {
    if (speed > 75) {
      return `SLOW DOWN!`;
    }
    return `The car is moving ${direction} at ${speed} mph!`;
  }
  
  ​const travel = go("forward", 70);
  console.log(travel);
