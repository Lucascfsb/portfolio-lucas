import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { projects } from '../content/content';
import { useSEO } from '../lib/useSEO';
import styles from './Home.module.css';

export function Home() {
  const { t, i18n } = useTranslation();
  const isPortuguese = i18n.language === 'pt';
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);
  useSEO({
    title: t('nav.home'),
    description: t('home.hero_description'),
  });

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.title}>{t('home.title')}</h1>
          <p className={styles.subtitle}>{t('home.subtitle')}</p>
          <p className={styles.description}>{t('home.hero_description')}</p>
          <Link to="/resume" className={styles.cta}>
            {t('home.cta')}
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className={styles.featured}>
        <div className="container">
          <h2>{t('projects.title')}</h2>
          <p className={styles.featuredSubtitle}>{t('projects.subtitle')}</p>
          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <div key={project.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  {isPortuguese ? project.titlePt : project.titleEn}
                </div>
                <p>{isPortuguese ? project.descriptionPt : project.descriptionEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctatSection}>
        <div className="container">
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.description')}</p>
          <Link to="/contact" className={styles.ctaButton}>
            {t('nav.contact')}
          </Link>
        </div>
      </section>
    </div>
  );
}
