import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../../data/personal';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-5xl h-[85vh] bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-bold text-white">Curriculum Vitae Preview</h3>
              <p className="text-xs text-slate-400">Nithish G • Computer Science & Engineering</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-sky-400 hover:bg-slate-700 transition-colors"
              >
                <FiExternalLink className="w-3.5 h-3.5" /> Open Tab
              </a>
              <a
                href={personalInfo.resumePdf}
                download="Nithish_G_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-purple-600 text-xs font-bold text-white shadow-md hover:opacity-90 transition-opacity"
              >
                <FiDownload className="w-3.5 h-3.5" /> Download PDF
              </a>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded PDF iframe */}
          <div className="flex-1 bg-slate-950 p-2 overflow-hidden">
            <iframe
              src={`${personalInfo.resumePdf}#toolbar=0`}
              title="Nithish G Resume PDF"
              className="w-full h-full rounded-xl border border-slate-800"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
