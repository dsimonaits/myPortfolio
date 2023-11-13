import { useEffect, useRef } from "react"

const usePrevData = <T>(val: T): T | null => {
  const ref = useRef<T | null>(null)
  useEffect(() => {
    ref.current = val
  }, [val])

  return ref.current
}

export default usePrevData
