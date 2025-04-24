import styles from './styles/navbar.module.scss';

import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
// import NowPlaying from 'components/addons/Spotify';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav id={styles.nav}>
      <div className={styles.wrapper}>
        <h1>
          <Link href="/">pariola.</Link>
        </h1>

        <div className={styles.statusSlot}>
          <Tooltip
            html={
              <div>
                <div className={styles.songArtist}>Zeity</div>
              </div>
            }
            position="top"
            duration={200}
            size="small"
          >
            <div className={styles.statusIcon}>🚧</div>
          </Tooltip>

          <a href="https://zeity.pariola.work" target="_blank" rel="noreferrer">
            <div className={styles.statusTitle}>What&apos;s new?</div>
          </a>
        </div>

        {/* <NowPlaying /> */}
      </div>
    </nav>
  );
}
