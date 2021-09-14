import React from 'react'

const useCountDownDate = () => {
  const [date, setDate] = React.useState<string>('')

  let interval: any

  function countDown(countDownDate: any) {
    interval = setInterval(() => {
  
      // Get today's date and time
      let now = new Date().getTime();
        
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"

      setDate(`${days}d ${hours}h ${minutes}m ${seconds}s`)

      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(interval);
        setDate('')
      }
    }, 1000)

  }
  
  return {
    date,
    countDown,
    interval
  }
}

export default useCountDownDate