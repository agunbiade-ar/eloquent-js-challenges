let anotherObj = {
  a: 1,
  b: 2,
  c: 3,
  hasOwnProperty: 5,
}

let value = Object.hasOwnProperty.apply(anotherObj, ['hasOwnProperty'])
console.log(value)
