//Basic styles import
import Link from 'next/link';
import styles from './styles/footer.module.scss';

export default function Footer() {
  const Year = new Date().getFullYear();

  return (
    <>
      <footer id={styles.footer}>
        <div className={styles.footWrapper}>
          <div className={styles.ulBox}>
            <h3>say hello</h3>

            <ul>
              <li>
                <a href="mailto:kehindephilip15@gmail.com">hi@pariola.dev</a>
              </li>
              <li>
                <a
                  href="https://blog.pariola.dev"
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
                <Link href="#projects">My Works</Link>
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
                <a href="/files/resume.pdf" target="_blanket" rel="noopener">
                  My Résumé
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footBase}>
          <small>&copy; Omopariola Philip {Year}</small>

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
                href="https://instagram.com/hi5crt"
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
