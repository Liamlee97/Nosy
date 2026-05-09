import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cellTypes, type CellType } from '@/data/oeData';

interface OECrossSectionProps {
  selectedCellId: string | null;
  hoveredCellId: string | null;
  onCellSelect: (cellId: string) => void;
  onCellHover: (cellId: string | null) => void;
}

// Data structures for individual cell instances
interface CellInstance {
  id: string;      // Unique instance ID (e.g., 'gbc-3')
  typeId: string;  // Data model ID (e.g., 'gbc')
  element: React.ReactNode;
}

export default function OECrossSection({
  selectedCellId,
  hoveredCellId,
  onCellSelect,
  onCellHover,
}: OECrossSectionProps) {

  // We map the instance ID to the type ID for hovering logic.
  // When a user hovers an instance, we tell the parent they are hovering the TYPE.
  // We'll track the currently hovered instance locally to highlight just that one cell.
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

  // Helper to get colors based on state
  const getStyle = (instanceId: string, typeId: string) => {
    const isHovered = hoveredInstanceId === instanceId;
    const isTypeHovered = hoveredCellId === typeId; // Another instance of same type is hovered
    const isSelected = selectedCellId === typeId;
    const cellDef = cellTypes.find(c => c.id === typeId)!;

    let fill = cellDef.color;
    let stroke = cellDef.darkColor;
    let strokeWidth = 2;
    let opacity = 1;

    if (isSelected) {
      strokeWidth = 4;
      stroke = '#2563eb'; // blue-600 outline for selected type
      if (isHovered) fill = cellDef.hoverColor;
    } else if (isHovered) {
      fill = cellDef.hoverColor;
      strokeWidth = 3;
    } else if (isTypeHovered) {
      // Highlight other cells of the same type slightly
      fill = cellDef.hoverColor;
      opacity = 0.9;
    } else if (hoveredCellId || selectedCellId) {
      // Dim cells of unselected/unhovered types
      opacity = 0.4;
    }

    return { fill, stroke, strokeWidth, opacity, transition: 'all 0.2s ease' };
  };

  // --- CELL GENERATION ---

  const instances: CellInstance[] = [];

  // 1. Bowman's Gland Duct (Left side)
  // A tube made of a series of small cells
  const ductCells = [];
  for (let i = 0; i < 15; i++) {
    ductCells.push(
      <rect key={`duct-${i}`} x={120} y={40 + i * 24} width={30} height={24} rx={4} />
    );
    ductCells.push(
      <rect key={`duct-r-${i}`} x={150} y={40 + i * 24} width={30} height={24} rx={4} />
    );
  }
  instances.push({
    id: 'bowman-1',
    typeId: 'bowman',
    element: (
      <g>
        <path d="M 120,40 L 120,400 L 180,400 L 180,40 Z" fill="none" />
        {ductCells}
      </g>
    )
  });

  // 2. Sustentacular Cells (Spanning top to bottom)
  const susPositions = [220, 310, 400, 520, 610, 700, 820, 910];
  susPositions.forEach((x, i) => {
    instances.push({
      id: `sus-${i}`,
      typeId: 'sustentacular',
      element: (
        <path d={`M ${x-15},40 C ${x-5},150 ${x-20},300 ${x-5},390 L ${x+15},390 C ${x+30},300 ${x+10},150 ${x+25},40 Z`} />
      )
    });
  });

  // 3. Horizontal Basal Cells (HBCs) - Exactly 5
  // Placed along the basal lamina (y=390)
  const hbcPositions = [260, 450, 650, 850, 750];
  hbcPositions.forEach((x, i) => {
    instances.push({
      id: `hbc-${i}`,
      typeId: 'hbc',
      element: <ellipse cx={x} cy={385} rx={35} ry={12} />
    });
  });

  // 4. Globose Basal Cells (GBCs) - Exactly 10
  // Placed just above HBCs
  const gbcPositions = [
    {x: 220, y: 360}, {x: 280, y: 350}, {x: 320, y: 365},
    {x: 410, y: 355}, {x: 480, y: 360},
    {x: 600, y: 360}, {x: 680, y: 350}, {x: 720, y: 365},
    {x: 820, y: 350}, {x: 880, y: 360}
  ];
  gbcPositions.forEach((pos, i) => {
    instances.push({
      id: `gbc-${i}`,
      typeId: 'gbc',
      element: <circle cx={pos.x} cy={pos.y} r={16} />
    });
  });

  // 5. Mature OSNs (mOSNs)
  // Bipolar neurons with cell body high up, dendrite to surface, axon to base
  const mosnPositions = [
    {x: 260, y: 220}, {x: 350, y: 180}, {x: 460, y: 240},
    {x: 560, y: 190}, {x: 650, y: 230}, {x: 760, y: 170}, {x: 860, y: 210}
  ];
  mosnPositions.forEach((pos, i) => {
    const cx = pos.x;
    const cy = pos.y;
    instances.push({
      id: `mosn-${i}`,
      typeId: 'mosn',
      element: (
        <g>
          {/* Axon */}
          <path d={`M ${cx},${cy+20} C ${cx+10},300 ${cx-10},350 ${cx},410`} fill="none" />
          {/* Dendrite */}
          <path d={`M ${cx},${cy-20} C ${cx-5},120 ${cx+5},80 ${cx},40`} fill="none" strokeWidth={6} />
          {/* Cell Body */}
          <ellipse cx={cx} cy={cy} rx={18} ry={26} />
          {/* Olfactory Knob & Cilia */}
          <circle cx={cx} cy={35} r={6} />
          <path d={`M ${cx},30 Q ${cx-15},15 ${cx-20},5 M ${cx},30 Q ${cx},15 ${cx+5},5 M ${cx},30 Q ${cx+15},15 ${cx+20},5 M ${cx},30 Q ${cx-10},10 ${cx-30},15 M ${cx},30 Q ${cx+10},10 ${cx+30},15`} fill="none" strokeWidth={2} />
        </g>
      )
    });
  });

  // 6. Immature OSNs (iOSNs)
  // Cell bodies lower than mOSNs, axon extending down, dendrite not reaching surface
  const iosnPositions = [
    {x: 300, y: 280}, {x: 400, y: 290}, {x: 510, y: 270},
    {x: 700, y: 280}, {x: 800, y: 290}
  ];
  iosnPositions.forEach((pos, i) => {
    const cx = pos.x;
    const cy = pos.y;
    instances.push({
      id: `iosn-${i}`,
      typeId: 'iosn',
      element: (
        <g>
          {/* Axon */}
          <path d={`M ${cx},${cy+20} C ${cx-5},330 ${cx+5},370 ${cx},410`} fill="none" />
          {/* Short Dendrite */}
          <path d={`M ${cx},${cy-20} L ${cx},${cy-80}`} fill="none" strokeWidth={4} />
          {/* Cell Body */}
          <ellipse cx={cx} cy={cy} rx={16} ry={22} />
        </g>
      )
    });
  });

  // 7. Ionocyte
  instances.push({
    id: 'ionocyte-1',
    typeId: 'ionocyte',
    element: (
      <g>
        <path d="M 430,40 C 420,100 440,150 430,200 C 445,150 445,100 430,40 Z" />
        {/* Microvilli */}
        <path d="M 425,40 L 425,30 M 430,40 L 430,28 M 435,40 L 435,32" fill="none" strokeWidth={2} />
      </g>
    )
  });

  // 8. Tuft Cell
  instances.push({
    id: 'tuft-1',
    typeId: 'tuft',
    element: (
      <g>
        <path d="M 670,40 C 660,120 685,180 670,240 C 685,180 680,120 670,40 Z" />
        {/* Tuft */}
        <path d="M 665,40 L 660,25 M 670,40 L 670,20 M 675,40 L 680,25" fill="none" strokeWidth={2} />
      </g>
    )
  });

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Title label */}
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
          viewBox="0 0 1000 450"
          className="w-full h-auto rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-lg bg-white dark:bg-slate-900"
        >
          {/* Mucus Layer Background */}
          <rect x="0" y="0" width="1000" height="40" fill="#e0f2fe" opacity={0.3} className="dark:fill-blue-900 dark:opacity-20" />
          
          {/* Basal Lamina Background */}
          <rect x="0" y="390" width="1000" height="60" fill="#f5f5f4" className="dark:fill-stone-900" />
          <line x1="0" y1="390" x2="1000" y2="390" stroke="#78716c" strokeWidth="4" strokeDasharray="10 5" opacity={0.6} />
          
          <text x={40} y={420} className="fill-gray-500 text-sm font-medium">Lamina Propria</text>

          {/* Render all cell instances */}
          {/* 
            To ensure proper layering (HBCs behind GBCs behind Sus cells etc),
            we'll sort the rendering order roughly.
            Order: Sus -> Bowman -> mOSN -> iOSN -> GBC -> HBC -> Tuft -> Ionocyte 
            This ensures smaller front cells overlay larger back cells correctly.
          */}
          {['sustentacular', 'bowman', 'mosn', 'iosn', 'gbc', 'hbc', 'tuft', 'ionocyte'].map(layerType => (
            <g key={`layer-${layerType}`}>
              {instances.filter(inst => inst.typeId === layerType).map(inst => {
                const style = getStyle(inst.id, inst.typeId);
                
                return (
                  <motion.g
                    key={inst.id}
                    style={{ cursor: 'pointer' }}
                    animate={style}
                    initial={false}
                    onMouseEnter={() => handleMouseEnter(inst.id, inst.typeId)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(inst.typeId)}
                    // Ensure lines drawn inside the cell inherit the stroke color
                  >
                    {React.cloneElement(inst.element as React.ReactElement, {
                      // Apply the explicit stroke color to the primary shape elements
                      stroke: style.stroke,
                      fill: style.fill
                    })}
                  </motion.g>
                );
              })}
            </g>
          ))}
        </svg>

        {/* Hover tooltip - Absolutely positioned over the diagram */}
        <AnimatePresence>
          {hoveredCellId && !selectedCellId && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute bottom-4 right-4 max-w-sm p-4 rounded-xl bg-white/95 dark:bg-slate-800/95 backdrop-blur-md border border-gray-200 dark:border-slate-600 shadow-xl pointer-events-none z-10"
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
          ↓ Basal Surface (Lamina Propria)
        </div>
      </div>
    </div>
  );
}
