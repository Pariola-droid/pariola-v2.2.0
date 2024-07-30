import styles from './styles/project.module.scss';

import React from 'react';
import { IProject } from 'types/entities/project';
import { projectData } from '../../utils/mock/project';
import IconArrowUp from 'assets/icons/IconArrowUp';

export default function Projects() {
  return (
    <section className={styles.project} id="projects">
      <div className={styles.projWrapper}>
        {projectData.map((project: IProject) => (
          <div key={project.id} className={styles.projCard}>
            <h3 id="h1BG">{project.name}</h3>
            <small>{project.tags}</small>
            <p>{project.description}</p>

            <div className={styles.bottom}>
              <button>
                <a href={project.url} target="_blank" rel="noreferrer noopener">
                  <IconArrowUp />
                  view
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
