import { useEffect, useRef, Fragment } from 'react'
import styles from './Hero.module.css'

const TAGLINE = ['One', 'post,', 'one', 'moment', 'at', 'a', 'time.']

export default function Hero() {
  const wordRefs = useRef([])

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const words = wordRefs.current

    if (reduce) {
      words.forEach(w => { if (w) { w.style.opacity = '1'; w.style.transform = 'none' } })
      return
    }

    words.forEach((w, i) => {
      if (!w) return
      w.style.transition = 'opacity .6s ease, transform .6s cubic-bezier(.2,.7,.2,1)'
      w.style.transitionDelay = (0.16 * i + 0.3) + 's'
    })

    requestAnimationFrame(() => requestAnimationFrame(() => {
      words.forEach(w => { if (w) { w.style.opacity = '1'; w.style.transform = 'none' } })
    }))
  }, [])

  return (
    <header id="top" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>A home for human work</div>
        <h1 className={styles.h1}>
          Art made by hand.<br />
          Posted by people.<br />
          <em>One at a time.</em>
        </h1>
        <p className={styles.tagline} aria-label="One post, one moment at a time.">
          {TAGLINE.map((word, i) => (
            <Fragment key={i}>
              <span
                className={styles.word}
                ref={el => wordRefs.current[i] = el}
              >
                {word}
              </span>
              {' '}
            </Fragment>
          ))}
        </p>
        <p className={styles.body}>
          A quiet place to share what you make, discover new mediums,
          and find the genuine encouragement that&rsquo;s gone missing online.
        </p>
        <div className={styles.ctas}>
          <a href="#join" className={styles.btnPrimary}>Request an invite</a>
          <a href="#pledge" className={styles.btnText}>Read the pledge</a>
        </div>
      </div>
      <div className={styles.scrollCue} aria-hidden="true">
        <span className={styles.scrollLabel}>Scroll</span>
        <span className={styles.scrollLine} />
      </div>
    </header>
  )
}
