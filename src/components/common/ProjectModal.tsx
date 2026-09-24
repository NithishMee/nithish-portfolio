import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCheckCircle, FiAlertCircle, FiBookOpen, FiChevronLeft, FiChevronRight, FiImage } from 'react-icons/fi';
import { Project } from '../../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  const screenshots = project.screenshots && project.screenshots.length > 0
    ? project.screenshots
    : [project.image];

  const currentImage = screenshots[activeImageIndex] || project.image;

  const handlePrev = () => {
    setActiveImageIndex(prev => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex(prev => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  const isMobileProject = project.category === 'Mobile';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 my-auto text-slate-200 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar (Centered) */}
          <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 backdrop-blur-sm sticky top-0 z-20">
            <div className="text-left">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                {project.category} Project
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-8">
            {/* Perfectly Centered Interactive Screenshot Viewer */}
            <div className="flex flex-col items-center justify-center space-y-4 w-full">
              <div className={`relative w-full ${isMobileProject ? 'max-w-xs sm:max-w-sm aspect-[9/16] max-h-[440px]' : 'max-w-2xl aspect-video max-h-[380px]'} mx-auto rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl flex items-center justify-center p-2`}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    src={currentImage}
                    alt={`${project.title} slide ${activeImageIndex + 1}`}
                    className="max-h-full max-w-full object-contain mx-auto rounded-xl"
                  />
                </AnimatePresence>

                {/* Left & Right Arrow Controls */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-sky-500 transition-colors border border-slate-700 shadow-xl z-10"
                      aria-label="Previous Screenshot"
                    >
                      <FiChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/90 text-white hover:bg-sky-500 transition-colors border border-slate-700 shadow-xl z-10"
                      aria-label="Next Screenshot"
                    >
                      <FiChevronRight className="w-5 h-5" />
                    </button>

                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-900/90 text-xs font-bold text-white border border-slate-700 flex items-center gap-1.5 z-10">
                      <FiImage className="text-sky-400" />
                      {activeImageIndex + 1} / {screenshots.length}
                    </div>
                  </>
                )}
              </div>

              {/* Centered Thumbnails Gallery Strip */}
              {screenshots.length > 1 && (
                <div className="w-full flex items-center justify-start sm:justify-center gap-2.5 overflow-x-auto py-2 px-2 scrollbar-thin max-w-full mx-auto">
                  {screenshots.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative ${isMobileProject ? 'w-14 h-20' : 'w-20 h-14'} rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        activeImageIndex === idx
                          ? 'border-sky-400 scale-105 shadow-md shadow-sky-500/30'
                          : 'border-slate-800 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Tech Badges (Centered) */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-slate-800 text-sky-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Full Description */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                Overview
              </h4>
              <p className="text-slate-300 leading-relaxed text-base">{project.fullDescription}</p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                <div className="flex items-center gap-2 text-amber-400 font-semibold mb-2">
                  <FiAlertCircle className="w-5 h-5" /> Problem Statement
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.problemStatement}</p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                  <FiCheckCircle className="w-5 h-5" /> Engineering Solution
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/50 border border-slate-800 text-sm text-slate-300"
                  >
                    <FiCheckCircle className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges & Lessons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <FiAlertCircle className="text-rose-400" /> Engineering Challenges
                </h4>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, idx) => (
                    <li key={idx} className="text-sm text-slate-400 list-disc list-inside">
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <FiBookOpen className="text-indigo-400" /> Lessons Learned
                </h4>
                <ul className="space-y-2">
                  {project.lessonsLearned.map((lesson, idx) => (
                    <li key={idx} className="text-sm text-slate-400 list-disc list-inside">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="p-6 border-t border-slate-800 bg-slate-950/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white hover:bg-slate-700 font-bold text-sm transition-colors border border-slate-700"
              >
                <FiGithub className="w-4 h-4" /> View GitHub Repository
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-bold text-sm hover:opacity-90 transition-opacity shadow-md"
                >
                  <FiExternalLink className="w-4 h-4" /> Live Demo
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-700 text-slate-400 hover:text-white font-bold text-sm transition-colors"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
