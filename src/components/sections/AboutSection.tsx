import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { personalInfo } from '../../data/personal';
import {
  FiCheckCircle,
  FiLayout,
  FiCpu,
  FiDatabase,
  FiSmartphone,
  FiAward
} from 'react-icons/fi';
import { FaBrain } from 'react-icons/fa';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 relative flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionHeader
          title="About Me"
          subtitle="Engineering philosophy, academic background, and core technical competencies."
          centered={true}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto"
        >
          {/* Left Main Biography Story Card */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <GlassCard hoverEffect={false} className="p-8 md:p-10 h-full flex flex-col justify-between border-slate-200 dark:border-slate-800 shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-8 rounded-full bg-gradient-to-b from-sky-500 to-purple-600" />
                  <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Full Stack Developer & Engineering Undergrad
                  </motion.h3>
                </div>

                <motion.p variants={itemVariants} className="text-slate-800 dark:text-slate-200 leading-relaxed mb-5 font-medium text-base sm:text-lg">
                  I am a Computer Science & Engineering student at{' '}
                  <strong className="text-sky-600 dark:text-sky-400 font-bold">Kongu Engineering College</strong> (Perundurai, Erode), expected to graduate in 2027. My engineering background is backed by a solid <strong className="text-emerald-600 dark:text-emerald-400 font-bold">7.94 CGPA</strong> foundation paired with hands-on experience developing full-stack web applications, mobile platforms, and IoT embedded systems.
                </motion.p>

                <motion.p variants={itemVariants} className="text-slate-800 dark:text-slate-200 leading-relaxed mb-5 font-medium text-base">
                  What drives my passion for software engineering is building practical solutions to real-world challenges. Whether architecting blood donor matching networks during emergencies, designing maritime GPS geofencing alerts for fishermen at sea, or engineering mobile showroom catalog applications, I prioritize clean code architecture, performance, and intuitive user experiences.
                </motion.p>

                <motion.p variants={itemVariants} className="text-slate-800 dark:text-slate-200 leading-relaxed font-medium text-base">
                  Known for clear technical communication, analytical problem-solving, and continuous learning, I am eager to join high-performing engineering teams to build scalable, impactful software products.
                </motion.p>
              </div>

              {/* Bottom Quick Badges Strip */}
              <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="block text-[11px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Degree</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">B.E. CSE</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="block text-[11px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">CGPA</span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">7.94 / 10</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="block text-[11px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Batch</span>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400">2023 - 2027</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <span className="block text-[11px] font-extrabold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Location</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Tiruppur, IN</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Core Pillars & Highlights */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {/* Core Competencies Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Full Stack Architecture', text: 'Reactive web apps using React, Node.js, Express, MySQL & MongoDB.', icon: <FiLayout className="w-5 h-5 text-sky-500" /> },
                { title: 'Machine Learning / Deep Learning', text: 'Model training, neural networks, and predictive data analysis using Python.', icon: <FaBrain className="w-5 h-5 text-purple-500" /> },
                { title: 'Database Engineering', text: 'Relational MySQL schemas & scalable MongoDB document stores.', icon: <FiDatabase className="w-5 h-5 text-indigo-500" /> },
                { title: 'Mobile UI Development', text: 'Interactive mobile user interfaces, spec comparisons & booking flows.', icon: <FiSmartphone className="w-5 h-5 text-emerald-500" /> }
              ].map((strength, idx) => (
                <GlassCard key={idx} delay={idx * 0.08} className="p-5 flex flex-col justify-between">
                  <div>
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 w-fit mb-3">
                      {strength.icon}
                    </div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm mb-1.5">{strength.title}</h4>
                    <p className="text-xs text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                      {strength.text}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>

            {/* Areas of Specialization Card */}
            <GlassCard hoverEffect={false} className="p-6 border-slate-200 dark:border-slate-800">
              <h4 className="text-base font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <FiAward className="text-sky-500" /> Key Areas of Focus
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalInfo.areasOfInterest.map((interest, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-500/20"
                  >
                    <FiCheckCircle className="w-3.5 h-3.5 text-sky-500" />
                    {interest}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
