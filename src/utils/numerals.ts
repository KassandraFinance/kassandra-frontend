import BigNumber from 'bn.js'


export function BNtoDecimal(number: BigNumber, decimalsBN: BigNumber, maximumPrecision?: number): string {
  const numString = number.toString(10)
  const decimals = Number(decimalsBN)
  const maxPrecision = maximumPrecision || 6;

  // start assuming number below decimal point
  let integer = '0'
  let decimalPoint = numString.padStart(decimals, '0')

  // adjust for numbers larger than decimal point
  if (numString.length > decimals) {
    integer = numString.substring(0, numString.length - decimals)
    decimalPoint = numString.substring(numString.length - decimals).substring(0, Math.max(2, maxPrecision - integer.length + 1))
  }

  // remove useless right zeroes on decimal point
  decimalPoint = decimalPoint.replace(/0+$/, '')
  // where the first non-zero starts on the decimal point
  const nonZeros = decimalPoint.length - decimalPoint.replace(/^0+/, '').length
  // cutoff lower numbers as user will hardly receive the precise number
  decimalPoint = decimalPoint.substring(0, maxPrecision + nonZeros)

  integer = integer.replace(/(\d)(?=(\d{3})+\b)/g, '$1 ')

  return `${integer}${decimalPoint.length > 0 ? '.' : ''}${decimalPoint}`
}

export const wei = new BigNumber('10').pow(new BigNumber('18'))
