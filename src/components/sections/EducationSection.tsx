import React from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { educationData } from '../../data/education';
import { FaGraduationCap, FaSchool, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Education"
          subtitle="Academic degree, institutional background, and scholastic performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <GlassCard key={edu.id} delay={idx * 0.1} className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                    {idx === 0 ? (
                      <FaGraduationCap className="w-7 h-7 text-sky-500" />
                    ) : (
                      <FaSchool className="w-7 h-7 text-purple-500" />
                    )}
                  </div>

                  <span className="px-3.5 py-1.5 text-xs font-extrabold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {edu.scoreLabel}: {edu.scoreValue}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
                  {edu.degree}
                </h3>
                <span className="block text-sm font-bold text-sky-600 dark:text-sky-400 mb-3">
                  {edu.institution}
                </span>

                <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-slate-700 dark:text-slate-300 mb-6">
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt className="text-sky-500" /> {edu.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-purple-500" /> {edu.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-extrabold text-slate-700 dark:text-slate-300 block">
                    Academic Highlights:
                  </span>
                  <ul className="space-y-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
