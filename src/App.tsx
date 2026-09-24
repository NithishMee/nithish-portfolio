import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { EducationSection } from './components/sections/EducationSection';
import { CodingProfilesSection } from './components/sections/CodingProfilesSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';
import { ProjectModal } from './components/common/ProjectModal';
import { CertificateModal } from './components/common/CertificateModal';
import { ResumeModal } from './components/common/ResumeModal';
import { ThemeRippleOverlay } from './components/common/ThemeRippleOverlay';
import { CustomCursor } from './components/common/CustomCursor';
import { Project, Certification } from './types';
import { useTheme } from './hooks/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Theme ripple transition state
  const [rippleState, setRippleState] = useState<{
    x: number;
    y: number;
    targetTheme: 'dark' | 'light';
    isActive: boolean;
  }>({ x: 0, y: 0, targetTheme: 'dark', isActive: false });

  const handleThemeToggleWithRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    const x = event.clientX;
    const y = event.clientY;
    const targetTheme = theme === 'dark' ? 'light' : 'dark';

    setRippleState({ x, y, targetTheme, isActive: true });
    toggleTheme();
  };

  const handleRippleComplete = () => {
    setRippleState(prev => ({ ...prev, isActive: false }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#090D16] text-slate-900 dark:text-white transition-colors duration-300 relative overflow-x-hidden font-sans">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Background Animated Gradient Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 transform-gpu">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px] dark:bg-sky-500/15 transform-gpu will-change-transform" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-[140px] dark:bg-purple-500/15 transform-gpu will-change-transform" />
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/15 transform-gpu will-change-transform" />
      </div>

      {/* Ripple Animation Wave Overlay */}
      <ThemeRippleOverlay
        isAnimating={rippleState.isActive}
        coords={{ x: rippleState.x, y: rippleState.y }}
        targetTheme={rippleState.targetTheme}
        onAnimationComplete={handleRippleComplete}
      />

      <div className="relative z-10">
        <Navbar theme={theme} onToggleTheme={handleThemeToggleWithRipple} />

        <main>
          <HeroSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection onSelectProject={setSelectedProject} />
          <CertificationsSection onSelectCertificate={setSelectedCert} />
          <EducationSection />
          <CodingProfilesSection />
          <ResumeSection onOpenModal={() => setIsResumeModalOpen(true)} />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Interactive Feature Modals */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertificateModal certification={selectedCert} onClose={() => setSelectedCert(null)} />
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
}

export default App;
