function loop(value, testFunction, updateFunction, bodyFunction) {
  while (value) {
    bodyFunction(value)
    value = updateFunction(value) //update value
    value = testFunction(value) ? value : null //test the updated value, if it doesn't meet the test condition return null else return the updated value

    if (!value) return
  }
}

loop(
  5,
  (value) => value < 10,
  (value) => {
    value = value + 1
    return value
  },
  console.log
)
