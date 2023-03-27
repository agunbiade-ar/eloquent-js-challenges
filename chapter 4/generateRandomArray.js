function generateRandomArray() {
  let array = []
  for (let i = 0; i < 3; i += 1) {
    array[i] = Math.floor(Math.random() * 100)
  }
  return array
}
module.exports = generateRandomArray
