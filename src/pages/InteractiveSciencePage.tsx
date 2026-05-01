import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import OECrossSection from '@/components/interactive-science/OECrossSection';
import CellInfoPanel from '@/components/interactive-science/CellInfoPanel';
import PerturbationView from '@/components/interactive-science/PerturbationView';
import { motion } from 'framer-motion';
import { Layers, Microscope, FlaskConical } from 'lucide-react';

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
        <section className="px-4 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <OECrossSection
              selectedCellId={selectedCellId}
              hoveredCellId={hoveredCellId}
              onCellSelect={handleCellSelect}
              onCellHover={setHoveredCellId}
            />
          </motion.div>

          {/* Cell Info Panel */}
          <CellInfoPanel
            selectedCellId={selectedCellId}
            onClose={handleCellDeselect}
            onRunPerturbation={handleRunPerturbation}
          />

          {/* Perturbation View */}
          <PerturbationView
            perturbationId={activePerturbationId}
            onClose={handleClosePerturbation}
          />
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
                with two perturbation experiments. More cell types, experiments, and interactive modules are being developed.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
