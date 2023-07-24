import Big from 'big.js'

interface ICalcAPR {
  kacyPrice: Big
  poolPrice: Big
  totalDeposit: Big
  rewardRate: Big
}

export function handleCalcAPR({
  kacyPrice,
  poolPrice,
  rewardRate,
  totalDeposit
}: ICalcAPR) {
  if (kacyPrice.lte(Big(0)) || poolPrice.lte(Big(0))) {
    return Big(0)
  }

  const result = rewardRate
    .mul('365')
    .mul('100')
    .mul(kacyPrice)
    .div(poolPrice.mul(totalDeposit))
    .toFixed()

  return Big(result)
}
