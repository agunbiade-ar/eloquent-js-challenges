const array = [1, 2, 3]

function arrayToList(array) {
  let list = {}
  if (array.length == 1) {
    return { value: array[0], rest: null }
  }
  return { value: array[0], rest: arrayToList(array.slice(1)) }
}
let list = arrayToList(array)
// console.log(list)

function listToArray(list) {
  if (list.rest == null) {
    return [list.value]
  }
  return [list.value, ...listToArray(list.rest)]
}
// console.log(listToArray(list))

function prepend(element, list) {
  return { value: element, rest: list }
}
// console.log(prepend(5, list))

function nth(list, index) {
  let tracker = { count: 0, value: null }

  if (index == 0) return list.value
  while (list.rest != null) {
    list = list.rest
    tracker.count++

    if (tracker.count == index) {
      tracker.value = list.value
      return tracker.value
    }
  }
}
// console.log(nth(list, 2))

function recursive_nth(list, index) {
  //base case: check if that's the first element
  if (index == 0) return list.value
  else {
    // if the next object "rest" is null, return undefined
    if (list.rest == null) return

    //decrease the index till it reaches zero
    index -= 1
    //use the decreased index inside the recursive function
    return recursive_nth(list.rest, index)
  }
}

//generate a random array of length 3
const randArray = require('./generateRandomArray')(3)
// console.log(randArray)

list = arrayToList(randArray)
console.log(list)
list = prepend(1000, list)
console.log(list)
console.log(recursive_nth(list, 2))
