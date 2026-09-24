import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Column: Brand & Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl font-extrabold gradient-text">
            Nithish G
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Computer Science & Engineering Student • Kongu Engineering College
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
            © {new Date().getFullYear()} Nithish G. Built with React, TypeScript & Framer Motion.
          </p>
        </div>

        {/* Middle Column: Quick Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <SiGithub className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full glass-panel text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            aria-label="Send Email"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column: Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full glass-panel text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
        >
          Back to Top
          <FiArrowUp className="w-4 h-4" />
        </motion.button>
      </div>
    </footer>
  );
};
