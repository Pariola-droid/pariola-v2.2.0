//Basic styles import
import styles from './styles/footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer id={styles.footer}>
        <div className={styles.footWrapper}>
          <div className={styles.ulBox}>
            <h3>say hello</h3>

            <ul>
              <li>
                <a href="mailto:hi@pariola.dev">hi@pariola.dev</a>
              </li>
              <li>
                <a
                  href="https://ipariola.hashnode.dev/"
                  target="_blanket"
                  rel="noopener"
                >
                  blog.pariola.dev
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.ulBox}>
            <ul>
              <li>
                <a href="#projects">My Works</a>
              </li>
              <li>
                <a
                  href="https://github.com/pariola-droid"
                  target="_blanket"
                  rel="noopener"
                >
                  My Shelf
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/17A4LDyeQa83eOyRYEhNquWY7q_3TCMJn/view?usp=sharing"
                  target="_blanket"
                  rel="noopener"
                >
                  My Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footBase}>
          <small>&copy; Omopariola Philip 2022</small>

          <ul>
            <li>
              <a
                href="https://twitter.com/ipariola"
                target="_blanket"
                rel="noopener"
              >
                tw
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pariola-droid"
                target="_blanket"
                rel="noopener"
              >
                gh
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omopariola-philip-6aa038178/"
                target="_blanket"
                rel="noopener"
              >
                ln
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/ipariola"
                target="_blanket"
                rel="noopener"
              >
                ig
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
