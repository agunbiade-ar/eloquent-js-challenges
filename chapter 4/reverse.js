const array = [1, 2, 3, 4, 5]

//this is more useful. because it doesn't alter the original array
function reverseArray(array) {
  let newArray = []
  let counter = array.length - 1
  while (counter >= 0) {
    newArray.push(array[counter])
    counter -= 1
  }
  return newArray
}
// console.log(reverseArray(array))

//this is faster because it's operating on the same value i.e. the array
function reverseArrayInPlace(array) {
  let counter = 0
  let length = array.length

  while (counter < length / 2) {
    let temp = array[counter]
    array[counter] = array[length - counter - 1]
    array[length - counter - 1] = temp
    counter += 1
  }
  return array
}

console.log(`Original array => ${array}`)
reverseArrayInPlace(array)
console.log(`Reversed array => ${array}`)
