import React from 'react';

//Basic styles import
import styles from './styles/contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactWrapper}>
        <small>
          I can help you design, improve or build the product experience for
          your new or existing products. Feel free to get in touch with me.
        </small>
        <h1 id="h1BG">Do you have any Ideas?</h1>
      </div>
    </section>
  );
}
