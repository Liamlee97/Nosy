import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cellTypes } from '@/data/oeData';

interface OECrossSectionProps {
  selectedCellId: string | null;
  hoveredCellId: string | null;
  onCellSelect: (cellId: string) => void;
  onCellHover: (cellId: string | null) => void;
}

interface CellInstance {
  id: string;
  typeId: string;
  element: React.ReactNode;
}

export default function OECrossSection({
  selectedCellId,
  hoveredCellId,
  onCellSelect,
  onCellHover,
}: OECrossSectionProps) {

  const [hoveredInstanceId, setHoveredInstanceId] = useState<string | null>(null);

  const handleMouseEnter = (instanceId: string, typeId: string) => {
    setHoveredInstanceId(instanceId);
    onCellHover(typeId);
  };

  const handleMouseLeave = () => {
    setHoveredInstanceId(null);
    onCellHover(null);
  };

  const handleClick = (typeId: string) => {
    onCellSelect(typeId);
  };

  const getStyle = (instanceId: string, typeId: string, isLine = false) => {
    const isHovered = hoveredInstanceId === instanceId;
    const isTypeHovered = hoveredCellId === typeId;
    const isSelected = selectedCellId === typeId;
    const cellDef = cellTypes.find(c => c.id === typeId)!;

    let fill = isLine ? 'none' : cellDef.color;
    let stroke = cellDef.darkColor;
    let strokeWidth = isLine ? 3 : 1.5;
    let opacity = 1;
    let filter = '';

    if (isSelected) {
      strokeWidth += 2;
      stroke = '#1e293b'; // slate-800 outline for selected type
      if (!isLine) fill = cellDef.hoverColor;
      filter = 'drop-shadow(0 0 8px rgba(255,255,255,0.8))';
    } else if (isHovered) {
      if (!isLine) fill = cellDef.hoverColor;
      strokeWidth += 1;
    } else if (isTypeHovered) {
      if (!isLine) fill = cellDef.hoverColor;
      opacity = 0.95;
    } else if (hoveredCellId || selectedCellId) {
      opacity = 0.4;
    }

    return { fill, stroke, strokeWidth, opacity, filter, transition: 'all 0.2s ease-out' };
  };

  // --- 2.5D OVERLAPPING LAYOUT GENERATION ---
  const zLayers: { [key: string]: CellInstance[] } = {
    sus: [],
    bowman: [],
    middle: [], // mosn, iosn, ionocyte/tuft
    gbc: [],
    hbc: [],
    axons: []
  };

  const pushCell = (layer: string, typeId: string, id: string, element: React.ReactNode, isLine = false) => {
    zLayers[layer].push({
      id,
      typeId,
      element: (
        <motion.g
          key={id}
          style={{ cursor: 'pointer' }}
          animate={getStyle(id, typeId, isLine)}
          initial={false}
          onMouseEnter={() => handleMouseEnter(id, typeId)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(typeId)}
        >
          {element}
        </motion.g>
      )
    });
  };

  // 1. Sustentacular Cells (Background Layer)
  // Spanning from x=120 to x=1000. y=60 to y=450.
  const susCount = 8;
  const susWidth = (1000 - 120) / susCount;
  for (let i = 0; i < susCount; i++) {
    const xL = 120 + i * susWidth;
    const xR = 120 + (i + 1) * susWidth;
    const xM = (xL + xR) / 2;
    // Tapering shape: fat at top, narrow at bottom
    const d = `M ${xL},60 Q ${xL+10},250 ${xM-10},450 L ${xM+10},450 Q ${xR-10},250 ${xR},60 Z`;
    pushCell('sus', 'sustentacular', `sus-${i}`, (
      <g>
        <path d={d} strokeLinejoin="round" />
        <ellipse cx={xM} cy={120} rx={12} ry={25} fill="currentColor" opacity={0.4} stroke="none" />
        {/* Microvilli */}
        {Array.from({length: 8}).map((_, j) => (
          <path key={j} d={`M ${xL + 10 + j * (susWidth-20)/7},60 L ${xL + 10 + j * (susWidth-20)/7 + (Math.random()*10-5)},45`} fill="none" strokeWidth={1} stroke="currentColor" opacity={0.6}/>
        ))}
      </g>
    ));
  }

  // 2. Bowman's Gland & Duct (Left side)
  pushCell('bowman', 'bowman', 'bowman-1', (
    <g>
      {/* Deep looping gland path */}
      <path d="M 40,60 C 50,200 40,400 30,500 C 20,600 80,620 100,550 C 120,480 100,300 90,60 Z" strokeLinejoin="round" />
      {/* Gland details */}
      <path d="M 60,60 C 70,200 65,400 55,490 C 50,560 80,570 85,550 C 100,480 80,300 75,60" fill="none" stroke="currentColor" strokeWidth={2} opacity={0.4} />
      {Array.from({length: 20}).map((_, j) => (
        <circle key={j} cx={50 + Math.sin(j)*10} cy={80 + j*25} r={4} fill="currentColor" opacity={0.5} stroke="none" />
      ))}
    </g>
  ));

  // 3. Middle Layer (Microvillar, mOSN, iOSN)
  // Microvillar (Ionocyte/Tuft)
  const mvPositions = [350, 750];
  mvPositions.forEach((x, i) => {
    const d = `M ${x-25},60 C ${x-15},180 ${x-10},280 ${x},320 C ${x+10},280 ${x+15},180 ${x+25},60 Z`;
    pushCell('middle', i === 0 ? 'ionocyte' : 'tuft', `mv-${i}`, (
      <g>
        <path d={d} />
        <ellipse cx={x} cy={160} rx={10} ry={16} fill="currentColor" opacity={0.4} stroke="none" />
        {/* Microvilli Brush border */}
        {Array.from({length: 12}).map((_, j) => (
          <path key={j} d={`M ${x-20 + j*4},60 L ${x-20 + j*4},40`} fill="none" stroke="currentColor" strokeWidth={1.5} />
        ))}
      </g>
    ));
  });

  // mOSNs (Mature) - Higher cell bodies
  const mosnPositions = [220, 280, 420, 520, 620, 820, 920];
  mosnPositions.forEach((x, i) => {
    const cy = 250 + (i % 2) * 20; // Staggered cell bodies
    const dBody = `M ${x},${cy-30} C ${x+25},${cy-10} ${x+25},${cy+20} ${x},${cy+40} C ${x-25},${cy+20} ${x-25},${cy-10} ${x},${cy-30} Z`;
    const dDendrite = `M ${x},${cy-30} C ${x-15},150 ${x+15},100 ${x},60`;
    pushCell('middle', 'mosn', `mosn-${i}`, (
      <g>
        <path d={dBody} />
        <path d={dDendrite} fill="none" stroke="currentColor" strokeWidth={5} />
        <ellipse cx={x} cy={cy+5} rx={12} ry={15} fill="currentColor" opacity={0.4} stroke="none" />
        {/* Olfactory Knob & Cilia */}
        <circle cx={x} cy={55} r={6} fill="currentColor" stroke="none" />
        <path d={`M ${x},55 C ${x-20},40 ${x-30},30 ${x-40},10 M ${x},55 C ${x-10},30 ${x},30 ${x},10 M ${x},55 C ${x+20},40 ${x+30},30 ${x+40},10`} fill="none" stroke="currentColor" strokeWidth={1.5} />
      </g>
    ));
    
    // Axon tracked in separate layer so it renders in front of GBCs
    pushCell('axons', 'mosn', `mosn-axon-${i}`, (
      <path d={`M ${x},${cy+40} C ${x-10},400 ${650},450 ${650},580`} />
    ), true);
  });

  // iOSNs (Immature) - Lower cell bodies, short dendrites
  const iosnPositions = [250, 320, 470, 570, 680, 870];
  iosnPositions.forEach((x, i) => {
    const cy = 340 + (i % 2) * 15;
    const dBody = `M ${x},${cy-20} C ${x+20},${cy-5} ${x+20},${cy+15} ${x},${cy+30} C ${x-20},${cy+15} ${x-20},${cy-5} ${x},${cy-20} Z`;
    const dDendrite = `M ${x},${cy-20} C ${x+10},${cy-60} ${x-10},${cy-100} ${x},${cy-140}`;
    pushCell('middle', 'iosn', `iosn-${i}`, (
      <g>
        <path d={dBody} />
        <path d={dDendrite} fill="none" stroke="currentColor" strokeWidth={4} strokeLinecap="round" />
        <ellipse cx={x} cy={cy+5} rx={10} ry={12} fill="currentColor" opacity={0.4} stroke="none" />
      </g>
    ));

    // Axon
    pushCell('axons', 'iosn', `iosn-axon-${i}`, (
      <path d={`M ${x},${cy+30} C ${x+10},420 ${670},450 ${670},580`} />
    ), true);
  });

  // 4. GBCs (Middle-Front Layer)
  // Stacked tightly in a band from y=380 to 450
  for (let i = 0; i < 35; i++) {
    // Generate organic blobs randomly distributed in the zone
    const x = 140 + Math.random() * 840;
    const y = 390 + Math.random() * 50;
    const r = 14 + Math.random() * 4;
    
    // Add slight wiggles to the circle
    const d = `M ${x},${y-r} C ${x+r+2},${y-r-2} ${x+r+4},${y+r} ${x},${y+r} C ${x-r-3},${y+r+2} ${x-r-1},${y-r} ${x},${y-r} Z`;
    pushCell('gbc', 'gbc', `gbc-${i}`, (
      <g>
        <path d={d} />
        <circle cx={x} cy={y} r={r/2.5} fill="currentColor" opacity={0.4} stroke="none" />
      </g>
    ));
  }

  // 5. HBCs (Front Layer)
  // Domes sitting on the basal lamina (y=480)
  const hbcCount = 9;
  const hbcWidth = (1000 - 140) / hbcCount;
  for (let i = 0; i < hbcCount; i++) {
    const xL = 140 + i * hbcWidth;
    const xR = 140 + (i + 1) * hbcWidth;
    const xM = (xL + xR) / 2;
    const d = `M ${xL+5},480 C ${xL+5},440 ${xR-5},440 ${xR-5},480 Z`;
    pushCell('hbc', 'hbc', `hbc-${i}`, (
      <g>
        <path d={d} />
        {/* Reddish nuclei as per reference image */}
        <ellipse cx={xM} cy={465} rx={12} ry={6} fill="#991b1b" opacity={0.8} stroke="none" />
      </g>
    ));
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-4 px-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Apical Surface (Mucus Layer & Nasal Cavity) ↑
        </div>
        <div className="text-xs text-gray-400 dark:text-gray-500 italic">
          Hover a cell to identify · Click to select
        </div>
      </div>

      <div className="relative">
        <svg
          viewBox="0 0 1000 600"
          className="w-full h-auto rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-2xl bg-[#e2e8f0] dark:bg-slate-900"
        >
          {/* Mucus Layer Background */}
          <rect x="0" y="0" width="1000" height="60" fill="#f0f9ff" opacity={0.5} className="dark:fill-blue-900 dark:opacity-20" />
          
          {/* Lamina Propria Background */}
          <rect x="0" y="480" width="1000" height="120" fill="#d6d3d1" className="dark:fill-stone-900" />
          
          {/* Basal Lamina Line */}
          <path d="M 120,480 Q 500,475 1000,480" fill="none" stroke="#57534e" strokeWidth={3} />
          <text x={780} y={510} className="fill-gray-600 dark:fill-gray-400 text-sm font-medium">Lamina Propria</text>

          {/* Fibroblasts in Lamina Propria */}
          <path d="M 300,520 Q 320,510 340,520 Q 320,530 300,520 Z" fill="#f472b6" opacity={0.6} />
          <path d="M 750,550 Q 770,540 790,550 Q 770,560 750,550 Z" fill="#f472b6" opacity={0.6} />
          <path d="M 450,570 Q 470,560 490,570 Q 470,580 450,570 Z" fill="#f472b6" opacity={0.6} />

          {/* Olfactory Ensheathing Cell (OEC) Sheath passing through Lamina Propria */}
          <path d="M 630,480 C 630,520 580,550 560,600 L 700,600 C 680,550 690,520 690,480 Z" fill="#a8a29e" opacity={0.5} stroke="#78716c" strokeWidth={2} />
          <ellipse cx={640} cy={550} rx={15} ry={25} fill="#57534e" opacity={0.6} transform="rotate(30 640 550)" />

          {/* Render Z-Layers Back to Front */}
          {zLayers.sus.map(c => c.element)}
          {zLayers.bowman.map(c => c.element)}
          {zLayers.middle.map(c => c.element)}
          {zLayers.gbc.map(c => c.element)}
          {zLayers.hbc.map(c => c.element)}
          {zLayers.axons.map(c => c.element)}

        </svg>

        {/* Hover tooltip */}
        <AnimatePresence>
          {hoveredCellId && !selectedCellId && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-4 right-4 max-w-sm p-4 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-gray-200 dark:border-slate-600 shadow-2xl pointer-events-none z-10"
            >
              {(() => {
                const cell = cellTypes.find(c => c.id === hoveredCellId);
                if (!cell) return null;
                return (
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600" style={{ backgroundColor: cell.color }} />
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">{cell.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{cell.description}</p>
                    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        {cell.markers.slice(0,2).join(', ')}...
                      </span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">
                        Click to select →
                      </span>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-between mt-4 px-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          ↓ Deep Lamina Propria
        </div>
      </div>
    </div>
  );
}
