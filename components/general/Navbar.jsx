import React from 'react';
import Link from 'next/link';

//Basic styles import
import styles from './styles/navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <nav id={styles.nav}>
        <div className={styles.wrapper}>
          <h1>
            <Link href="/">pariola.</Link>
          </h1>

          <small className={styles.uc}>🚧</small>
        </div>
      </nav>
    </>
  );
}
