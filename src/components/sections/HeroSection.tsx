import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiCode } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResumeModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const nameText = personalInfo.name;
  const [displayName, setDisplayName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: any;

    const tick = () => {
      if (!isDeleting) {
        if (displayName !== nameText) {
          setDisplayName(nameText.slice(0, displayName.length + 1));
          setTypingSpeed(150);
        } else {
          setTypingSpeed(3000); // Pause for 3 seconds when typed out
          setIsDeleting(true);
        }
      } else {
        if (displayName !== '') {
          setDisplayName(nameText.slice(0, displayName.length - 1));
          setTypingSpeed(75); // Faster deleting speed
        } else {
          setTypingSpeed(500); // Pause for 500ms when empty
          setIsDeleting(false);
        }
      }
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayName, isDeleting, typingSpeed, nameText]);

  const isTypingComplete = displayName === nameText || displayName === '';

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % personalInfo.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <section id="home" className="min-h-screen pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24 lg:pb-28 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-28 text-center">
          
          {/* Main Hero Column (Centered with Generous Spacing) */}
          <div className="max-w-2xl space-y-6 flex flex-col items-center justify-center">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm{' '}
              <span className="gradient-text relative inline-flex items-center">
                {displayName}
                <span
                  className={`inline-block w-[3px] sm:w-[4px] h-[0.75em] ml-1 bg-gradient-to-b from-[#2563eb] to-[#0284c7] dark:from-[#38bdf8] to-[#22d3ee] rounded-full self-center ${
                    isTypingComplete ? 'animate-cursor-blink' : 'opacity-100'
                  }`}
                />
              </span>
            </h1>

            {/* Dynamic Animated Role Switcher (Centered) */}
            <div className="h-12 flex items-center justify-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-700 dark:text-slate-200 mr-2">
                I am a
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-sky-600 dark:text-sky-400 underline decoration-sky-400/60 decoration-2 underline-offset-4"
                >
                  {personalInfo.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Bio Quote (Centered) */}
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 max-w-xl leading-relaxed mx-auto font-medium">
              {personalInfo.summary}
            </p>

            {/* Call to Action Buttons (Centered) */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <FiCode className="w-4 h-4" /> View Projects
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-7 py-3.5 rounded-full text-sm font-extrabold glass-panel text-slate-900 dark:text-white hover:border-sky-400 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-2"
              >
                <FiDownload className="w-4 h-4 text-sky-500" /> Preview Resume
              </button>
            </div>

            {/* Quick Social Contacts (Centered) */}
            <div className="flex items-center justify-center gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl glass-panel text-slate-800 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 hover:scale-110 transition-all duration-200 shadow-sm"
                title="GitHub"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl glass-panel text-slate-800 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 hover:scale-110 transition-all duration-200 shadow-sm"
                title="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3.5 rounded-2xl glass-panel text-slate-800 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 hover:scale-110 transition-all duration-200 shadow-sm"
                title="Email Me"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-3.5 rounded-2xl glass-panel text-slate-800 dark:text-white hover:text-sky-500 dark:hover:text-sky-400 hover:scale-110 transition-all duration-200 shadow-sm"
                title="Call Me"
              >
                <FaPhone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Profile Photo & Stat Cards */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl p-2.5 bg-gradient-to-tr from-sky-500 via-purple-500 to-cyan-400 shadow-2xl shadow-sky-500/20 group">
              <div className="w-full h-full rounded-[22px] overflow-hidden bg-slate-900 relative">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs mt-8">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="glass-panel p-3.5 rounded-2xl text-center">
                  <span className="block text-xl font-extrabold text-sky-600 dark:text-sky-400">
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="block text-[11px] text-slate-700 dark:text-slate-300 font-bold mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
