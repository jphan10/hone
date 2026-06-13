import { useReveal } from '../hooks/useReveal'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    num: '01',
    title: 'One post a day.',
    body: "You get one post every day, make it count. We want your work to speak for itself, so give it space to live and breathe.",
    delay: '0s',
  },
  {
    num: '02',
    title: 'Swipe across mediums.',
    body: "Photography, ceramics, illustration, textiles, stamps, and more. One swipe carries you somewhere you wouldn’t have gone looking. We won't limit your creativity.",
    delay: '0.07s',
  },
  {
    num: '03',
    title: 'React, don’t rank.',
    body: 'No likes. No follower counts. Just honest reactions from people who understand what it took.',
    delay: '0.14s',
  },
  {
    num: '04',
    title: 'A dashboard only you see.',
    body: "Watch your practice grow in private. Your impact is yours alone, never a number you perform for.",
    delay: '0.21s',
  },
]

function Step({ num, title, body, delay }) {
  const ref = useReveal()
  return (
    <div className={styles.item} ref={ref} data-reveal style={{ '--delay': delay }}>
      <span className={styles.num}>{num}</span>
      <div>
        <h3 className={styles.h3}>{title}</h3>
        <p className={styles.p}>{body}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  const headerRef = useReveal()

  return (
    <section id="how" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header} ref={headerRef} data-reveal>
          <div className={styles.eyebrow}>How it works</div>
          <h2 className={styles.h2}>Simple, on purpose.</h2>
          <p className={styles.subhead}>Every constraint is intentional. Less to scroll means more reason to stop.</p>
        </div>
        <div className={styles.list}>
          {STEPS.map(step => <Step key={step.num} {...step} />)}
        </div>
      </div>
    </section>
  )
}
