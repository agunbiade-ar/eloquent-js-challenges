const array = [5, 6, [7], 8, [9], [478, [78, 100, [97, 989, [87]]], [90]]]

function flatten(array) {
  const flattenedArray = array.reduce((accumulator, current) => {
    if (current.length) return accumulator.concat(flatten(current))
    return accumulator.concat(current)
  }, [])
  return flattenedArray
}
console.log(flatten(array))
