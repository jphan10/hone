import { useReveal } from '../hooks/useReveal'
import styles from './Problem.module.css'

export default function Problem() {
  const ref = useReveal()

  return (
    <section id="problem" className={styles.section} ref={ref} data-reveal>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>The problem we&rsquo;re solving</div>
          <h2 className={styles.h2}>
            You never posted because you didn&rsquo;t think it was good enough.
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.p}>
            Maybe you shoot film on weekends. Maybe you just started throwing pots, or you draw
            in a sketchbook nobody sees. The work is real, it just never felt like it
            belonged anywhere online.
          </p>
          <p className={styles.p}>
            And the places that were supposed to be for sharing turned into something else: a
            performance, a popularity contest, a feed full of things no person actually made.
            Honed is the opposite of all that.
          </p>
          <p className={styles.p}>
            The other side of that problem: even when you do find real art, you&rsquo;re not given
            the space to actually look at it. Feeds are engineered to pull you away before
            anything has a chance to land. Honed asks you to stop. One post. Your full
            attention. Your choice to be there.
          </p>
        </div>
      </div>
    </section>
  )
}
