import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeMode } from '../../types';

interface ThemeSweepOverlayProps {
  theme: ThemeMode;
}

export const ThemeSweepOverlay: React.FC<ThemeSweepOverlayProps> = ({ theme }) => {
  const [animating, setAnimating] = useState(false);
  const [prevTheme, setPrevTheme] = useState(theme);

  useEffect(() => {
    if (theme !== prevTheme) {
      setAnimating(true);
      setPrevTheme(theme);

      const timer = setTimeout(() => {
        setAnimating(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [theme, prevTheme]);

  return (
    <AnimatePresence>
      {animating && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.2, 1.4] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`fixed inset-0 pointer-events-none z-50 ${
            theme === 'dark'
              ? 'bg-slate-950'
              : 'bg-white'
          }`}
          style={{ transformOrigin: 'top right' }}
        />
      )}
    </AnimatePresence>
  );
};
