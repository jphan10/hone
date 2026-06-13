import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      el.classList.add('revealed')
      return
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        const delay = el.style.getPropertyValue('--delay') || '0s'
        el.style.transitionDelay = `${delay}, ${delay}`
        el.classList.add('revealed')
        io.unobserve(el)
        if (options.onReveal) options.onReveal()
      },
      { threshold: options.threshold ?? 0.16, rootMargin: options.rootMargin ?? '0px 0px -8% 0px' }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return ref
}
