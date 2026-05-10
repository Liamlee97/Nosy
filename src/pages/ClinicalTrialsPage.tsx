import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ClinicalTrialsTable } from '@/components/ClinicalTrialsTable';

export default function ClinicalTrialsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <SEO
        title="Clinical Trials - Nosy"
        description="Explore ongoing and past clinical trials for olfactory disorders."
      />
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 dark:text-white">
            Clinical Trials
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Browse currently active, recruiting, and completed clinical trials relevant to smell disorders.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ClinicalTrialsTable />
        </div>
      </div>

      <Footer />
    </div>
  );
}
