import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Hammer } from 'lucide-react';

export default function InteractiveSciencePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col">
      <SEO
        title="Interactive Basic Science - Nosy"
        description="Interactive learning modules for olfactory science (Under Construction)"
      />
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20 px-4">
        <div className="max-w-2xl text-center space-y-6">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-blue-100 dark:bg-blue-900/30 rounded-full animate-pulse">
              <Hammer className="w-16 h-16 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Interactive Basic Science
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
            We are currently building interactive modules to help you explore and understand the science of smell. 
          </p>
          <div className="inline-block mt-4 px-6 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 font-semibold rounded-full border border-yellow-200 dark:border-yellow-800">
            Page Under Construction
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
