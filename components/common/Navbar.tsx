import styles from './styles/navbar.module.scss';

import NowPlaying from 'components/addons/Spotify';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id={styles.nav}>
      <div className={styles.wrapper}>
        <h1>
          <Link href="/">pariola.</Link>
        </h1>

        <NowPlaying />
      </div>
    </nav>
  );
}
