import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { achievementsData } from '../../data/achievements';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  FaTrophy: <FaTrophy className="w-6 h-6 text-amber-400" />,
  FaMedal: <FaMedal className="w-6 h-6 text-sky-400" />,
  FaStar: <FaStar className="w-6 h-6 text-purple-400" />
};

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Achievements & Recognition"
          subtitle="Key milestones, hackathon awards, and technical project presentations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => (
            <GlassCard key={item.id} delay={idx * 0.1} className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner">
                    {iconMap[item.icon] || <FaTrophy className="w-6 h-6 text-amber-400" />}
                  </div>

                  <span className="px-3.5 py-1.5 text-xs font-extrabold rounded-full bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <span className="block text-xs font-bold text-sky-600 dark:text-sky-400 mb-4">
                  {item.event} • {item.organization}
                </span>

                <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-extrabold text-slate-600 dark:text-slate-400">
                  Presented / Awarded
                </span>
                <span className="text-xs font-extrabold text-slate-900 dark:text-white">
                  {item.date}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
