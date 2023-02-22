let board = ''
const space = ' '
const pattern = '#'
const size = 50

for (let outerIndex = 0; outerIndex < size; outerIndex++) {
  for (let innerIndex = 0; innerIndex < size / 2; innerIndex++) {
    if (outerIndex % 2 == 0) {
      board += pattern + space
    } else {
      board += space + pattern
    }
  }
  board += '\n'
}

console.log(board)
