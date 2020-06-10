import isNumber from './isNumber'

function formatCurrency(number) {
  if (!isNumber(number)) {
    return ''
  }

  const isNegative = number < 0
  const fixed = String(Math.abs(number.toFixed(2)))
  const [before, after] = fixed.split('.')
  const beforeArray = before.split('')
  const groups = []

  beforeArray.reverse()
  while (beforeArray.length > 0) {
    groups.push(beforeArray.splice(0, 3).reverse())
  }

  groups.reverse()
  const reconstructed = groups.map(group => group.join('')).join(',')
  const result = `${isNegative ? '-' : ''}${reconstructed}.${after}`
  return result
}

export default formatCurrency
