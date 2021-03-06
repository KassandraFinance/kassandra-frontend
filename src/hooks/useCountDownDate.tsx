/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface ICountdownCallbackParams {
  dayss: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const useCountDownDate = () => {
  const [date, setDate] = React.useState<string>('')
  const [timeRemaining, setTimeRemaining] =
    React.useState<ICountdownCallbackParams>({
      dayss: '',
      hours: '',
      minutes: '',
      seconds: ''
    })

  let interval: any

  function countDown(countDownDate: any) {
    interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime()

      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // Output the result in an element with id="demo"

      const day = days + 'd'
      const date =
        days > 0
          ? `${day} ${hours}h ${minutes}m`
          : `${hours}h ${minutes}m ${seconds}s`
      setDate(date)

      setTimeRemaining({
        dayss: days < 10 ? `0${String(days)}` : String(days),
        hours: hours < 10 ? `0${String(hours)}` : String(hours),
        minutes: minutes < 10 ? `0${String(minutes)}` : String(minutes),
        seconds: seconds < 10 ? `0${String(seconds)}` : String(seconds)
      })
      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(interval)
        setDate('')
        setTimeRemaining({
          dayss: '',
          hours: '',
          minutes: '',
          seconds: ''
        })
      }
    }, 1000)
  }

  return {
    date,
    countDown,
    interval,
    timeRemaining
  }
}

export default useCountDownDate
