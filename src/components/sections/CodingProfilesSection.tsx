import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { codingProfilesData } from '../../data/codingProfiles';
import {
  SiGithub,
  SiLeetcode
} from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const iconMap: Record<string, React.ReactNode> = {
  SiGithub: <SiGithub className="w-7 h-7 text-white" />,
  SiLinkedin: <FaLinkedin className="w-7 h-7 text-[#0A66C2]" />,
  SiLeetcode: <SiLeetcode className="w-7 h-7 text-[#FFA116]" />
};

export const CodingProfilesSection: React.FC = () => {
  return (
    <section id="coding-profiles" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Coding Profiles & Platforms"
          subtitle="Explore my activity across version control, professional networks, and competitive programming hubs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {codingProfilesData.map((profile, idx) => (
            <GlassCard key={idx} delay={idx * 0.1} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 6 }}
                    className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-inner"
                    style={{ color: profile.color }}
                  >
                    {iconMap[profile.icon] || <SiGithub className="w-7 h-7" />}
                  </motion.div>

                  <span className="px-3 py-1 text-[10px] font-extrabold rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                    {profile.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                  {profile.name}
                </h3>
                <span className="block text-xs font-bold text-sky-600 dark:text-sky-400">
                  @{profile.username}
                </span>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-700 dark:text-slate-300 font-bold">
                  Official Account
                </span>

                <motion.a
                  whileHover={{ scale: 1.1, x: 2 }}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20 text-xs font-extrabold hover:bg-sky-500 hover:text-white transition-all"
                >
                  Visit <FiExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
