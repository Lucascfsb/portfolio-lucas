import { useTranslation } from 'react-i18next';
import { courses, education, languages, profile, skills } from '../content/content';
import { useSEO } from '../lib/useSEO';
import styles from './About.module.css';

export function About() {
  const { t, i18n } = useTranslation();
  const isPortuguese = i18n.language === 'pt';
  const summary = isPortuguese ? profile.summaryPt : profile.summaryEn;
  const objective = isPortuguese ? profile.objectivePt : profile.objectiveEn;
  const additionalInfo = isPortuguese ? profile.additionalInfoPt : profile.additionalInfoEn;
  useSEO({
    title: t('nav.about'),
    description: summary,
  });

  return (
    <div className={`container ${styles.about}`}>
      <h1>{t('about.title')}</h1>

      <div className={styles.bio}>
        <p>{summary}</p>
      </div>

      <section className={styles.section}>
        <h2>{t('about.summary')}</h2>
        <div className={styles.skillsGrid}>
          <div className={styles.skillCategory}>
            <h3>{t('about.objective')}</h3>
            <p>{objective}</p>
          </div>
          <div className={styles.skillCategory}>
            <h3>{t('about.education')}</h3>
            <ul>
              {education.map((item) => (
                <li key={item.id}>
                  {isPortuguese ? item.degreePt : item.degreeEn} -{' '}
                  {isPortuguese ? item.institutionPt : item.institutionEn}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>{t('about.languages')}</h3>
            <ul>
              {languages.map((language) => (
                <li key={language.id}>
                  {isPortuguese ? language.namePt : language.nameEn} -{' '}
                  {isPortuguese ? language.levelPt : language.levelEn}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('about.interests')}</h2>
        <ul>
          {additionalInfo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t('about.courses')}</h2>
        <div className={styles.skillsGrid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.skillCategory}>
              <h3>{isPortuguese ? course.titlePt : course.titleEn}</h3>
              <ul>
                <li>{course.institution}</li>
                <li>{course.hours}</li>
                <li>{isPortuguese ? course.descriptionPt : course.descriptionEn}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('about.skills')}</h2>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <div key={skill.category} className={styles.skillCategory}>
              <h3>{skill.category}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
