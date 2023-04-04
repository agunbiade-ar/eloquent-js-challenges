class GroupIterator {
  constructor(group) {
    this.group = group
    this.index = 0
    this.size = group.size
  }

  [Symbol.iterator] = function () {
    return new GroupIterator(this.group)
  }

  next() {
    if (this.index === this.size - 1)
      return { value: this.group.currentItem(this.index), done: true }

    let value = { value: this.group.currentItem(this.index), done: false }

    this.index++
    return value
  }
}

module.exports = GroupIterator
