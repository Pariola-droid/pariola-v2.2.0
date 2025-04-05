import styles from './styles/about.module.scss';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutWrapper}>
        <article className={styles.textAbt}>
          <h1 id="h1BG">Design</h1>

          <p>
            I design, even though I&apos;m probably not the typical designer
            sitting in front of an Illustrator artboard tweaking pixels. You can
            always find me buried in stylesheets, fiddling with font sizes and
            thinking about layouts (~_^). Creating fluid user experiences is
            something I&apos;m committed to doing while looking chic.
          </p>
        </article>

        <article className={styles.textAbt}>
          <h1 id="h1BG">Engineering</h1>

          <p>
            I have the ideal tools for developing JavaScript applications, and I
            can definitely work without them to produce quick, durable solutions
            that are designed for growth &#8211; performance and scalability are
            top objectives on my radar.
          </p>
        </article>
      </div>
    </section>
  );
}
