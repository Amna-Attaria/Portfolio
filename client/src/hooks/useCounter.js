import { useState, useEffect } from 'react'

export const useCounter = (end, duration = 2000, inView = false) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()
    const endValue = parseFloat(end)
    
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(parseFloat((eased * endValue).toFixed(endValue % 1 !== 0 ? 1 : 0)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, inView])

  return count
}
