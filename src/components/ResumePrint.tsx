import React from 'react';
import {
  CERTIFICATIONS,
  EXPERIENCES,
  OPEN_SOURCE_LIBRARIES,
  PERSONAL_INFO,
  SKILL_CATEGORIES,
} from '../data/resumeData';

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

export const ResumePrint: React.FC = () => (
  <article id="resume-print" aria-hidden="true">
    <header className="resume-header">
      <h1>{PERSONAL_INFO.name.toUpperCase()}</h1>
      <p className="resume-contact">
        {PERSONAL_INFO.location.split(' (')[0]} · {PERSONAL_INFO.phone} ·{' '}
        <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a> ·{' '}
        <a href={PERSONAL_INFO.linkedin}>linkedin.com/in/kaguilara</a> ·{' '}
        <a href={PERSONAL_INFO.behance}>behance.net/kevinaguilar231</a>
      </p>
      <p className="resume-role">{PERSONAL_INFO.title.toUpperCase()}</p>
      <div className="resume-rule" />
      <p className="resume-summary">{PERSONAL_INFO.summary}</p>
    </header>

    <section className="resume-section">
      <h2>CORE COMPETENCIES</h2>
      <div className="resume-section-rule" />
      <div className="resume-competencies">
        {competencies.map((group) => (
          <p key={group.label}>
            <strong>{group.label}:</strong> {group.skills.join(', ')}
          </p>
        ))}
      </div>
    </section>

    <section className="resume-section">
      <h2>PROFESSIONAL EXPERIENCE</h2>
      <div className="resume-section-rule" />
      {professionalExperience.map((experience) => (
        <div className="resume-experience" key={experience.id}>
          <div className="resume-entry-heading">
            <h3>{experience.role} <span>—</span> <em>{experience.company}</em></h3>
            <time>{experience.period}</time>
          </div>
          <ul>
            {experience.highlights.slice(0, 4).map((highlight, index) => (
              <li key={`${experience.id}-${index}`}>{highlight}</li>
            ))}
          </ul>
          <p className="resume-technologies"><i>Technologies: {experience.technologies.join(', ')}</i></p>
        </div>
      ))}
    </section>

    <section className="resume-section resume-projects">
      <h2>ADDITIONAL PROJECT EXPERIENCE</h2>
      <div className="resume-section-rule" />
      {mobileExperience && (
        <div className="resume-project">
          <h3>Mobile Application Development</h3>
          <p>{mobileExperience.summary}</p>
        </div>
      )}
      <h3 className="resume-subheading">Open-Source Frameworks & Libraries</h3>
      <ul className="resume-project-list">
        {OPEN_SOURCE_LIBRARIES.map((library) => (
          <li key={library.id}>
            <strong>{library.name}:</strong> {library.description}
          </li>
        ))}
      </ul>
    </section>

    <section className="resume-section resume-education">
      <h2>EDUCATION & CERTIFICATIONS</h2>
      <div className="resume-section-rule" />
      <ul>
        {CERTIFICATIONS.map((certification) => (
          <li key={`${certification.title}-${certification.year}`}>
            <strong>{certification.title}</strong> — {certification.issuer}
            {certification.credentialUrl && (
              <> · <a href={certification.credentialUrl}>View credential</a></>
            )}
            <time>{certification.year}</time>
          </li>
        ))}
      </ul>
    </section>

    <section className="resume-section resume-languages">
      <h2>LANGUAGES</h2>
      <div className="resume-section-rule" />
      <ul>
        {PERSONAL_INFO.languages.map((language) => (
          <li key={language.name}><strong>{language.name}:</strong> {language.proficiency}</li>
        ))}
      </ul>
    </section>
  </article>
);
