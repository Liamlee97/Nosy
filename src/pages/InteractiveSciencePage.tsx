import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { motion } from 'framer-motion';
import { Microscope, Construction } from 'lucide-react';

export default function InteractiveSciencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 flex flex-col">
      <SEO
        title="Interactive Basic Science - Nosy"
        description="Our interactive science modules are currently under construction. Check back soon for deep dives into olfactory biology!"
      />
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-700 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 text-blue-100 dark:text-slate-700/30 opacity-50">
              <Microscope className="w-64 h-64" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <Construction className="w-10 h-10" />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
                Under Construction
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                We're currently building our interactive <strong className="text-gray-800 dark:text-gray-200">Olfactory Epithelium Explorer</strong>! 
                Check back soon to dive deep into the tissue where smell begins.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-medium border border-slate-200 dark:border-slate-700">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                Development in progress...
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
