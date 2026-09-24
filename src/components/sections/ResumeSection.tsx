import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { personalInfo } from '../../data/personal';
import { FiDownload, FiEye, FiCheckCircle, FiFileText } from 'react-icons/fi';

interface ResumeSectionProps {
  onOpenModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenModal }) => {
  return (
    <section id="resume" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Curriculum Vitae"
          subtitle="View or download my official software engineering resume."
        />

        <GlassCard className="max-w-4xl mx-auto p-8 md:p-12 text-center border-slate-200 dark:border-slate-800 shadow-2xl">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 p-0.5 shadow-xl shadow-sky-500/20">
              <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center text-white">
                <FiFileText className="w-10 h-10 text-sky-400" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {personalInfo.name} — Official Resume
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 font-medium mt-2 max-w-xl mx-auto">
                Comprehensive overview of my software development skills, IoT projects, academic qualifications, and technical accreditations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-lg py-4">
              {[
                'B.E. Computer Science',
                'Oracle & MongoDB Certified',
                'Software & IoT Projects'
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5"
                >
                  <FiCheckCircle className="text-sky-500 w-3.5 h-3.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModal}
                className="px-7 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 shadow-lg shadow-sky-500/25 flex items-center gap-2"
              >
                <FiEye className="w-4 h-4" /> Preview Resume PDF
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.resumePdf}
                download="Nithish_G_Resume.pdf"
                className="px-7 py-3.5 rounded-full text-sm font-extrabold glass-panel text-slate-900 dark:text-white hover:border-sky-400 flex items-center gap-2"
              >
                <FiDownload className="w-4 h-4 text-sky-500" /> Download PDF
              </motion.a>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
