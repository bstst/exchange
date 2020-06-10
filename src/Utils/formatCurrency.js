import isNumber from './isNumber'

function formatCurrency(number) {
  if (!isNumber(number)) {
    return ''
  }

  const fixed = number.toFixed(2)
  const [before, after] = fixed.split('.')
  const beforeArray = before.split('')
  const groups = []

  beforeArray.reverse()
  while (beforeArray.length > 0) {
    groups.push(beforeArray.splice(0, 3).reverse())
  }

  groups.reverse()
  const reconstructed = groups.map(group => group.join('')).join(',')
  const result = `${reconstructed}.${after}`
  return result
}

export default formatCurrency
