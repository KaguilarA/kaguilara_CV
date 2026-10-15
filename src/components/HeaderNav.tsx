import React from 'react';
import { Printer } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';
import { useLanguage, useTranslate } from '../i18n';

interface HeaderNavProps {
  onSelectSection: (id: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onSelectSection,
}) => {
  const { language, setLanguage } = useLanguage();
  const t = useTranslate();
  const navLinks = [
    { id: 'architecture', label: t('Architecture') },
    { id: 'experience', label: t('Experience') },
    { id: 'certifications', label: t('Education') },
    { id: 'skills', label: t('Skills') },
    { id: 'libraries', label: t('Libraries') },
    { id: 'games', label: t('Games') },
    { id: 'profiler', label: t('Profiler') },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#090a0f]/80 border-b border-slate-800/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-600 to-purple-600 p-[0.0625em] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[0.6875em] flex items-center justify-center font-black text-white text-xs font-mono tracking-tighter">
              KA
            </div>
          </div>
          <div>
            <div className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
              <span>Kevin Aguilar</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80 font-mono text-xs">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onSelectSection(link.id)}
              className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="px-2.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-mono font-bold text-sky-300 hover:bg-slate-800 transition-colors"
            aria-label={language === 'en' ? 'Cambiar idioma a español' : 'Switch language to English'}
            title={language === 'en' ? 'Cambiar idioma a español' : 'Switch language to English'}
          >{language.toUpperCase()}</button>
          {/* GitHub Profile */}
          <a
            href="https://github.com/KaguilarA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title={`${t('GitHub Profile')} (KaguilarA)`}
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Quick Print CV */}
          <button
            onClick={() => window.print()}
            className="hidden sm:flex p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
            title={t('Print or Export PDF')}
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
