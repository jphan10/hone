import { useReveal } from '../hooks/useReveal'
import styles from './Atmosphere.module.css'

import { atmospherePhoto } from '../data/landscapes'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`

export default function Atmosphere() {
  const quoteRef = useReveal()
  return (
    <section id="atmosphere" className={styles.section}>
      <img src={atmospherePhoto} alt="" aria-hidden="true" className={styles.bg} />
      <div className={styles.mask} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" style={{ backgroundImage: GRAIN_SVG }} />
      <div className={styles.vignette} aria-hidden="true" />
      <blockquote className={styles.quote} ref={quoteRef} data-reveal>
        The moments when we see, make, and create something beautiful are the ones worth paying attention to.
      </blockquote>
    </section>
  )
}
