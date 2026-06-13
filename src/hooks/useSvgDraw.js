import { useRef, useCallback } from 'react'

export function useSvgDraw() {
  const ref = useRef(null)

  const draw = useCallback((duration = '1.2s', delay = '0.2s', easing = 'cubic-bezier(.4,.6,.2,1)') => {
    const path = ref.current
    if (!path) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    try {
      const len = path.getTotalLength()
      path.style.strokeDasharray = len
      path.style.strokeDashoffset = len
      path.style.transition = 'none'
      path.getBoundingClientRect()
      path.style.transition = `stroke-dashoffset ${duration} ${easing} ${delay}`
      path.style.strokeDashoffset = '0'
    } catch (e) {}
  }, [])

  return { ref, draw }
}
