import { useTranslation } from 'react-i18next';
import { projects } from '../content/content';
import { useSEO } from '../lib/useSEO';
import styles from './Projects.module.css';

export function Projects() {
  const { t, i18n } = useTranslation();
  const isPortuguese = i18n.language === 'pt';
  useSEO({
    title: t('nav.projects'),
    description: t('projects.subtitle'),
  });

  return (
    <div className={`container ${styles.projects}`}>
      <h1>{t('projects.title')}</h1>
      <p className={styles.subtitle}>{t('projects.subtitle')}</p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.placeholder}>
                {isPortuguese ? project.titlePt : project.titleEn}
              </div>
            </div>
            <div className={styles.projectContent}>
              <h3>{isPortuguese ? project.titlePt : project.titleEn}</h3>
              <p>{isPortuguese ? project.descriptionPt : project.descriptionEn}</p>
              <div className={styles.tags}>
                {project.technologies.map((technology) => (
                  <span key={technology} className={styles.tag}>
                    {technology}
                  </span>
                ))}
              </div>
              <div className={styles.links}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('projects.view_project')}
                  </a>
                )}
                <a
                  href={project.githubUrl ?? '/contact'}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('projects.view_code')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
