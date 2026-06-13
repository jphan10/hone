import { useState, useRef, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'
import { useSvgDraw } from '../hooks/useSvgDraw'
import styles from './Waitlist.module.css'

export default function Waitlist() {
  const sectionRef = useReveal()
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { ref: checkRef, draw: drawCheck } = useSvgDraw()

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    const val = email.trim()
    if (!val || val.indexOf('@') < 1 || val.indexOf('.') < 0) {
      setError(true)
      return
    }
    setError(false)
    setSubmitted(true)
    requestAnimationFrame(() => drawCheck('0.7s', '0.1s', 'ease'))
  }, [email, drawCheck])

  return (
    <section id="join" className={styles.section} ref={sectionRef} data-reveal>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>Early access</div>
        <h2 className={styles.h2}>Come make something with us.</h2>
        <p className={styles.body}>
          We&rsquo;re letting people in slowly, so it stays small and kind.
          Leave your email and we&rsquo;ll save you a place.
        </p>

        {!submitted ? (
          <div>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <input
                className={`${styles.input} ${error ? styles.inputError : ''}`}
                type="email"
                placeholder="your email"
                autoComplete="email"
                value={email}
                onChange={e => { setEmail(e.target.value); setError(false) }}
              />
              <button type="submit" className={styles.submit}>Save me a spot</button>
            </form>
            {error && (
              <p className={styles.error} role="alert">
                Please enter a valid email &mdash; we&rsquo;ll keep it safe.
              </p>
            )}
          </div>
        ) : (
          <div className={styles.success} aria-live="polite">
            <svg width="44" height="44" viewBox="0 0 44 44" style={{ overflow: 'visible' }} aria-hidden="true">
              <circle cx="22" cy="22" r="20" fill="none" stroke="#e0cdb5" strokeWidth="2" />
              <path
                ref={checkRef}
                d="M13 22.5 L19.5 29 L31 16.5"
                fill="none"
                stroke="#b4734f"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className={styles.successMsg}>Your spot is saved.</div>
            <div className={styles.successSub}>
              We&rsquo;ll be in touch, gently. No spam, no metrics, no noise &mdash; just a note when there&rsquo;s room.
            </div>
          </div>
        )}

        <p className={styles.fine}>No spam &middot; no metrics &middot; no noise</p>
      </div>
    </section>
  )
}
