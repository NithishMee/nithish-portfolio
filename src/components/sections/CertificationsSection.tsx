import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../common/SectionHeader';
import { GlassCard } from '../common/GlassCard';
import { certificationsData } from '../../data/certifications';
import { Certification } from '../../types';
import { SiMongodb } from 'react-icons/si';
import { FaDatabase, FaCheckCircle, FaJava } from 'react-icons/fa';
import { FiEye, FiDownload } from 'react-icons/fi';

const logoMap: Record<string, React.ReactNode> = {
  SiMongodb: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
  FaJava: <FaJava className="w-8 h-8 text-[#007396]" />,
  SiOracle: <FaDatabase className="w-8 h-8 text-[#F80000]" />
};

interface CertificationsSectionProps {
  onSelectCertificate: (cert: Certification) => void;
}

export const CertificationsSection: React.FC<CertificationsSectionProps> = ({
  onSelectCertificate
}) => {
  return (
    <section id="certifications" className="py-20 sm:py-24 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Industry Certifications"
          subtitle="Official technical accreditations issued by industry-leading cloud, language, and database platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificationsData.map((cert, idx) => (
            <GlassCard key={cert.id} delay={idx * 0.1} className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner"
                  >
                    {logoMap[cert.logo] || <SiMongodb className="w-8 h-8 text-sky-400" />}
                  </motion.div>

                  <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <FaCheckCircle className="w-3.5 h-3.5" /> Verified
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                <div className="space-y-1 mb-4">
                  <span className="block text-xs font-bold text-sky-600 dark:text-sky-400">
                    Issuer: {cert.issuer}
                  </span>
                  <span className="block text-[11px] font-bold text-slate-600 dark:text-slate-400">
                    Issued: {cert.issueDate} {cert.licenseId && `• License: #${cert.licenseId}`}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-xs uppercase tracking-wider text-slate-700 dark:text-slate-300 font-extrabold block">
                    Verified Competencies:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelectCertificate(cert)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white text-xs font-extrabold shadow-md transition-transform"
                >
                  <FiEye className="w-4 h-4" /> View Certificate
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  href={cert.certificatePdf}
                  download={`${cert.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-sky-500 border border-slate-200 dark:border-slate-800 transition-colors"
                  title="Download Certificate PDF"
                >
                  <FiDownload className="w-4 h-4" />
                </motion.a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
