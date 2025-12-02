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
            For me, engineering is an extension of the design process. I
            specialize in bridging the gap between static visuals and living,
            breathing interfaces. My experience spans Fintech, HealthTech, and
            EdTech. I&apos;ve architected complex SaaS solutions (including
            remote collaboration tools) and collaborated with MakerStudio to
            ship polished products for giants like Nomba and Paystack.
          </p>

          <p>
            I also understand scale, whether driving optimization as a Growth
            Frontend Engineer at Diool or managing high-traffic infrastructure
            for startups like Meto. Previously, I set the technical culture as
            the Founding Frontend Engineer at Klas.
            <br />
            <br />
            I&apos;m currently exploring Design Engineer opportunities that
            challenge me to use my design thinking and creative skills to
            define, not just build, the next generation of digital products.
          </p>
        </article>
      </div>
    </section>
  );
}
