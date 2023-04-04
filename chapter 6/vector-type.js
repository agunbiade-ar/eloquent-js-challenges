class Vec {
  constructor(x, y) {
    this.x = x
    this.y = y
  }
  plus(another_vector) {
    return new Vec(this.x + another_vector.x, this.y + another_vector.y)
  }

  minus(another_vector) {
    return { x: this.x - another_vector.x, y: this.y - another_vector.y }
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }
}

// const v = new Vec(2, 4)
// console.log(v.length)
// const newVec = v.plus({ x: 24, y: 13 })
// console.log(newVec)
// console.log(newVec.minus({ x: 5, y: 4 }))
