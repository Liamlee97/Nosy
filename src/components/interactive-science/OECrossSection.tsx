import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cellTypes, type CellType } from '@/data/oeData';

interface OECrossSectionProps {
  selectedCellId: string | null;
  hoveredCellId: string | null;
  onCellSelect: (cellId: string) => void;
  onCellHover: (cellId: string | null) => void;
}

// Layout configuration for each cell layer in the SVG
const layerConfig: Record<string, { y: number; height: number; labelX: number }> = {
  'cilia':          { y: 0,   height: 50,  labelX: 500 },
  'sustentacular':  { y: 50,  height: 70,  labelX: 500 },
  'mosn':           { y: 120, height: 80,  labelX: 500 },
  'iosn':           { y: 200, height: 70,  labelX: 500 },
  'gbc':            { y: 270, height: 60,  labelX: 500 },
  'hbc':            { y: 330, height: 55,  labelX: 500 },
  'basal-lamina':   { y: 385, height: 25,  labelX: 500 },
};

// Small SVG cell shapes to give each layer character
function CellShapes({ cellId, y, height }: { cellId: string; y: number; height: number }) {
  const shapes: React.ReactNode[] = [];

  switch (cellId) {
    case 'cilia': {
      // Draw thin cilia lines projecting upward
      for (let i = 0; i < 40; i++) {
        const x = 30 + i * 24;
        const h = 15 + Math.random() * 25;
        shapes.push(
          <line
            key={`cilia-${i}`}
            x1={x}
            y1={y + height}
            x2={x + (Math.random() - 0.5) * 6}
            y2={y + height - h}
            stroke="currentColor"
            strokeWidth={1.5}
            opacity={0.5}
          />
        );
      }
      break;
    }
    case 'sustentacular': {
      // Tall columnar shapes
      for (let i = 0; i < 16; i++) {
        const x = 40 + i * 58;
        shapes.push(
          <rect
            key={`sus-${i}`}
            x={x}
            y={y + 6}
            width={14}
            height={height - 12}
            rx={4}
            fill="currentColor"
            opacity={0.2}
          />
        );
      }
      break;
    }
    case 'mosn':
    case 'iosn': {
      // Bipolar neuron bodies (ellipses)
      const count = cellId === 'mosn' ? 20 : 16;
      for (let i = 0; i < count; i++) {
        const x = 35 + (i % 10) * 94 + (Math.floor(i / 10)) * 47;
        const cy = y + 15 + Math.floor(i / 10) * (height - 30);
        shapes.push(
          <ellipse
            key={`${cellId}-${i}`}
            cx={x}
            cy={cy + 10}
            rx={12}
            ry={8}
            fill="currentColor"
            opacity={0.18}
          />
        );
      }
      break;
    }
    case 'gbc': {
      // Round proliferating cells
      for (let i = 0; i < 14; i++) {
        const x = 50 + i * 67;
        shapes.push(
          <circle
            key={`gbc-${i}`}
            cx={x}
            cy={y + height / 2}
            r={9}
            fill="currentColor"
            opacity={0.18}
          />
        );
      }
      break;
    }
    case 'hbc': {
      // Flat horizontal cells on the base
      for (let i = 0; i < 12; i++) {
        const x = 40 + i * 78;
        shapes.push(
          <ellipse
            key={`hbc-${i}`}
            cx={x}
            cy={y + height / 2}
            rx={18}
            ry={7}
            fill="currentColor"
            opacity={0.2}
          />
        );
      }
      break;
    }
    case 'basal-lamina': {
      // Dashed line pattern
      shapes.push(
        <line
          key="bl-line"
          x1={10}
          y1={y + height / 2}
          x2={990}
          y2={y + height / 2}
          stroke="currentColor"
          strokeWidth={2}
          strokeDasharray="8 4"
          opacity={0.4}
        />
      );
      break;
    }
  }

  return <>{shapes}</>;
}

export default function OECrossSection({
  selectedCellId,
  hoveredCellId,
  onCellSelect,
  onCellHover,
}: OECrossSectionProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Title label */}
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Apical Surface (Nasal Cavity) ↑
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 italic">
          Hover to explore · Click to select
        </div>
      </div>

      <svg
        viewBox="0 0 1000 430"
        className="w-full h-auto rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-lg"
        style={{ background: 'transparent' }}
      >
        {/* Background */}
        <defs>
          <linearGradient id="oe-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f0fdf4" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#faf5ff" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient id="oe-bg-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f172a" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#1e1b4b" stopOpacity={0.8} />
          </linearGradient>
          {/* Glow filter for hover */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="0" y="0" width="1000" height="430" className="fill-gray-50 dark:fill-slate-900" rx="16" />

        {cellTypes.map((cell) => {
          const config = layerConfig[cell.id];
          if (!config) return null;

          const isHovered = hoveredCellId === cell.id;
          const isSelected = selectedCellId === cell.id;

          return (
            <g
              key={cell.id}
              style={{ cursor: 'pointer' }}
              onMouseEnter={() => onCellHover(cell.id)}
              onMouseLeave={() => onCellHover(null)}
              onClick={() => onCellSelect(cell.id)}
            >
              {/* Layer background */}
              <motion.rect
                x={5}
                y={config.y + 5}
                width={990}
                height={config.height - 2}
                rx={6}
                fill={cell.color}
                className="dark:opacity-30"
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: isHovered || isSelected ? 0.95 : 0.6,
                  scale: isHovered ? 1.005 : 1,
                }}
                transition={{ duration: 0.2 }}
                filter={isHovered ? 'url(#glow)' : undefined}
              />

              {/* Cell shapes */}
              <g className={`text-gray-700 dark:text-gray-300`}>
                <CellShapes cellId={cell.id} y={config.y + 5} height={config.height - 2} />
              </g>

              {/* Layer label */}
              <text
                x={config.labelX}
                y={config.y + config.height / 2 + 5}
                textAnchor="middle"
                className="fill-gray-800 dark:fill-gray-200 pointer-events-none"
                fontSize={cell.id === 'basal-lamina' ? 11 : 14}
                fontWeight={isHovered || isSelected ? 700 : 500}
                letterSpacing={0.5}
              >
                {cell.shortName}
              </text>

              {/* Selection indicator */}
              {isSelected && (
                <motion.rect
                  x={2}
                  y={config.y + 3}
                  width={996}
                  height={config.height + 2}
                  rx={8}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  className="dark:stroke-blue-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </g>
          );
        })}

        {/* Mucus layer label at top */}
        <text x={500} y={20} textAnchor="middle" fontSize={10} className="fill-gray-400 dark:fill-gray-500" fontStyle="italic">
          ← Mucus Layer →
        </text>
      </svg>

      {/* Bottom label */}
      <div className="flex items-center justify-between mt-4 px-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          ↓ Basal Surface (Lamina Propria)
        </div>
      </div>

      {/* Hover tooltip */}
      <AnimatePresence>
        {hoveredCellId && !selectedCellId && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mt-4 p-4 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-gray-200 dark:border-slate-700 shadow-xl"
          >
            {(() => {
              const cell = cellTypes.find(c => c.id === hoveredCellId);
              if (!cell) return null;
              return (
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{cell.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{cell.description}</p>
                  <p className="text-xs text-blue-500 dark:text-blue-400 mt-2 font-medium">Click to explore experiments →</p>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
