import { useTranslation } from 'react-i18next';
import { profile } from '../content/content';
import { useSEO } from '../lib/useSEO';
import styles from './Contact.module.css';

export function Contact() {
  const { t } = useTranslation();
  const phoneHref = `tel:${profile.phone.replace(/\D/g, '')}`;

  useSEO({
    title: t('nav.contact'),
    description: t('contact.description'),
  });

  return (
    <div className={`container ${styles.contact}`}>
      <h1>{t('contact.title')}</h1>
      <p className={styles.description}>{t('contact.description')}</p>

      <div className={styles.wrapper}>
        <div className={styles.links}>
          <h3>{t('resume.profile')}</h3>
          <div className={styles.socialLinks}>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={phoneHref}>{profile.phone}</a>
            <span>{profile.location}</span>
          </div>
        </div>

        <div className={styles.links}>
          <h3>{t('contact.links')}</h3>
          <div className={styles.socialLinks}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}
