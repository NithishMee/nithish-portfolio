import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeMode } from '../../types';

interface ThemeRippleOverlayProps {
  isAnimating: boolean;
  coords: { x: number; y: number };
  targetTheme: ThemeMode;
  onAnimationComplete: () => void;
}

export const ThemeRippleOverlay: React.FC<ThemeRippleOverlayProps> = ({
  isAnimating,
  coords,
  targetTheme,
  onAnimationComplete
}) => {
  if (!isAnimating) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={`${targetTheme}-${coords.x}-${coords.y}`}
        initial={{
          clipPath: `circle(0px at ${coords.x}px ${coords.y}px)`,
          opacity: 1
        }}
        animate={{
          clipPath: `circle(2500px at ${coords.x}px ${coords.y}px)`,
          opacity: 1
        }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={onAnimationComplete}
        className={`fixed inset-0 z-[99999] pointer-events-none ${
          targetTheme === 'dark' ? 'bg-[#090d16]' : 'bg-[#f8fafc]'
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div
            className={`w-32 h-32 rounded-full blur-xl ${
              targetTheme === 'dark' ? 'bg-sky-500/20' : 'bg-purple-500/20'
            }`}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
