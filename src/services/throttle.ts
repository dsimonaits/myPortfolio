type ThrottleFunction = () => void

const throttle = (fn: ThrottleFunction, delay: number) => {
  let time = Date.now()

  return () => {
    if (time + delay - Date.now() <= 0) {
      fn()
      time = Date.now()
    }
  }
}

export default throttle
