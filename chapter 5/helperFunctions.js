//helper functions from chapter 5 of the book

//this returns the script a particular code falls under.

//see ranges SCRIPTS object
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => code >= from && code < to))
      return script
  }
  return null
}

function countBy(items, function_) {
  let counts = []
  for (let item of items) {
    let returnedScript = function_(item)
    let known = counts.findIndex((c) => c.returnedScript === returnedScript)

    if (known == -1) counts.push({ returnedScript, count: 1 })
    else {
      counts[known].count += 1
    }
  }
  return counts
}

module.exports = { characterScript, countBy }
