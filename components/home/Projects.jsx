import React from 'react';

// Basic import of data
import { projectData } from '../../data/project';

//Basic styles import
import styles from './styles/project.module.scss';

export default function Projects() {
  return (
    <>
      <section className={styles.project} id="projects">
        <div className={styles.projWrapper}>
          {projectData.map((project, i) => (
            <div key={i} className={styles.projCard}>
              <h3 id="h1BG">{project.name}</h3>
              <small>{project.lang}</small>
              <p>{project.desc}</p>

              <div className={styles.bottom}>
                <button>
                  <a href={project.url.WB} target="_blank" rel="noreferrer ">
                    <svg width="17" height="16" fill="none" viewBox="0 0 17 16">
                      <path
                        fill="currentColor"
                        d="M11.1694 6.276L5.43144 12.014L4.48877 11.0713L10.2261 5.33333H5.16944V4H12.5028V11.3333H11.1694V6.276Z"
                      />
                    </svg>
                    live
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
