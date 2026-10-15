import React, { useState } from 'react';
import { ARCHITECTURE_SHOWCASE } from '../data/resumeData';
import type { ArchitectureItem } from '../types/resume';
import { Layers, Cpu, Box, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { useTranslate } from '../i18n';

export const ArchitectureShowcase: React.FC = () => {
  const t = useTranslate();
  const [selectedId, setSelectedId] = useState<string>(ARCHITECTURE_SHOWCASE[0].id);
  const activeSystem = ARCHITECTURE_SHOWCASE.find((item) => item.id === selectedId) || ARCHITECTURE_SHOWCASE[0];

  const handleSelect = (item: ArchitectureItem) => {
    setSelectedId(item.id);
  };

  const renderDiagram = (item: ArchitectureItem) => {
    switch (item.diagramType) {
      case 'micro-frontend':
        return (
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
            <div className="text-center font-bold text-sky-400 pb-1 border-b border-slate-800 flex items-center justify-center gap-2">
              <Box className="w-4 h-4 text-sky-400" />
              <span>{t('Shell Host (Container Application & Routing)')}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-800/60 text-center">
                <span className="text-sky-300 font-semibold block mb-1">{t('Remote App: Checkout')}</span>
                <span className="text-[0.625em] text-slate-400">{t('Independent CI/CD • Deployed on S3')}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/60 text-center">
                <span className="text-purple-300 font-semibold block mb-1">{t('Remote App: Portal')}</span>
                <span className="text-[0.625em] text-slate-400">{t('Independent CI/CD • Angular 17')}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-center">
                <span className="text-emerald-300 font-semibold block mb-1">{t('Remote App: Auth')}</span>
                <span className="text-[0.625em] text-slate-400">{t('Shared Session & JWT Broker')}</span>
              </div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-700/80 text-center flex items-center justify-center gap-3 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t('Shared Singleton Runtime: React / Angular Core, RxJS, Enterprise Token System')}</span>
            </div>
          </div>
        );

      case 'signals':
        return (
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-800/40 text-slate-300">
                <div className="text-rose-400 font-semibold mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  {t('Legacy Zone.js (Dirty Checking)')}
                </div>
                <div className="text-[0.6875em] space-y-1 text-slate-400">
                  <p>• {t('Asynchronous monkey-patching')}</p>
                  <p>• {t('Full component tree traversal')}</p>
                  <p>• {t('Re-evaluates 1,000+ expressions')}</p>
                  <p className="text-rose-400 font-semibold pt-1">{t('Result: Frame drops on streaming telemetry')}</p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-600/50 text-slate-300 shadow-lg shadow-emerald-950/40">
                <div className="text-emerald-400 font-semibold mb-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t('Signals Fine-Grained Reactivity (Kevin)')}
                </div>
                <div className="text-[0.6875em] space-y-1 text-slate-300">
                  <p>• {t('Surgical O(1) dependency subscriptions')}</p>
                  <p>• {t('Glitch-free synchronous topological sort')}</p>
                  <p>• {t('Modern control flow (@if, @for)')}</p>
                  <p className="text-emerald-300 font-semibold pt-1">{t('Result: 0% redundant re-render waste')}</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'canvas-engine':
        return (
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 font-mono text-xs space-y-2">
            <div className="text-center font-bold text-amber-400 pb-1 border-b border-slate-800 flex items-center justify-center gap-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              <span>{t('Real-Time 60 FPS Canvas & WebGL Game Loop')}</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-center">
              <div className="p-2 rounded bg-slate-900 border border-slate-800 w-full">
                <span className="text-sky-300 block font-semibold">requestAnimFrame</span>
                <span className="text-[0.625em] text-slate-400">{t('16.6ms Target Tick')}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block" />
              <div className="p-2 rounded bg-slate-900 border border-slate-800 w-full">
                <span className="text-purple-300 block font-semibold">{t('Spatial Quad-Tree')}</span>
                <span className="text-[0.625em] text-slate-400">{t('Broad-Phase Collision')}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block" />
              <div className="p-2 rounded bg-slate-900 border border-slate-800 w-full">
                <span className="text-emerald-300 block font-semibold">{t('PIXI / WebGL Batch')}</span>
                <span className="text-[0.625em] text-slate-400">{t('Pooled Vertex Buffers')}</span>
              </div>
            </div>
            <div className="text-[0.625em] text-slate-400 text-center pt-2">
              {t('Zero Garbage Collection spikes via static Object Pooling & memory pre-allocation.')}
            </div>
          </div>
        );

      case 'design-system':
        return (
          <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800 font-mono text-xs space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2 rounded-lg bg-indigo-950/30 border border-indigo-800/60 text-center">
                <span className="text-indigo-300 block font-semibold mb-1">{t('Design Tokens')}</span>
                <span className="text-[0.625em] text-slate-400">{t('Semantic Colors, Spacing, Typography, Elevations')}</span>
              </div>
              <div className="p-2 rounded-lg bg-cyan-950/30 border border-cyan-800/60 text-center">
                <span className="text-cyan-300 block font-semibold mb-1">{t('Headless Logic')}</span>
                <span className="text-[0.625em] text-slate-400">{t('ARIA State, Focus Traps, Keyboard Navigation')}</span>
              </div>
              <div className="p-2 rounded-lg bg-pink-950/30 border border-pink-800/60 text-center">
                <span className="text-pink-300 block font-semibold mb-1">{t('Multi-App Pack')}</span>
                <span className="text-[0.625em] text-slate-400">{t('Adopted across 5+ Production Enterprise Suites')}</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-center text-emerald-400 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{t('100% WCAG 2.1 AA Compliance • Automated Visual Regression CI Pipeline')}</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="architecture" className="scroll-mt-24 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>{t('Systems Architecture & Engineering Milestones')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {t('Architectural Case Studies')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mt-1">
            {t('Proven engineering strategies designed and deployed across enterprise organizations to unlock scalability, decoupled deployments, and raw rendering performance.')}
          </p>
        </div>
      </div>

      {/* Interactive Tabs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {ARCHITECTURE_SHOWCASE.map((item) => {
          const isActive = item.id === selectedId;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between ${
                isActive
                  ? 'bg-slate-800/90 border-sky-500 shadow-lg shadow-sky-500/10 ring-1 ring-sky-500/40 text-white'
                  : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-850 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[0.6875em] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-400 border border-slate-700">
                  {item.company}
                </span>
                {isActive && <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />}
              </div>
              <span className="text-xs sm:text-sm font-semibold line-clamp-2">{t(item.title)}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Deep Dive Card */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#0d111a] to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-5">
          <div>
            <span className="text-xs font-mono text-sky-400 tracking-wider uppercase block mb-1">
              {t('Case Study')} • {activeSystem.company}
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {t(activeSystem.title)}
            </h3>
            <p className="text-slate-400 text-sm mt-1">{t(activeSystem.description)}</p>
          </div>
        </div>

        {/* Live Diagram Component */}
        <div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>{t('Topological Architecture Blueprint')}</span>
          </div>
          {renderDiagram(activeSystem)}
        </div>

        {/* Problem vs Solution vs Impact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-950/60 border border-rose-900/40">
            <div className="text-rose-400 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              {t('The Challenge / Bottleneck')}
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {t(activeSystem.problem)}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-sky-900/40">
            <div className="text-sky-400 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              {t('Engineered Solution')}
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {t(activeSystem.solution)}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/60 border border-emerald-900/40">
            <div className="text-emerald-400 text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Zap className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {t('Measurable Business Impact')}
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {t(activeSystem.impact)}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-mono text-slate-500">{t('Core Patterns:')}</span>
          {activeSystem.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
            >
              #{t(tag)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
