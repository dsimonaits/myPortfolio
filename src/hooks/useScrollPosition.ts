import { useEffect, useState } from "react"
import throttle from "../services/throttle"
import usePrevData from "./usePrevData"

const useScrollPosition = () => {
  const [newPosition, setNewPosition] = useState(0)
  const [scrollDown, setScrollDown] = useState(false)

  const prevPosition = usePrevData(newPosition)

  useEffect(() => {
    const handleScrollPosition = () => {
      setNewPosition(window.scrollY)
    }

    window.addEventListener("scroll", throttle(handleScrollPosition, 250))

    return () => {
      window.removeEventListener("scroll", handleScrollPosition)
    }
  }, [])

  useEffect(() => {
    if (newPosition && prevPosition) {
      prevPosition > newPosition ? setScrollDown(false) : setScrollDown(true)
    }
  }, [newPosition])

  return scrollDown
}

export default useScrollPosition
