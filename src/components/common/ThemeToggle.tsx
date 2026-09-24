import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { ThemeMode } from '../../types';

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggleTheme: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggleTheme }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.88, rotate: -10 }}
      onClick={onToggleTheme}
      className="relative p-2.5 rounded-full glass-panel text-slate-800 dark:text-slate-100 hover:text-sky-500 dark:hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400 shadow-md transition-colors overflow-hidden"
      aria-label="Toggle theme mode"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
          exit={{ y: 20, opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 20 }}
          className="flex items-center justify-center"
        >
          {theme === 'dark' ? (
            <FiSun className="w-5 h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
          ) : (
            <FiMoon className="w-5 h-5 text-indigo-600 drop-shadow-[0_0_8px_rgba(79,70,229,0.4)]" />
          )}
        </motion.div>
      </AnimatePresence>

      <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-sky-400/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.button>
  );
};
