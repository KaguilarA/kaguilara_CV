import type { ExperienceProject } from '../types/resume';
import { useTranslate } from '../i18n';

export const ExperienceProjects = ({ projects, print = false }: { projects: ExperienceProject[]; print?: boolean }) => {
  const t = useTranslate();
  return (
    <div className={print ? 'resume-nested-projects' : 'space-y-4'}>
      <h4 className={print ? '' : 'text-xs font-mono text-slate-400 uppercase tracking-wider'}>{t('Projects & Libraries')}</h4>
      {projects.map(project => (
        <section key={project.id} className={print ? 'resume-nested-project' : 'rounded-xl border border-slate-700/70 bg-slate-950/40 p-4 space-y-3'}>
          <h5 className={print ? '' : 'text-base font-bold text-sky-400'}>{project.name}</h5>
          <p className={print ? '' : 'text-sm text-slate-300 leading-relaxed'}>{t(project.summary)}</p>
          <ul className={print ? '' : 'list-disc pl-5 space-y-2 text-xs md:text-sm text-slate-300'}>
            {project.highlights.map(highlight => <li key={highlight}>{t(highlight)}</li>)}
          </ul>
          {project.links && <nav aria-label={`${project.name} ${t('Links')}`} className={print ? '' : 'flex flex-wrap gap-4 text-sm text-sky-400'}>
            {project.links.map(link => <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className={print ? '' : 'underline underline-offset-4 hover:text-sky-200'}>{t(link.label)}</a>)}
          </nav>}
          <p className={print ? 'resume-technologies' : 'text-xs text-slate-400'}>{t('Technologies:')} {project.technologies.join(', ')}</p>
        </section>
      ))}
    </div>
  );
};
