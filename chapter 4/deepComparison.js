function deepEqual(firstObject, secondObject) {
  if (firstObject === null && secondObject) return true
  if (!firstObject || !secondObject) return false
  if (firstObject === secondObject) return true
  if (typeof firstObject == 'object' && typeof secondObject == 'object') {
    if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
      return false
    }

    let first = Object.keys(firstObject) //this is an array
    let second = Object.keys(secondObject) //this is an array
    let trueCounter = 0

    for (let index = 0; index < first.length; index++) {
      for (let secondIndex = 0; secondIndex < second.length; secondIndex++) {
        // console.log('danger')
        if (
          first[index] === second[secondIndex] &&
          deepEqual(
            firstObject[first[index]],
            secondObject[second[secondIndex]]
          )
        )
          trueCounter += 1
      }
    }
    if (trueCounter === first.length) {
      return true
    }
  }
  return false
}

console.log(deepEqual({ a: 2, b: 4 }, { a: 2, b: 4 }))
