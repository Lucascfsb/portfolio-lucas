import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>&lt;Lucas Castro /&gt;</span>
        </Link>

        <nav className={styles.nav}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/projects"
            className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}
          >
            {t('nav.projects')}
          </Link>
          <Link
            to="/about"
            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/contact"
            className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
          >
            {t('nav.contact')}
          </Link>
          <Link
            to="/resume"
            className={`${styles.navLink} ${isActive('/resume') ? styles.active : ''}`}
          >
            {t('nav.resume')}
          </Link>
        </nav>

        <button className={styles.langToggle} onClick={toggleLanguage}>
          {i18n.language === 'en' ? 'PT' : 'EN'}
        </button>
      </div>
    </header>
  );
}
