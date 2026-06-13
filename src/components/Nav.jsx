import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.logo}>Honed</a>
      <div className={styles.links}>
        <a href="#pledge" className={styles.link}>The pledge</a>
        <a href="#how" className={styles.link}>How it works</a>
        <a href="#join" className={styles.cta}>Request access</a>
      </div>
    </nav>
  )
}
