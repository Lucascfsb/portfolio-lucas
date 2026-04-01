import { useTranslation } from 'react-i18next';
import { courses, education, experience, languages, profile, skills } from '../content/content';
import { useSEO } from '../lib/useSEO';
import styles from './Resume.module.css';

export function Resume() {
  const { t, i18n } = useTranslation();
  const isPortuguese = i18n.language === 'pt';
  const pdfPath = isPortuguese ? '/src/assets/resume-pt.pdf' : '/src/assets/resume-en.pdf';
  const summary = isPortuguese ? profile.summaryPt : profile.summaryEn;
  const objective = isPortuguese ? profile.objectivePt : profile.objectiveEn;

  useSEO({
    title: t('nav.resume'),
    description: summary,
  });

  return (
    <div className={`container ${styles.resume}`}>
      <div className={styles.header}>
        <div>
          <h1>{t('resume.title')}</h1>
          <p className={styles.subtitle}>{profile.fullName}</p>
        </div>
        <a href={pdfPath} download className={styles.downloadBtn}>
          {t('resume.download')}
        </a>
      </div>

      <section className={styles.section}>
        <h2>{t('resume.profile')}</h2>
        <div className={styles.profileCard}>
          <p>{summary}</p>
          <div className={styles.profileMeta}>
            <span>{profile.location}</span>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
          </div>
          <p className={styles.objective}>
            <strong>{t('about.objective')}:</strong> {objective}
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('resume.experience')}</h2>
        <div className={styles.timeline}>
          {experience.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineDate}>
                {item.startYear} {item.endYear ? `- ${item.endYear}` : item.current ? '- Present | Atual' : ''}
              </div>
              <div className={styles.timelineContent}>
                <h3>{isPortuguese ? item.titlePt : item.titleEn}</h3>
                <p className={styles.company}>{item.company}</p>
                <ul>
                  {(isPortuguese ? item.descriptionPt : item.descriptionEn).map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('resume.education')}</h2>
        <div className={styles.educationList}>
          {education.map((item) => (
            <div key={item.id} className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h3>{isPortuguese ? item.degreePt : item.degreeEn}</h3>
                <p className={styles.year}>{isPortuguese ? item.periodPt : item.periodEn}</p>
              </div>
              <p className={styles.institution}>
                {isPortuguese ? item.institutionPt : item.institutionEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('resume.courses')}</h2>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.skillGroup}>
              <h4>{isPortuguese ? course.titlePt : course.titleEn}</h4>
              <p>{course.institution}</p>
              <p>{course.hours}</p>
              <p>{isPortuguese ? course.descriptionPt : course.descriptionEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('resume.languages')}</h2>
        <div className={styles.languageGrid}>
          {languages.map((language) => (
            <div key={language.id} className={styles.skillGroup}>
              <h4>{isPortuguese ? language.namePt : language.nameEn}</h4>
              <p>{isPortuguese ? language.levelPt : language.levelEn}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t('resume.skills')}</h2>
        <div className={styles.skillsList}>
          {skills.map((skill) => (
            <div key={skill.category} className={styles.skillGroup}>
              <h4>{skill.category}</h4>
              <p>{skill.items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
