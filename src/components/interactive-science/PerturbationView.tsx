import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getPerturbationById, getCellById, type Perturbation, type PerturbationStep } from '@/data/oeData';
import { ArrowRight, Play, RotateCcw, X, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PerturbationViewProps {
  perturbationId: string | null;
  onClose: () => void;
}

function StepNode({
  step,
  index,
  isActive,
  isPast,
}: {
  step: PerturbationStep;
  index: number;
  isActive: boolean;
  isPast: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: isPast || isActive ? 1 : 0.3,
        scale: isActive ? 1.08 : 1,
      }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {/* Node circle */}
      <motion.div
        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center border-3 shadow-lg transition-all duration-300 ${
          isActive
            ? 'border-blue-500 dark:border-blue-400 shadow-blue-200 dark:shadow-blue-900'
            : isPast
            ? 'border-gray-300 dark:border-gray-600'
            : 'border-gray-200 dark:border-gray-700'
        }`}
        style={{
          backgroundColor: isPast || isActive ? step.color : '#f3f4f6',
        }}
        animate={
          isActive
            ? {
                boxShadow: [
                  '0 0 0 0 rgba(59,130,246,0.2)',
                  '0 0 0 12px rgba(59,130,246,0)',
                ],
              }
            : {}
        }
        transition={
          isActive
            ? { duration: 1.5, repeat: Infinity, ease: 'easeOut' }
            : {}
        }
      >
        <span className="text-xs md:text-sm font-bold text-gray-800 text-center leading-tight px-1">
          {index + 1}
        </span>
      </motion.div>

      {/* Label */}
      <motion.span
        className={`mt-2 text-xs md:text-sm font-semibold text-center max-w-[90px] md:max-w-[110px] leading-tight ${
          isActive
            ? 'text-gray-900 dark:text-white'
            : isPast
            ? 'text-gray-600 dark:text-gray-400'
            : 'text-gray-400 dark:text-gray-600'
        }`}
      >
        {step.label}
      </motion.span>
    </motion.div>
  );
}

function StepArrow({ isActive, isPast }: { isActive: boolean; isPast: boolean }) {
  return (
    <motion.div
      className="flex items-center justify-center mx-1 md:mx-2 mt-[-20px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: isPast || isActive ? 0.8 : 0.2 }}
      transition={{ duration: 0.3 }}
    >
      <ArrowRight
        className={`w-5 h-5 md:w-6 md:h-6 ${
          isPast || isActive
            ? 'text-blue-500 dark:text-blue-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    </motion.div>
  );
}

export default function PerturbationView({ perturbationId, onClose }: PerturbationViewProps) {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const perturbation = perturbationId ? getPerturbationById(perturbationId) : null;

  // Auto-advance steps when playing
  useEffect(() => {
    if (!isPlaying || !perturbation) return;

    if (currentStep >= perturbation.steps.length - 1) {
      setIsPlaying(false);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isPlaying, currentStep, perturbation]);

  // Reset when perturbation changes
  useEffect(() => {
    setCurrentStep(-1);
    setIsPlaying(false);
  }, [perturbationId]);

  const handlePlay = () => {
    setCurrentStep(0);
    setIsPlaying(true);
  };

  const handleReset = () => {
    setCurrentStep(-1);
    setIsPlaying(false);
  };

  const handleStepForward = () => {
    if (!perturbation) return;
    if (currentStep < perturbation.steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleStepBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {perturbation && (
        <motion.div
          key={perturbation.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mt-8 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 shadow-2xl overflow-hidden">
            {/* Header gradient */}
            <div className="h-2 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500" />

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors z-10"
              aria-label="Close experiment"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="p-6 md:p-8">
              {/* Title */}
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-1">
                  Experiment Simulation
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {perturbation.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
                  {perturbation.fullDescription}
                </p>
              </div>

              {/* Step flow visualization */}
              <div className="bg-gray-50 dark:bg-slate-800/50 rounded-xl p-6 mb-6 border border-gray-100 dark:border-slate-700 overflow-x-auto">
                <div className="flex items-start justify-center min-w-fit">
                  {perturbation.steps.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <StepNode
                        step={step}
                        index={idx}
                        isActive={currentStep === idx}
                        isPast={currentStep > idx}
                      />
                      {idx < perturbation.steps.length - 1 && (
                        <StepArrow
                          isActive={currentStep === idx}
                          isPast={currentStep > idx}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Current step description */}
              <AnimatePresence mode="wait">
                {currentStep >= 0 && currentStep < perturbation.steps.length && (
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-5 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: perturbation.steps[currentStep].color }}
                      >
                        <span className="text-xs font-bold text-gray-800">{currentStep + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          Step {currentStep + 1}: {perturbation.steps[currentStep].label}
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 leading-relaxed">
                          {perturbation.steps[currentStep].description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {currentStep === -1 ? (
                  <Button
                    onClick={handlePlay}
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Run Experiment
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={handleStepBack}
                      variant="outline"
                      size="sm"
                      disabled={currentStep <= 0}
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" />
                      Back
                    </Button>
                    <Button
                      onClick={handlePlay}
                      size="sm"
                      disabled={isPlaying}
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      {isPlaying ? 'Playing...' : 'Auto-Play'}
                    </Button>
                    <Button
                      onClick={handleStepForward}
                      variant="outline"
                      size="sm"
                      disabled={!perturbation || currentStep >= perturbation.steps.length - 1}
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                    <Button onClick={handleReset} variant="outline" size="sm">
                      <RotateCcw className="w-4 h-4 mr-1" />
                      Reset
                    </Button>
                  </>
                )}
              </div>

              {/* Reference */}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-slate-700">
                <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="font-medium">Reference:</span> {perturbation.reference}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
