import BigNumber from 'bn.js'


export function BNtoDecimal(number: BigNumber, decimalsBN: BigNumber, maxPrecision: number): string {
  const numString = number.toString(10)
  const decimals = Number(decimalsBN)
  
  if (numString.length > decimals) {
    const decimalPoints = numString.substring(numString.length - decimals).replace(/0+$/, '').substring(0, maxPrecision)
    return `${numString.substring(0, numString.length - decimals)}${decimalPoints.length > 0 ? '.' : ''}${decimalPoints}`
  }
  const decimalPoint = numString.padStart(decimals, '0').replace(/0+$/, '').substring(0, maxPrecision)
  return `0.${decimalPoint}`
}
