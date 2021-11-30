const allMonth: any = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Ago',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

export function getDate(date: number): string {
  const thisDate = new Date(date * 1000)
  const dd = thisDate.getDate()
  const mm = thisDate.getMonth()
  const yyyy = thisDate.getFullYear()
  // const hours = today.getHours()
  // const minutes = today.getMinutes()
  // const second = today.getSeconds()

  return `${dd} ${allMonth[mm]}, ${yyyy}`
}

export function dateRequestUnstake(withdrawDelay: number) {
  const now = new Date().getTime()

  if (withdrawDelay === 0) {
    const day = new Date(withdrawDelay + now).getDate()
    const month = new Date(withdrawDelay + now).getMonth()
    const year = new Date(withdrawDelay + now).getFullYear()

    return `${day} / ${allMonth[month]} / ${year}`
  }

  const day = new Date(withdrawDelay).getDate()
  const month = new Date(withdrawDelay).getMonth()
  const year = new Date(withdrawDelay).getFullYear()

  return `${day} / ${allMonth[month]} / ${year}`
}
