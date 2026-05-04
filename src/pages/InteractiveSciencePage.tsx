import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Construction, FlaskConical, Microscope, Layers } from 'lucide-react';

export default function InteractiveSciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 flex flex-col">
      <SEO
        title="Interactive Basic Science - Nosy"
        description="Explore the olfactory epithelium interactively. Learn about cell types, molecular markers, and real scientific experiments."
      />
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full text-center"
        >
          {/* Animated construction icon */}
          <motion.div
            animate={{ rotate: [0, -8, 8, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-amber-100 dark:bg-amber-900/30 mb-8"
          >
            <Construction className="w-10 h-10 text-amber-600 dark:text-amber-400" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Under Construction
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-10">
            We're building something exciting — an interactive exploration of the olfactory epithelium
            with real experiments you can run. Check back soon!
          </p>

          {/* Feature preview pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100/60 dark:bg-green-900/20 text-green-600 dark:text-green-500 text-sm font-medium opacity-60">
              <Layers className="w-4 h-4" />
              Explore Layers
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/60 dark:bg-blue-900/20 text-blue-600 dark:text-blue-500 text-sm font-medium opacity-60">
              <Microscope className="w-4 h-4" />
              View Cell Details
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100/60 dark:bg-purple-900/20 text-purple-600 dark:text-purple-500 text-sm font-medium opacity-60">
              <FlaskConical className="w-4 h-4" />
              Run Experiments
            </div>
          </div>

          {/* Pulsing progress bar */}
          <div className="max-w-xs mx-auto">
            <div className="h-1.5 rounded-full bg-gray-200 dark:bg-slate-700 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                style={{ width: '60%' }}
              />
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

