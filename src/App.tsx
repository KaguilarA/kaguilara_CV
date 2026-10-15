import { useCallback } from 'react';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { InteractiveCanvas } from './components/InteractiveCanvas';
import { ArchitectureShowcase } from './components/ArchitectureShowcase';
import { LibrariesShowcase } from './components/LibrariesShowcase';
import { GamesShowcase } from './components/GamesShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { LivePerformanceDemo } from './components/LivePerformanceDemo';
import { CertificationsSection } from './components/CertificationsSection';
import { Footer } from './components/Footer';
import { ResumePrint } from './components/ResumePrint';
import { createPortal } from 'react-dom';
import { useTranslate } from './i18n';

export function App() {
  const t = useTranslate();
  const handleSelectSection = useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col font-sans selection:bg-purple-500/30 selection:text-sky-300">
      {/* Background ambient mesh gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-600/10 rounded-full blur-[8em] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-[8em] animate-pulse-glow" />
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[8em] animate-pulse-glow" />
      </div>

      {/* Sticky Navigation Header */}
      <HeaderNav
        onSelectSection={handleSelectSection}
      />

      {/* Main Content Container */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 space-y-20">
        {/* Executive Hero */}
        <HeroSection
          onSelectSection={handleSelectSection}
          onOpenContactModal={() => handleSelectSection('contact')}
        />

        {/* Real-Time Interactive Canvas 2D / WebGL Engine */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              {t('Live Interactive Architecture & Particle Topology Engine')}
            </span>
            <span className="hidden sm:inline text-slate-500">{t('60 FPS Hardware-Accelerated Canvas')}</span>
          </div>
          <InteractiveCanvas />
        </div>

        {/* Systems Architecture Showcase */}
        <ArchitectureShowcase />

        {/* Professional Experience Timeline */}
        <ExperienceTimeline />

        {/* Education & Certifications */}
        <CertificationsSection />

        {/* Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Authored Open-Source Libraries (Reactive-Values & owl-expressjs-utils) */}
        <LibrariesShowcase />

        {/* Shipped Games Showcase (Konceptik & CoinBox Studio) */}
        <GamesShowcase />

        {/* Live React Performance Profiler & Benchmark */}
        <LivePerformanceDemo />
      </main>

      {/* Footer & Direct Contact */}
      <Footer />

      {createPortal(<ResumePrint />, document.body)}

    </div>
  );
}

export default App;
