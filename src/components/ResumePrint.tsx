import React from 'react';
import {
  CERTIFICATIONS,
  EXPERIENCES,
  OPEN_SOURCE_LIBRARIES,
  PERSONAL_INFO,
  SKILL_CATEGORIES,
} from '../data/resumeData';
import { useTranslate } from '../i18n';

const competencies = [
  {
    label: 'JavaScript & Frameworks',
    skills: SKILL_CATEGORIES[1].skills.map((skill) => skill.name),
  },
  {
    label: 'Architecture & Performance',
    skills: SKILL_CATEGORIES[0].skills.map((skill) => skill.name),
  },
  {
    label: 'Backend & Services',
    skills: SKILL_CATEGORIES[3].skills.map((skill) => skill.name),
  },
  {
    label: 'Graphics & Tools',
    skills: SKILL_CATEGORIES[2].skills.map((skill) => skill.name),
  },
];

const professionalExperience = EXPERIENCES.filter((experience) => experience.id !== 'mobile-crossplatform');
const mobileExperience = EXPERIENCES.find((experience) => experience.id === 'mobile-crossplatform');

export const ResumePrint: React.FC = () => {
  const t = useTranslate();
  return (
  <article id="resume-print" aria-hidden="true">
    <header className="resume-header">
      <h1>{PERSONAL_INFO.name.toUpperCase()}</h1>
      <p className="resume-contact">
        {PERSONAL_INFO.location.split(' (')[0]} · {PERSONAL_INFO.phone} ·{' '}
        <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a> ·{' '}
        <a href={PERSONAL_INFO.linkedin}>linkedin.com/in/kaguilara</a> ·{' '}
        <a href={PERSONAL_INFO.behance}>behance.net/kevinaguilar231</a>
      </p>
      <p className="resume-role">{t(PERSONAL_INFO.title).toUpperCase()}</p>
      <div className="resume-rule" />
      <p className="resume-summary">{t(PERSONAL_INFO.summary)}</p>
    </header>

    <section className="resume-section">
      <h2>{t('CORE COMPETENCIES')}</h2>
      <div className="resume-section-rule" />
      <div className="resume-competencies">
        {competencies.map((group) => (
          <p key={group.label}>
            <strong>{t(group.label)}:</strong> {group.skills.map(t).join(', ')}
          </p>
        ))}
      </div>
    </section>

    <section className="resume-section">
      <h2>{t('PROFESSIONAL EXPERIENCE')}</h2>
      <div className="resume-section-rule" />
      {professionalExperience.map((experience) => (
        <div className="resume-experience" key={experience.id}>
          <div className="resume-entry-heading">
            <h3>{t(experience.role)} <span>—</span> <em>{experience.company}</em></h3>
            <time>{t(experience.period)}</time>
          </div>
          <ul>
            {experience.highlights.slice(0, 4).map((highlight, index) => (
              <li key={`${experience.id}-${index}`}>{t(highlight)}</li>
            ))}
          </ul>
          <p className="resume-technologies"><i>{t('Technologies:')} {experience.technologies.join(', ')}</i></p>
        </div>
      ))}
    </section>

    <section className="resume-section resume-projects">
      <h2>{t('ADDITIONAL PROJECT EXPERIENCE')}</h2>
      <div className="resume-section-rule" />
      {mobileExperience && (
        <div className="resume-project">
          <h3>{t('Mobile Application Development')}</h3>
          <p>{t(mobileExperience.summary)}</p>
        </div>
      )}
      <h3 className="resume-subheading">{t('Open-Source Frameworks & Libraries')}</h3>
      <ul className="resume-project-list">
        {OPEN_SOURCE_LIBRARIES.map((library) => (
          <li key={library.id}>
            <strong>{library.name}:</strong> {t(library.description)}
          </li>
        ))}
      </ul>
    </section>

    <section className="resume-section resume-education">
      <h2>{t('EDUCATION & CERTIFICATIONS')}</h2>
      <div className="resume-section-rule" />
      <ul>
        {CERTIFICATIONS.map((certification) => (
          <li key={`${certification.title}-${certification.year}`}>
            <strong>{t(certification.title)}</strong> — {certification.issuer}
            {certification.credentialUrl && (
              <> · <a href={certification.credentialUrl}>{t('View credential')}</a></>
            )}
            <time>{certification.year}</time>
          </li>
        ))}
      </ul>
    </section>

    <section className="resume-section resume-languages">
      <h2>{t('LANGUAGES')}</h2>
      <div className="resume-section-rule" />
      <ul>
        {PERSONAL_INFO.languages.map((language) => (
          <li key={language.name}><strong>{t(language.name)}:</strong> {t(language.proficiency)}</li>
        ))}
      </ul>
    </section>
  </article>
  );
};
