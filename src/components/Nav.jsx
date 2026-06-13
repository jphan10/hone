import styles from './Nav.module.css'
import honedMark from '../assets/honed-mark.svg'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.logo}>
        <img src={honedMark} alt="" aria-hidden="true" className={styles.mark} />
        Honed
      </a>
      <div className={styles.links}>
        <a href="#pledge" className={styles.link}>The pledge</a>
        <a href="#how" className={styles.link}>How it works</a>
        <a href="#join" className={styles.cta}>Request access</a>
      </div>
    </nav>
  )
}
