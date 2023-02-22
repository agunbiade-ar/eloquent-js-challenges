for (let index = 1; index < 101; index++) {
  if (index % 3 == 0 && index % 5 == 0) console.log('fizzbuzz')
  else if (index % 5 == 0) {
    console.log('buzz')
  } else if (index % 3 == 0) {
    console.log('fizz')
  } else {
    console.log(index)
  }
}
