import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { skillCategories } from '../../data/skills';
import {
  SiPython,
  SiC,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiDjango,
  SiFastapi,
  SiPytorch,
  SiTensorflow
} from 'react-icons/si';
import { FaJava, FaServer, FaGraduationCap, FaAws, FaCss3Alt, FaBrain } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  SiPython: <SiPython />,
  SiC: <SiC />,
  FaJava: <FaJava />,
  SiJavascript: <SiJavascript />,
  SiReact: <SiReact />,
  SiHtml5: <SiHtml5 />,
  SiCss3: <FaCss3Alt />,
  SiTailwindcss: <SiReact />,
  SiNodedotjs: <SiNodedotjs />,
  SiExpress: <SiExpress />,
  SiMysql: <SiMysql />,
  SiMongodb: <SiMongodb />,
  SiGit: <SiGit />,
  SiAmazonaws: <FaAws />,
  SiDocker: <SiDocker />,
  FaServer: <FaServer />,
  SiDjango: <SiDjango />,
  SiFastapi: <SiFastapi />,
  SiPytorch: <SiPytorch />,
  SiTensorflow: <SiTensorflow />,
  FaBrain: <FaBrain />
};

const ecosystemItems = [
  { name: 'PyTorch', icon: <SiPytorch className="w-10 h-10 text-[#EE4C2C]" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="w-10 h-10 text-[#FF6F00]" /> },
  { name: 'Python', icon: <SiPython className="w-10 h-10 text-[#3776AB]" /> },
  { name: 'React', icon: <SiReact className="w-10 h-10 text-[#61DAFB]" /> },
  { name: 'Node.JS', icon: <SiNodedotjs className="w-10 h-10 text-[#339933]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-10 h-10 text-[#47A248]" /> },
  { name: 'MySQL', icon: <SiMysql className="w-10 h-10 text-[#4479A1]" /> },
  { name: 'FastAPI', icon: <SiFastapi className="w-10 h-10 text-[#009688]" /> },
  { name: 'Django', icon: <SiDjango className="w-10 h-10 text-[#092E20]" /> },
  { name: 'Docker', icon: <SiDocker className="w-10 h-10 text-[#2496ED]" /> },
  { name: 'Git', icon: <SiGit className="w-10 h-10 text-[#F05032]" /> },
  { name: 'AWS', icon: <FaAws className="w-10 h-10 text-[#FF9900]" /> },
  { name: 'Java', icon: <FaJava className="w-10 h-10 text-[#007396]" /> },
  { name: 'C', icon: <SiC className="w-10 h-10 text-[#A8B9CC]" /> }
];

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeEcosystemIndex, setActiveEcosystemIndex] = useState<number>(0);

  // Pure straight vertical zoom wave animation loop (600ms per step)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEcosystemIndex(prev => (prev + 1) % ecosystemItems.length);
    }, 600);
    return () => clearInterval(interval);
  }, [ecosystemItems.length]);

  const categories = ['All', ...skillCategories.map(cat => cat.title)];

  const filteredCategories =
    activeCategory === 'All'
      ? skillCategories
      : skillCategories.filter(cat => cat.title === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28 relative flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          title="Skills & Tech Stack"
          subtitle="Comprehensive overview of programming languages, frameworks, databases, and development tools."
          centered={true}
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-md'
                  : 'glass-panel text-slate-800 dark:text-slate-200 hover:text-sky-500'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-10 max-w-6xl mx-auto">
          {filteredCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6 flex items-center justify-center gap-3 text-center">
                <span className="w-3 h-3 rounded-full bg-sky-500 animate-pulse" />
                {category.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, idx) => (
                  <GlassCard key={skill.name} delay={idx * 0.05} className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 8 }}
                          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl p-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                          style={{ color: skill.color || '#38bdf8' }}
                        >
                          {iconMap[skill.iconName] || <SiJavascript />}
                        </motion.div>
                        <div>
                          <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] text-slate-700 dark:text-slate-300 font-bold">Proficiency</span>
                        </div>
                      </div>
                      <span className="text-xs font-extrabold text-sky-600 dark:text-sky-400">
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Animated Progress Bar */}
                    <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-sky-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </GlassCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Large Icon Wall with Straight Vertical Zoom Wave */}
        <div className="mt-28 sm:mt-32 lg:mt-36 max-w-6xl mx-auto text-center">
          <h3 className="text-center text-sm font-extrabold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-8">
            Core Engineering Ecosystem
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {ecosystemItems.map((item, idx) => {
              const isWaveActive = idx === activeEcosystemIndex;

              return (
                <motion.div
                  key={item.name}
                  animate={
                    isWaveActive
                      ? {
                          scale: 1.25,
                          rotate: 0,
                          y: -8,
                          boxShadow: '0 12px 25px -5px rgba(56, 189, 248, 0.35)',
                          borderColor: '#38bdf8'
                        }
                      : {
                          scale: 1,
                          rotate: 0,
                          y: 0,
                          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                          borderColor: 'rgba(226, 232, 240, 0.8)'
                        }
                  }
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="p-4 rounded-2xl glass-panel flex flex-col items-center gap-2 border-slate-200 dark:border-slate-800 border"
                >
                  {item.icon}
                  <span className="text-[11px] font-bold text-slate-800 dark:text-slate-200">
                    {item.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
