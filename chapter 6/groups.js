class Group {
  constructor() {
    this.group = []
  }

  add(item) {
    if (this.group.indexOf(item) === -1) this.group.push(item)
    return this.group
  }

  delete(item) {
    if (this.group.indexOf(item) !== -1)
      this.group = this.group.filter((item_) => item_ !== item)

    return this.group
  }

  has(item) {
    return this.group.indexOf(item) !== -1 ? true : false
  }

  currentItem(index) {
    return this.group[index]
  }

  get size() {
    return this.group.length
  }

  static from(iterableObject) {
    const newGroup = new Group()
    for (let i = 0; i < iterableObject.length; i++) {
      newGroup.add(iterableObject[i])
    }
    return newGroup
  }
}

const GroupIterator = require('./groupIterator')

let g = new Group()
g.add(5)
g.add(4)
g.add(3)

const groupIterator = new GroupIterator(g)
// g.delete(5)
// console.log(g)
// console.log(g.has(5))

// console.log(Group.from([5, 6, 7]))

for (let i = 0; i < groupIterator.size; i++) {
  console.log(groupIterator.next())
}
