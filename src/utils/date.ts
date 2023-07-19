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

export function getDateInHours(date: number): string {
  const thisDate = new Date(date * 1000)
  const hours = thisDate.getHours()
  const dd = thisDate.getDate()
  const mm = thisDate.getMonth()
  const yyyy = thisDate.getFullYear()

  return `${hours}:00 - ${dd} ${allMonth[mm]}, ${yyyy}`
}

export function getDay(date: number): string {
  const thisDate = new Date(date * 1000)
  const dd = thisDate.getDate()

  return `${dd}`
}

export function getHour(date: number): string {
  const thisDate = new Date(date * 1000)
  const hour = thisDate.getHours()

  return hour ? `${hour}:00` : ''
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

export function getDateDiff(
  timestamp: string | number | Date,
  now = new Date().getTime()
) {
  const distance = now - Number(timestamp)

  const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 31 * 12))
  const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 31))
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))

  if (years > 0) {
    return {
      value: years,
      string: `${years > 1 ? 'years' : 'year'}`
    }
  } else if (months > 0) {
    return {
      value: months,
      string: `${months > 1 ? 'months' : 'month'}`
    }
  } else if (days > 0) {
    return {
      value: days,
      string: `${days > 1 ? 'days' : 'day'}`
    }
  } else if (hours > 0) {
    return {
      value: hours,
      string: `${hours > 1 ? 'hours' : 'hour'}`
    }
  } else if (minutes > 0) {
    return {
      value: minutes,
      string: 'min'
    }
  }
}

export function publishedAtToHumanReadable(date: string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date))
}
