import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';
import { FiMenu, FiX } from 'react-icons/fi';
import { ThemeMode } from '../../types';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
];

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);

          const scrollPosition = window.scrollY + 100;
          for (const link of navLinks) {
            const section = link.href.substring(1);
            const element = document.getElementById(section);
            if (element) {
              const top = element.offsetTop;
              const height = element.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-[#090D16]/85 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/80 py-3.5 shadow-lg shadow-black/5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 relative flex items-center justify-between">
        
        {/* Left Side: Theme Toggle Button at Absolute Far Left Corner */}
        <div className="flex items-center">
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        </div>

        {/* Center: Absolute Centered Desktop Navigation Menu Pill with Purple-to-Blue Gradient Border */}
        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <div
            className={`transition-all duration-300 rounded-full ${
              scrolled
                ? 'p-[2px] bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#3b82f6] shadow-lg shadow-purple-500/15'
                : 'p-[2px] bg-transparent shadow-none'
            }`}
          >
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
                scrolled
                  ? 'bg-slate-100/90 dark:bg-[#090D16]/95 backdrop-blur-md'
                  : 'bg-transparent'
              }`}
            >
              {navLinks.map(link => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={`relative px-4 py-1.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                      scrolled
                        ? isActive
                          ? 'text-white'
                          : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'
                        : isActive
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400'
                    }`}
                  >
                    <AnimatePresence>
                      {scrolled && isActive && (
                        <motion.div
                          layoutId="activeTabPill"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#3b82f6] shadow-md shadow-purple-500/30"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </nav>

        {/* Right Side: Mobile Menu Button Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl glass-panel text-slate-800 dark:text-white hover:text-purple-500 transition-colors"
            aria-label="Toggle Mobile Navigation Menu"
          >
            {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden glass-panel border-b border-slate-200 dark:border-slate-800 overflow-hidden mt-3"
          >
            <div className="px-6 py-6 space-y-3">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={e => handleNavClick(e, link.href)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-extrabold transition-colors ${
                      isActive
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
