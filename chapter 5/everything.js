const randArray = require('../chapter 4/generateRandomArray')(3)
// console.log(randArray)

function every1(array, func) {
  let boolValue = true
  for (let i = 0; i < array.length; i++) {
    boolValue = boolValue && func(array[i])
  }
  return boolValue === true ? true : false
}
// console.log(every1(randArray, (x) => x % 2 == 0))

function every2(array, func) {
  return !array.some((val) => !func(val))
}

// console.log(every2(randArray, (x) => x % 2 == 0))
