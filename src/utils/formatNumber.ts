export function formatNumber(number: string) {
  const inter = parseInt(number)

  if (inter >= 1000 && inter < 1000000) {
    const value = inter / 1000

    return `${value.toString()}K`
  } else if (inter >= 1000000 && inter < 1000000000) {
    const value = inter / 1000000

    return `${value.toString()}M`
  } else if (inter >= 1000000000) {
    const value = inter / 1000000000

    return `${value.toString()}B`
  } else {
    return inter.toString()
  }
}
