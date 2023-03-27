const range = (start, end, step = 1) => {
  let array = []
  if (start < end) {
    for (let count = start; count <= end; count += step) {
      array.push(count)
    }
  } else if (end < start) {
    for (let count = start; count >= end; count += step) {
      array.push(count)
    }
  } else {
    return 0
  }
  return array
}

console.log(range(4, 100, 5))
console.log(range(18, 2, -2))
console.log(range(5, 5))

const sum = (numbers) => {
  let count = 0
  let total = 0
  while (count < numbers.length) {
    total += numbers[count]
    count += 1
  }
  return total
}

// console.log(sum(range(1, 10)))
