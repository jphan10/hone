import { useSvgDraw } from '../hooks/useSvgDraw'
import { useReveal } from '../hooks/useReveal'
import styles from './Pledge.module.css'

import { pledgePhoto } from '../data/landscapes'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23m)' opacity='0.5'/%3E%3C/svg%3E")`

export default function Pledge() {
  const { ref: pathRef, draw } = useSvgDraw()
  const sectionRef = useReveal({ onReveal: () => draw() })

  return (
    <section id="pledge" className={styles.pledge} ref={sectionRef} data-reveal>
      <img src={pledgePhoto} alt="" aria-hidden="true" className={styles.bg} />
      <div className={styles.mask} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" style={{ backgroundImage: GRAIN_SVG }} />
      <div className={styles.inner}>
        <div className={styles.eyebrow}>The human-made pledge</div>
        <h2 className={styles.h2}>A quiet act of defiance.</h2>
        <svg
          width="340" height="22" viewBox="0 0 340 22"
          className={styles.underline}
          aria-hidden="true"
        >
          <path
            ref={pathRef}
            d="M10 13 C 90 5, 250 5, 330 11"
            fill="none"
            stroke="#c98a5f"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <p className={styles.body}>
          Everything on Honed is made by a person. No generated images, no mass-produced &ldquo;art&rdquo;, no
          feed engineered to keep you scrolling. Just intentional work, made by real hands, shown one moment at a time.
        </p>
        <p className={styles.footer}>It&rsquo;s a small promise. We intend to keep it.</p>
      </div>
    </section>
  )
}
