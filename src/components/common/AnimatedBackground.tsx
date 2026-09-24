import React from 'react';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Lightweight Ambient Radial Gradient Header Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-sky-500/10 via-purple-500/5 to-transparent blur-2xl opacity-60 dark:opacity-40 pointer-events-none" />
    </div>
  );
};
