import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import OECrossSection from '@/components/interactive-science/OECrossSection';
import CellInfoPanel from '@/components/interactive-science/CellInfoPanel';
import PerturbationView from '@/components/interactive-science/PerturbationView';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Microscope, FlaskConical } from 'lucide-react';
import { cellTypes } from '@/data/oeData';

export default function InteractiveSciencePage() {
  const [selectedCellId, setSelectedCellId] = useState<string | null>(null);
  const [hoveredCellId, setHoveredCellId] = useState<string | null>(null);
  const [activePerturbationId, setActivePerturbationId] = useState<string | null>(null);

  const handleCellSelect = (cellId: string) => {
    setSelectedCellId(cellId);
    setActivePerturbationId(null);
  };

  const handleCellDeselect = () => {
    setSelectedCellId(null);
    setActivePerturbationId(null);
  };

  const handleRunPerturbation = (perturbationId: string) => {
    setActivePerturbationId(perturbationId);
  };

  const handleClosePerturbation = () => {
    setActivePerturbationId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 flex flex-col">
      <SEO
        title="Interactive Basic Science - Nosy"
        description="Explore the olfactory epithelium interactively. Learn about cell types, molecular markers, and real scientific experiments."
      />
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Olfactory Epithelium Explorer
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Dive into the tissue where smell begins. Hover over the cross-section to learn about each cell type,
                then run real experiments to see how the epithelium responds to perturbations.
              </p>
            </motion.div>

            {/* Quick-guide pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                <Layers className="w-4 h-4" />
                Explore Layers
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium">
                <Microscope className="w-4 h-4" />
                View Cell Details
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 text-sm font-medium">
                <FlaskConical className="w-4 h-4" />
                Run Experiments
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Diagram Section */}
        <section className="px-4 pb-8 max-w-[90rem] mx-auto">
          <div className="flex flex-col xl:flex-row gap-6 items-start justify-center">
            {/* Diagram Container (Pushed left) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full xl:w-2/3 flex justify-end"
            >
              <OECrossSection
                selectedCellId={selectedCellId}
                hoveredCellId={hoveredCellId}
                onCellSelect={handleCellSelect}
                onCellHover={setHoveredCellId}
              />
            </motion.div>

            {/* Info Panel Container (Right hand side) */}
            <div className="w-full xl:w-1/3 sticky top-24">
              <CellInfoPanel
                selectedCellId={selectedCellId}
                onClose={handleCellDeselect}
                onRunPerturbation={handleRunPerturbation}
              />

              <AnimatePresence>
                {hoveredCellId && !selectedCellId && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="mt-8 max-w-sm p-6 rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-xl pointer-events-none"
                  >
                    {(() => {
                      const cell = cellTypes.find(c => c.id === hoveredCellId);
                      if (!cell) return null;
                      return (
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="w-5 h-5 rounded-full border border-gray-300 dark:border-gray-600 shadow-inner" style={{ backgroundColor: cell.color }} />
                            <h4 className="font-bold text-xl text-gray-900 dark:text-white leading-tight">{cell.name}</h4>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed mb-4">{cell.description}</p>
                          <div className="pt-3 border-t border-gray-100 dark:border-slate-800 flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{cell.layer.replace('-', ' ')}</span>
                            <span className="text-sm text-blue-600 dark:text-blue-400 font-bold">Click to select</span>
                          </div>
                        </div>
                      );
                    })()}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Perturbation View */}
          <div className="mt-8">
            <PerturbationView
              perturbationId={activePerturbationId}
              onClose={handleClosePerturbation}
            />
          </div>
        </section>

        {/* Bottom info section */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center p-6 rounded-xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border border-gray-200 dark:border-slate-700"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <strong className="text-gray-700 dark:text-gray-300">Prototype v1</strong> — This interactive module currently features the olfactory epithelium cross-section
                with description of each cell type. Interactive experiments and perturbations are being developed.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
