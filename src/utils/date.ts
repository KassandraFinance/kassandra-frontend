export function getDate(date: number): string {
  const thisDate = new Date(date * 1000)
  const dd = thisDate.getDate()
  const mm = thisDate.getMonth()
  const yyyy = thisDate.getFullYear()
  // const hours = today.getHours()
  // const minutes = today.getMinutes()
  // const second = today.getSeconds()

  return `${dd}/${mm}/${yyyy}`
}
