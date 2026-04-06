import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

export function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>&lt;Lucas Castro /&gt;</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link
            to="/"
            className={`${styles.navLink} ${isActive('/') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/projects"
            className={`${styles.navLink} ${isActive('/projects') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            {t('nav.projects')}
          </Link>
          <Link
            to="/about"
            className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/contact"
            className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            {t('nav.contact')}
          </Link>
          <Link
            to="/resume"
            className={`${styles.navLink} ${isActive('/resume') ? styles.active : ''}`}
            onClick={closeMenu}
          >
            {t('nav.resume')}
          </Link>
        </nav>

        <div className={styles.actions}>
          <button className={styles.langToggle} onClick={toggleLanguage}>
            {i18n.language === 'en' ? 'EN' : 'PT'}
          </button>
          <button
            className={styles.menuToggle}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
