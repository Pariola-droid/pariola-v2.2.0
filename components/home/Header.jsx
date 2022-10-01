/* eslint-disable @next/next/no-img-element */
import React from 'react';

//Basic styles import
import styles from './styles/header.module.scss';

export default function Header() {
  return (
    <>
      <header id={styles.header}>
        <div className={styles.wrapperLanding}>
          <div className={styles.text}>
            <div className={styles.textI}>
              <div className={styles.gradientText}>
                <h1>Frontend</h1>

                <h1>
                  Developer<span>.</span>
                </h1>
              </div>

              <p>
                I like to craft solid and scalable frontend products with great
                user experiences.
              </p>
            </div>

            <div className={styles.paraG}>
              <p id="h1BG">
                Highly skilled at progressive enhancement, design systems &amp;
                UI Engineering.
              </p>

              <p id="h1BG">
                Over a two years of experience building products for clients
                across africa.
              </p>
            </div>
          </div>

          <div className={styles.imageH}>
            <div>
              <span className={styles.fineBoy}></span>
            </div>
            <span></span>
          </div>
        </div>
      </header>
    </>
  );
}
