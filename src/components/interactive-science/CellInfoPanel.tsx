import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCellById, getPerturbationsForCell, type CellType, type Perturbation } from '@/data/oeData';
import { FlaskConical, Dna, ChevronRight, X, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CellInfoPanelProps {
  selectedCellId: string | null;
  onClose: () => void;
  onRunPerturbation: (perturbationId: string) => void;
}

export default function CellInfoPanel({ selectedCellId, onClose, onRunPerturbation }: CellInfoPanelProps) {
  const cell = selectedCellId ? getCellById(selectedCellId) : null;
  const perturbations = selectedCellId ? getPerturbationsForCell(selectedCellId) : [];

  return (
    <AnimatePresence mode="wait">
      {cell && (
        <motion.div
          key={cell.id}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="mt-8 max-w-4xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-2xl overflow-hidden">
            {/* Colored accent bar */}
            <div
              className="h-2"
              style={{ background: `linear-gradient(90deg, ${cell.color}, ${cell.hoverColor})` }}
            />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
              aria-label="Close panel"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: cell.color }}
                >
                  <Microscope className="w-7 h-7" style={{ color: cell.darkColor }} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{cell.name}</h3>

                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {cell.description}
              </p>

              <div className="mb-8">
                {/* Markers */}
                <div className="rounded-xl bg-gray-50 dark:bg-slate-800/50 p-4 border border-gray-100 dark:border-slate-700">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Dna className="w-4 h-4 text-blue-500" />
                    Molecular Markers
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cell.markers.map((marker) => (
                      <span
                        key={marker}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      >
                        {marker}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Perturbation experiments */}
              {perturbations.length > 0 && (
                <div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FlaskConical className="w-5 h-5 text-purple-500" />
                    Available Experiments
                  </h4>
                  <div className="space-y-3">
                    {perturbations.map((p) => (
                      <motion.div
                        key={p.id}
                        whileHover={{ scale: 1.01 }}
                        className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border border-purple-200 dark:border-purple-800 cursor-pointer group"
                        onClick={() => onRunPerturbation(p.id)}
                      >
                        <div>
                          <h5 className="font-semibold text-gray-900 dark:text-white">{p.name}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{p.shortDescription}</p>
                        </div>
                        <Button
                          size="sm"
                          className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg group-hover:shadow-purple-300 dark:group-hover:shadow-purple-900 transition-shadow"
                        >
                          Run Experiment
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* No experiments message */}
              {perturbations.length === 0 && (
                <div className="text-center py-6 rounded-xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700">
                  <FlaskConical className="w-8 h-8 text-gray-300 dark:text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    No perturbation experiments available for this cell type yet.
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    More experiments coming soon!
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
