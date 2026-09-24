import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDownload, FiExternalLink, FiAward } from 'react-icons/fi';
import { Certification } from '../../types';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certification,
  onClose
}) => {
  if (!certification) return null;

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
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                <FiAward className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{certification.title}</h3>
                <p className="text-xs text-slate-400">
                  Issuer: {certification.issuer} • Issue Date: {certification.issueDate}
                  {certification.licenseId && ` • License: #${certification.licenseId}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={certification.certificatePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-sky-400 hover:bg-slate-700 transition-colors"
              >
                <FiExternalLink className="w-3.5 h-3.5" /> Open Tab
              </a>
              <a
                href={certification.certificatePdf}
                download={`${certification.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
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

          {/* Embedded PDF Viewer */}
          <div className="flex-1 bg-slate-950 p-2 overflow-hidden">
            <iframe
              src={`${certification.certificatePdf}#toolbar=0`}
              title={`${certification.title} PDF`}
              className="w-full h-full rounded-xl border border-slate-800"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
