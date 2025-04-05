import styles from './styles/caption.module.scss';

export default function Caption() {
  return (
    <section className={styles.caption}>
      <div className={styles.captionWrapper}>
        <div className={styles.capture}>
          <article className={styles.captureText}>
            <h1 id="h1BG">
              I build &amp;
              <br />
              design stuff
            </h1>

            <p>
              Open source
              <br />
              projects, web apps
              <br />
              and experimentals.
            </p>
          </article>

          <a href="#projects" className={styles.aCapture}>
            see my work
            <span></span>
          </a>
        </div>

        <div className={styles.capture}>
          <article className={styles.captureText}>
            <h1 id="h1BG">
              I write,
              <br />
              sometimes
            </h1>

            <p>
              About design,
              <br />
              frontend dev,
              <br />
              learning and life.
            </p>
          </article>

          <a
            href="https://blog.pariola.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.aCapture}
          >
            read my articles
            <span></span>
          </a>
        </div>
      </div>
    </section>
  );
}
