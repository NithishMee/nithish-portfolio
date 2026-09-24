import React, { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'text'>('default');
  const [isMouseDown, setIsMouseDown] = useState(false);

  // Exact 1:1 instantaneous hardware mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    // Disable on touch/mobile devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    // Fast event delegation for element state detection
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('a, button, [role="button"], select, .glass-panel, [onclick], input[type="submit"]')) {
        setCursorState('hover');
      } else if (target.closest('p, h1, h2, h3, h4, h5, h6, input, textarea')) {
        setCursorState('text');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    // Hide native cursor globally
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.id = 'custom-cursor-hide-styles';
    style.innerHTML = `
      *, a, button, input, select, textarea, [role="button"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      const injectedStyle = document.getElementById('custom-cursor-hide-styles');
      if (injectedStyle) {
        document.head.removeChild(injectedStyle);
      }
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  const isText = cursorState === 'text';
  const isHovered = cursorState === 'hover';

  // Exact tip coordinate hotspot alignment (anchors rotation at the exact tip)
  const offsetStyle = isText
    ? {
        marginLeft: '-11px',
        marginTop: '-12px',
        transformOrigin: '11px 12px',
      }
    : {
        marginLeft: '-4px',
        marginTop: '-3px',
        transformOrigin: '4px 3px',
      };

  const getScale = () => {
    let scale = 1;
    if (isHovered) scale = 1.25;
    if (isMouseDown) scale *= 0.85;
    return scale;
  };

  const getRotate = () => {
    if (isText) return 0;
    return 18;
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transform-gpu will-change-transform"
      style={{
        x: cursorX,
        y: cursorY,
        ...offsetStyle,
      }}
      animate={{
        scale: getScale(),
        rotate: getRotate(),
      }}
      transition={{
        scale: { type: 'spring', stiffness: 500, damping: 28, mass: 0.1 },
        rotate: { duration: 0 }
      }}
    >
      {isText ? (
        // I-Beam text selection cursor
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          className="text-slate-900 dark:text-white filter drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]"
        >
          <path
            d="M8 4h8v2h-3v12h3v2H8v-2h3V6H8V4z"
            fill="currentColor"
          />
        </svg>
      ) : (
        // Original Sleek diagonal arrow cursor
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="28" 
          height="28"
          className="filter drop-shadow-[0_2px_4px_rgba(99,102,241,0.35)] dark:drop-shadow-[0_2px_5px_rgba(56,189,248,0.4)]"
        >
          <defs>
            <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.95" />
            </linearGradient>
          </defs>
          <path 
            d="M4.5 3.15a1.2 1.2 0 0 0-1.78 1.52l6.84 15.6a1.2 1.2 0 0 0 2.21-.06l2.94-7.06 7.06-2.94a1.2 1.2 0 0 0 .06-2.21L5.73 2.18a1.2 1.2 0 0 0-1.73.97z" 
            fill="url(#cursorGradient)"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.div>
  );
};


