/* eslint-disable @next/next/no-img-element */

import styles from './styles/experience.module.scss';

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.expWrapper}>
        <article className={styles.expText}>
          <h1 id="h1BG">Over the years,</h1>

          <p>(~_^)</p>

          <p>
            I&apos;ve built products for companies and individuals around africa
            ranging from marketing websites to complex solutions and enterprise
            apps with focus on fast, elegant and accessible user experiences.
            Currently, I work at <a href="https://diool.com">Diool</a> as a
            frontend engineer in the growth team.
          </p>

          <p>
            Before now, I worked as the Founding Frontend Engineer at{' '}
            <a href="https://tryklas.com">Klas</a>, crafting thoughtful and
            inclusive experiences that adhere to web standards. Prior to Klas, I
            was a front engineer contractor with Regnify and Haxell, building
            digital products that users love
          </p>
        </article>
      </div>
    </section>
  );
}
