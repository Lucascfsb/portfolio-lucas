import { useTranslation } from 'react-i18next';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p>{t('footer.built_with')}</p>
          <div className={styles.links}>
            <a
              href="https://github.com/Lucascfsb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lucas-castrof/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a href="mailto:lucascfsb@gmail.com" aria-label="Email">
              Email
            </a>
          </div>
        </div>
        <p className={styles.copyright}>
          © {currentYear}. {t('footer.designed')}
        </p>
      </div>
    </footer>
  );
}
