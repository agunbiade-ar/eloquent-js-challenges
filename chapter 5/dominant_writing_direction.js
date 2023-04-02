const SCRIPTS = require('./scripts')

let text = 'школа 学校 chicafille מְסוּכָּן خطيرמְסוּכָּן خطيرמְסוּכָּן خطير'

const { characterScript, countBy } = require('./helperFunctions')

//returns the dominant writing direction of a text

function dom_writing_direction(text) {
  /* first uses the countby helper function to extract the scripts in the text and then filters away non-existent scripts. i.e null scripts. */
  let foundScripts = countBy(text, (item) =>
    characterScript(item.codePointAt(0))
  ).filter((script) => script.returnedScript !== null)

  //mutate the foundscripts to give just the direction and count of each script in the text
  const directionTotals = foundScripts
    .map((script) => {
      return {
        direction: script.returnedScript.direction,
        count: script.count,
      }
    })
    .reduce(
      (accumulator, current) => {
        if (current.direction === 'ltr') {
          accumulator.ltr += current.count
        } else if (current.direction === 'rtl') accumulator.rtl += current.count
        else {
          accumulator.ttb += current.count
        }
        return accumulator
      },
      { ltr: 0, rtl: 0, ttb: 0 }
    )
  const { ltr, rtl, ttb } = directionTotals

  //return the dominant direction based on these if statements
  if (ltr >= rtl && ltr >= ttb)
    return `Dominant direction is Left to right by ${Math.floor(
      (ltr * 100) / (ltr + rtl + ttb)
    )}%`
  if (rtl >= ltr && rtl >= ttb)
    return `Dominant direction is right to left by ${Math.floor(
      (rtl * 100) / (ltr + rtl + ttb)
    )}%`
  if (ttb >= rtl && ttb >= ltr)
    return `Dominant direction is top to bottom by ${Math.floor(
      (ttb * 100) / (ltr + rtl + ttb)
    )}%`
}

console.log(dom_writing_direction(text))
