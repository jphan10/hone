import { useReveal } from '../hooks/useReveal'
import styles from './Marketplace.module.css'

const GRAIN_SVG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='c'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23c)'/%3E%3C/svg%3E")`

const CARDS = [
  { bg: 'linear-gradient(150deg, #e6d8c2, #d3c1a4)', label: 'film photograph', artist: 'Mara Liu', medium: '35mm, hand-printed', delay: '0s' },
  { bg: 'linear-gradient(150deg, #e3d3bd, #cdb79a)', label: 'stoneware', artist: 'Theo Hart', medium: 'wheel-thrown vessel', delay: '0.08s' },
  { bg: 'linear-gradient(150deg, #e8dcc6, #d6c4a6)', label: 'linocut', artist: 'Ren Okafor', medium: 'hand-pulled print', delay: '0.16s' },
]

function Card({ bg, label, artist, medium, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} data-reveal style={{ '--delay': delay }}>
      <div className={styles.cardImg} style={{ background: bg }}>
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

  return (
    <section id="market" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef} data-reveal>
          <div className={styles.eyebrow}>Support, not shop</div>
          <h2 className={styles.h2}>Find art you love. Support the person who made it.</h2>
          <p className={styles.intro}>
            When something moves you, you can support the artist directly. Not &ldquo;add to cart&rdquo; &mdash;
            just a way to say <em>this mattered</em>, and to help them keep making.
          </p>
        </div>
        <div className={styles.grid}>
          {CARDS.map(card => <Card key={card.artist} {...card} />)}
        </div>
      </div>
    </section>
  )
}
