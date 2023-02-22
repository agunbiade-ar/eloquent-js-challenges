function upperCaseBs(text) {
  let current
  let count = 0
  do {
    current = text[0]
    if (current === 'B') {
      count += 1
    }
    text = text.slice(1, text.length)
  } while (text.length > 0)
  return count
}

//using recursion
function upperCaseBs_withRecursion(text) {
  let num = 0
  let current = text[0]
  text = text.slice(1, text.length)

  if (current === 'B') {
    num += 1
    if (text.length > 0) return upperCaseBs_withRecursion(text) + num
  } else {
    return upperCaseBs_withRecursion(text) + num
  }
  return num
}
//test with a recursive function
function countChar(text, character) {
  let num = 0
  let current = text[0]
  text = text.slice(1, text.length)

  if (current === character) {
    num += 1
    if (text.length > 1) return countChar(text, character) + num
  } else {
    return countChar(text, character) + num
  }
  return num
}

console.log(countChar('I waaanta', 'a'))
