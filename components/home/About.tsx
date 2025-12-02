import styles from './styles/about.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <article className={styles.textAbt}>
          <h1 id="h1BG">Design</h1>

          <p>
            I don&apos;t just design static visuals; I build living interfaces.
            Instead of tweaking pixels on an artboard, I design in the
            browser-obsessing over stylesheets, typography, and fluid layouts to
            ensure the final experience feels as good as it looks.
          </p>
        </article>

        <article className={styles.textAbt}>
          <h1 id="h1BG">Engineering</h1>

          <p>
            I specialize in the JavaScript ecosystem, building durable
            applications designed for scale. Whether it&apos;s a complex
            platform or a quick prototype, I prioritize performance and
            maintainability, ensuring the code is as robust as the user
            experience.
          </p>
        </article>
      </div>
    </section>
  );
}
