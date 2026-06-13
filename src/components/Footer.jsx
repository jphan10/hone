import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <div className={styles.logo}>Honed</div>
          <div className={styles.tagline}>Made by people, for people who make things.</div>
        </div>
        <nav className={styles.links} aria-label="Footer navigation">
          <a href="#pledge" className={styles.link}>The pledge</a>
          <a href="#how" className={styles.link}>How it works</a>
          <a href="#join" className={styles.link}>Early access</a>
          <a href="#top" className={styles.link}>Back to top</a>
          <a href="/upload/" className={styles.link}>Submit your work</a>
        </nav>
      </div>
      <div className={styles.bottom}>
        &copy; 2026 Honed &mdash; a quiet corner of the internet.
      </div>
    </footer>
  )
}
