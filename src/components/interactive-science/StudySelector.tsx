import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronDown, ChevronUp, FlaskConical } from 'lucide-react';
import { scienceStudies, Study, Experiment } from '@/data/studiesData';
import { Button } from '@/components/ui/button';

interface StudySelectorProps {
  onSelectExperiment: (resultState: string | null) => void;
  activeExperimentState: string | null;
}

export default function StudySelector({ onSelectExperiment, activeExperimentState }: StudySelectorProps) {
  const [expandedStudyId, setExpandedStudyId] = useState<string | null>(scienceStudies[0]?.id || null);

  const toggleStudy = (studyId: string) => {
    setExpandedStudyId((prev) => (prev === studyId ? null : studyId));
  };

  const handleExperimentClick = (experiment: Experiment) => {
    if (activeExperimentState === experiment.resultState) {
      // Toggle off if already active
      onSelectExperiment(null);
    } else {
      onSelectExperiment(experiment.resultState);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Basic Science Studies</h2>
      </div>

      <div className="space-y-4">
        {scienceStudies.map((study) => (
          <div
            key={study.id}
            className="rounded-2xl border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggleStudy(study.id)}
              className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 dark:bg-slate-800/50 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="pr-4">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {study.authors} ({study.year}) — <span className="italic">{study.journal}</span>
                </p>
              </div>
              <div className="flex-shrink-0 text-gray-400 dark:text-gray-500">
                {expandedStudyId === study.id ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </div>
            </button>

            <AnimatePresence>
              {expandedStudyId === study.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-5 border-t border-gray-100 dark:border-slate-800">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {study.summary}
                    </p>

                    <div className="space-y-4">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                        Experiments & Findings
                      </h4>
                      {study.experiments.map((exp) => {
                        const isActive = activeExperimentState === exp.resultState;

                        return (
                          <div
                            key={exp.id}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              isActive
                                ? 'border-purple-500 bg-purple-50/50 dark:border-purple-500 dark:bg-purple-900/10'
                                : 'border-gray-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-purple-200 dark:hover:border-purple-800/50'
                            }`}
                          >
                            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <FlaskConical className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                  <h5 className="font-bold text-gray-900 dark:text-white">
                                    {exp.name}
                                  </h5>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                  {exp.description}
                                </p>
                                <div className="bg-gray-50 dark:bg-slate-800 rounded-lg p-3 text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-slate-700">
                                  <strong className="text-gray-900 dark:text-white">Finding:</strong>{' '}
                                  {exp.findings}
                                </div>
                              </div>

                              <div className="flex-shrink-0 mt-4 md:mt-0 w-full md:w-auto">
                                <Button
                                  onClick={() => handleExperimentClick(exp)}
                                  variant={isActive ? 'default' : 'outline'}
                                  className={`w-full ${
                                    isActive
                                      ? 'bg-purple-600 hover:bg-purple-700 text-white'
                                      : 'border-purple-200 text-purple-700 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-900/30'
                                  }`}
                                >
                                  {isActive ? 'Reset View' : 'Show Result on Diagram'}
                                </Button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
