function checkEvenOrOdd(num) {
  if (num > 0) {
    if (num === 0) return 'even'
    else if (num === 1) return 'odd'
    else {
      return checkEvenOrOdd(num - 2)
    }
  } else {
    return checkEvenOrOdd(num * -1)
  }
}

console.log(checkEvenOrOdd(-1))
