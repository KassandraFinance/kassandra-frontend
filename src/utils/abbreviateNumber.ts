export function abbreviateNumber(number: string) {
  const trim = number.replace(/\s+/g, '')
  const inter = parseInt(trim)

  function nFormatter(number: number, divisor: number, unit: string) {
    const div = Math.floor(number / divisor)
    return div + unit
  }

  if (inter >= 1000 && inter < 1000000) {
    return nFormatter(inter, 1000, 'k')
  } else if (inter >= 1000000 && inter < 1000000000) {
    return nFormatter(inter, 1000000, 'M')
  } else if (inter >= 1000000000) {
    return nFormatter(inter, 1000000000, 'B')
  } else {
    return nFormatter(inter, 1, '')
  }
}
