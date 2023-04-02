// generate random array with a length parameter passed in, with values less than 100
function generateRandomArray(length) {
  let array = []
  for (let i = 0; i < length; i += 1) {
    array[i] = Math.floor(Math.random() * 100)
  }
  return array
}
module.exports = generateRandomArray
