import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { PIECES } from '../data/marketplace'
import styles from './Marketplace.module.css'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)'/%3E%3C/svg%3E")`
const DELAYS = ['0s', '0.08s', '0.16s']

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function Card({ img, bg, label, artist, medium, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} data-reveal style={{ '--delay': delay }}>
      <div className={styles.cardImg} style={img ? undefined : { background: bg }}>
        {img && <img src={img} alt={`${label} by ${artist}`} className={styles.cardPhoto} />}
        <div className={styles.cardGrain} aria-hidden="true" style={{ backgroundImage: GRAIN_SVG }} />
        <span className={styles.cardLabel}>{label}</span>
      </div>
      <div className={styles.cardMeta}>
        <div>
          <div className={styles.artist}>{artist}</div>
          <div className={styles.medium}>{medium}</div>
        </div>
        <a href="#join" className={styles.btnSupport}>Support</a>
      </div>
    </div>
  )
}

export default function Marketplace() {
  const headerRef = useReveal()
  const [cards] = useState(() => shuffle(PIECES).slice(0, 3))

  return (
    <section id="market" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef} data-reveal>
          <div className={styles.eyebrow}>Support, not shop</div>
          <h2 className={styles.h2}>Find art you love. Support the person who made it.</h2>
          <p className={styles.intro}>
            When something moves you, you can support the artist directly. Not &ldquo;add to cart&rdquo;,
            just a way to say <em>this is beatiful</em>, and to help them keep creating.
          </p>
        </div>
        <div className={styles.grid}>
          {cards.map((card, i) => <Card key={card.artist} {...card} delay={DELAYS[i]} />)}
        </div>
        <p className={styles.contribute}>
          Want your work here?{' '}
          <a href="/upload/" className={styles.contributeLink}>Submit a piece →</a>
        </p>
      </div>
    </section>
  )
}
