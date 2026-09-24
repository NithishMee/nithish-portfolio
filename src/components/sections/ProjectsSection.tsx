import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { projectsData } from '../../data/projects';
import { Project } from '../../types';
import { FiGithub, FiExternalLink, FiMaximize2, FiCpu, FiGlobe, FiSmartphone } from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Web' | 'Mobile' | 'IoT'>('All');

  const filterOptions: Array<'All' | 'AI/ML' | 'Web' | 'Mobile' | 'IoT'> = [
    'All',
    'AI/ML',
    'Web',
    'Mobile',
    'IoT'
  ];

  const filteredProjects =
    filter === 'All' ? projectsData : projectsData.filter(p => p.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return <FaBrain className="w-4 h-4 text-pink-400" />;
      case 'Web':
        return <FiGlobe className="w-4 h-4 text-sky-400" />;
      case 'IoT':
        return <FiCpu className="w-4 h-4 text-purple-400" />;
      case 'Mobile':
        return <FiSmartphone className="w-4 h-4 text-emerald-400" />;
      default:
        return <FiGlobe className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="Real-world deep learning systems, full-stack web platforms, mobile applications, and IoT architectures built with clean engineering."
        />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {filterOptions.map(cat => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-md'
                  : 'glass-panel text-slate-800 dark:text-slate-200 hover:text-sky-500'
              }`}
            >
              {cat} Projects
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
              >
                <GlassCard className="p-0 overflow-hidden h-full flex flex-col group border-slate-200 dark:border-slate-800">
                  {/* Clean White Background Thumbnail Banner for User Vector Icons */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-white flex items-center justify-center p-6 border-b border-slate-200 dark:border-slate-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-108 transition-transform duration-300 drop-shadow-sm"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 text-xs font-bold text-white flex items-center gap-1.5 border border-slate-700 shadow-md">
                      {getCategoryIcon(project.category)}
                      <span>{project.category}</span>
                    </div>

                    {/* Quick Expand Overlay Button */}
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onSelectProject(project)}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-sky-500 transition-colors border border-slate-700 shadow-lg"
                      title="View Full Case Study"
                    >
                      <FiMaximize2 className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-2 line-clamp-2 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.slice(0, 4).map(tech => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[10px] font-extrabold rounded-md bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-[10px] font-extrabold rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Highlighted Primary Action Button */}
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <motion.button
                        whileHover={{ scale: 1.04, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectProject(project)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 text-white text-xs font-extrabold shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/35 transition-all"
                      >
                        <span>Explore Details</span>
                        <span className="text-sm font-bold">→</span>
                      </motion.button>

                      <div className="flex items-center gap-3">
                        <motion.a
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors"
                          title="GitHub Repository"
                        >
                          <FiGithub className="w-5 h-5" />
                        </motion.a>
                        {project.liveUrl && (
                          <motion.a
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-700 dark:text-slate-300 hover:text-sky-500 transition-colors"
                            title="Live Demo"
                          >
                            <FiExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
