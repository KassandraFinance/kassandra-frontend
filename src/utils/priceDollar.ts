export const priceDollar = (address: string | undefined, array: any[]) => {
  const token = array.filter(token => {
    return token.address === address
  })

  return token[0]?.price || 0
}
