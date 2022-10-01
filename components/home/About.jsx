import React from 'react';

//Basic styles import
import styles from './styles/about.module.scss';

export default function About() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.aboutWrapper}>
          <article className={styles.textAbt}>
            <h1 id="h1BG">Design</h1>

            <p>
              I&apos;m probably not the typical designer positioned behind an
              Illustrator art-board adjusting pixels, but I design. Immersed in
              stylesheets tweaking font sizes and contemplating layouts is where
              you&apos;ll find me (~_^). I&apos;m committed to creating fluent
              user experiences while staying fashionable.
            </p>
          </article>

          <article className={styles.textAbt}>
            <h1 id="h1BG">Engineering</h1>

            <p>
              In building JavaScript applications, I&apos;m equipped with just
              the right tools, and can absolutely function independently of them
              to deliver fast, resilient solutions optimized for scale —
              performance and scalability are priorities on my radar.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
