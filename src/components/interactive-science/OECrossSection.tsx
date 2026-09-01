import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cellTypes } from '@/data/oeData';

interface OECrossSectionProps {
  selectedCellId: string | null;
  hoveredCellId: string | null;
  onCellSelect: (cellId: string) => void;
  onCellHover: (cellId: string | null) => void;
  experimentState?: string | null;
}

export default function OECrossSection({
  selectedCellId,
  hoveredCellId,
  onCellSelect,
  onCellHover,
  experimentState = null,
}: OECrossSectionProps) {
  const [hoveredInstanceId, setHoveredInstanceId] = useState<string | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
  }, []);

  const handleMouseEnter = (instanceId: string, typeId: string) => {
    if (isTouch) return; // let touch events handle it
    setHoveredInstanceId(instanceId);
    onCellHover(typeId);
  };
  const handleMouseLeave = () => {
    if (isTouch) return;
    setHoveredInstanceId(null);
    onCellHover(null);
  };
  const handleTouch = (instanceId: string, typeId: string) => {
    // On touch: immediately select (skip hover state)
    onCellSelect(typeId);
  };
  const handleClick = (typeId: string) => { onCellSelect(typeId); };

  const getBodyStyle = (instanceId: string, typeId: string) => {
    const isHovered = hoveredInstanceId === instanceId;
    const isTypeHovered = hoveredCellId === typeId;
    const isSelected = selectedCellId === typeId;
    const c = cellTypes.find(ct => ct.id === typeId)!;
    
    // Experiment states logic
    const isP63Ko = experimentState === 'p63-ko';
    
    let fill = c.color, stroke = c.darkColor, strokeWidth = 1.5, opacity = 1;
    
    if (isP63Ko && typeId === 'hbc') {
      opacity = 0; // Fade out HBCs in p63-ko
    } else if (isSelected) { 
      fill = c.hoverColor; stroke = '#0f172a'; strokeWidth = 3.5; 
    }
    else if (isHovered) { fill = c.hoverColor; strokeWidth = 3; }
    else if (isTypeHovered) { fill = c.hoverColor; opacity = 0.95; }
    else if (hoveredCellId || selectedCellId) { opacity = 0.35; }
    
    return { fill, stroke, strokeWidth, opacity, transition: 'all 0.5s ease' };
  };

  const getLineStyle = (instanceId: string, typeId: string) => {
    const c = cellTypes.find(ct => ct.id === typeId)!;
    const isHovered = hoveredInstanceId === instanceId;
    const isTypeHovered = hoveredCellId === typeId;
    const isSelected = selectedCellId === typeId;
    
    const isP63Ko = experimentState === 'p63-ko';

    let stroke = c.darkColor, strokeWidth = 2.5, opacity = 1;
    
    if (isP63Ko && typeId === 'hbc') {
      opacity = 0; // Fade out HBC lines in p63-ko
    } else if (isSelected) { stroke = '#0f172a'; strokeWidth = 4; }
    else if (isHovered) { strokeWidth = 4; }
    else if (isTypeHovered) { opacity = 0.95; }
    else if (hoveredCellId || selectedCellId) { opacity = 0.35; }
    
    return { fill: 'none', stroke, strokeWidth, opacity, transition: 'all 0.5s ease' };
  };

  const Cell = ({ id, typeId, children, isLine }: {
    id: string; typeId: string; children: React.ReactNode; isLine?: boolean;
  }) => (
    <motion.g
      style={{ cursor: 'pointer' }}
      animate={isLine ? getLineStyle(id, typeId) : getBodyStyle(id, typeId)}
      initial={false}
      onMouseEnter={() => handleMouseEnter(id, typeId)}
      onMouseLeave={handleMouseLeave}
      onTouchStart={(e) => {
        e.stopPropagation();
        handleTouch(id, typeId);
      }}
      onClick={(e) => {
        e.stopPropagation();
        handleClick(typeId);
      }}
    >
      {children}
    </motion.g>
  );

  // Seeded pseudo-random for deterministic positions
  const seeded = (seed: number) => {
    let s = seed;
    return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
  };
  const rand = seeded(42);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
          Apical Surface (Mucus Layer) ↑
        </span>
        <span className="text-xs text-gray-400 dark:text-gray-500 italic">
          {isTouch ? 'Tap a cell to select' : 'Hover to identify · Click to select'}
        </span>
      </div>

      <div className="relative">
        <svg 
          viewBox="0 0 800 700" 
          className="w-full max-h-[70vh] h-auto rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-slate-700 shadow-2xl bg-[#eaeae6] dark:bg-slate-900 cursor-crosshair"
          onClick={() => onCellSelect('')}
        >

          {/* ===== BACKGROUND: Lamina Propria ===== */}
          <rect x="0" y="490" width="800" height="210" fill="#b8b5b0" className="dark:fill-stone-800" />
          <path d="M 0,490 Q 400,485 800,490" fill="none" stroke="#6b6560" strokeWidth={3} />

          {/* Fibroblasts in lamina propria */}
          {[
            { cx: 320, cy: 620, w: 60, h: 12, rot: 5, nx: -8, ny: -3 },
            { cx: 530, cy: 560, w: 55, h: 11, rot: -5, nx: 5, ny: -2 },
            { cx: 650, cy: 610, w: 45, h: 9, rot: 15, nx: -5, ny: 2 },
            { cx: 740, cy: 540, w: 50, h: 10, rot: -15, nx: 8, ny: -1 },
            { cx: 180, cy: 660, w: 55, h: 11, rot: 8, nx: -6, ny: 3 },
            { cx: 580, cy: 670, w: 65, h: 12, rot: -8, nx: 10, ny: 1 },
          ].map((f, i) => (
            <Cell key={`fibro-${i}`} id={`fibro-${i}`} typeId="fibroblast">
              <g transform={`rotate(${f.rot} ${f.cx} ${f.cy})`}>
                {/* Irregular, wavy spindle shape instead of a perfect eye */}
                <path d={`M ${f.cx - f.w/2},${f.cy} 
                         C ${f.cx - f.w/4},${f.cy - f.h*1.2} ${f.cx + f.w/6},${f.cy - f.h*0.6} ${f.cx + f.w/2},${f.cy} 
                         C ${f.cx + f.w/5},${f.cy + f.h*1.3} ${f.cx - f.w/8},${f.cy + f.h*0.7} ${f.cx - f.w/2},${f.cy} Z`} 
                      fill="#f472b6" opacity={0.6} />
                {/* Smaller, asymmetrically placed nucleus */}
                <ellipse cx={f.cx + f.nx} cy={f.cy + f.ny} rx={f.w/8} ry={f.h/3.5} fill="#be185d" opacity={0.8} stroke="none" transform={`rotate(${f.rot * 1.5} ${f.cx + f.nx} ${f.cy + f.ny})`} />
              </g>
            </Cell>
          ))}

          {/* OECs (Olfactory Ensheathing Cells) wrapping fascicles */}
          {[
            { x: 233, y: 570 },
            { x: 460, y: 580 },
            { x: 687, y: 570 },
          ].map((oec, i) => (
            <Cell key={`oec-${i}`} id={`oec-${i}`} typeId="oec">
              {/* Main wrapping sheath descending */}
              <path d={`M ${oec.x - 22},${oec.y + 15} C ${oec.x - 15},620 ${oec.x - 20},680 ${oec.x - 10},700 L ${oec.x + 20},700 C ${oec.x + 15},680 ${oec.x + 10},620 ${oec.x + 22},${oec.y + 15} C ${oec.x + 15},${oec.y - 10} ${oec.x - 15},${oec.y - 10} ${oec.x - 22},${oec.y + 15} Z`} />
              {/* OEC Nucleus - moved lower down into the lamina propria */}
              <ellipse cx={oec.x} cy={oec.y + 55} rx={12} ry={18} fill="#44403c" opacity={0.8} stroke="none" transform={`rotate(15 ${oec.x} ${oec.y+55})`} />
            </Cell>
          ))}
          {/* ===== LAYER 1: Sustentacular Cells (background scaffold) ===== */}

          {/* Custom leftmost Sustentacular cell perfectly contouring the adjacent structures */}
          <Cell id="sus-custom-0" typeId="sustentacular">
            {(() => {
              const step = 28;
              const endY = 490;
              const getCx = (y: number) => 80 - 15 * Math.sin((y - 50) / 180);
              const getLumenR = (y: number) => 6 + Math.pow((y - 50) / 570, 2) * 12;
              const getOuterR = (y: number) => getLumenR(y) + 14;
              
              let leftEdgePath = "";
              for (let y = 50; y < endY; y += step) {
                const yNext = Math.min(y + step, endY);
                const actualStep = yNext - y;
                
                const outR1 = getOuterR(y);
                const outR2 = getOuterR(yNext);
                const outerWobble1 = Math.sin(y * 0.1) * 2;
                const outerWobble2 = Math.sin(yNext * 0.1) * 2;
                
                const rightOuter1 = getCx(y) + outR1 - outerWobble1 + 2; // +2 for a precise 2px visual gap
                const rightOuter2 = getCx(yNext) + outR2 - outerWobble2 + 2;
                
                if (y === 50) {
                  leftEdgePath += `M ${rightOuter1},${y} `;
                }
                leftEdgePath += `C ${rightOuter1 + 4},${y + actualStep / 2} ${rightOuter2 + 4},${yNext - actualStep / 2} ${rightOuter2},${yNext} `;
              }
              
              // Trace HBC (x=132), GBC (x=135), OSN body (x=138), OSN dendrite exactly with 2px margins
              const bottomPath = `L 158,490 `;
              const rightEdgePath = `C 154,420 162,350 158,275 C 136,260 136,225 155,215 C 147,170 163,110 155,50 Z`;
              const fullPath = leftEdgePath + bottomPath + rightEdgePath;
              
              const topMidX = 129; // approx center top
              return (
                <>
                  <path d={fullPath} />
                  <ellipse cx={topMidX - 5} cy={140} rx={11} ry={19} fill="#3d6b14" opacity={0.55} stroke="none" transform={`rotate(-15 ${topMidX - 5} 140)`} />
                  {/* Endoplasmic reticulum squiggles */}
                  <path d={`M ${topMidX - 17},180 Q ${topMidX - 5},175 ${topMidX + 7},180`} fill="none" stroke="#fff" strokeWidth={1.5} opacity={0.4} />
                  <path d={`M ${topMidX - 15},190 Q ${topMidX - 5},185 ${topMidX + 5},190`} fill="none" stroke="#fff" strokeWidth={1.5} opacity={0.35} />
                </>
              );
            })()}
          </Cell>

          {/* Remaining 10 olive-green columnar cells, perfectly contouring the mature OSNs between them */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
            
            // mOSN center coordinates
            const xL = 160 + (i - 1) * 65; // Left bounding mOSN
            const xR = 160 + i * 65;       // Right bounding mOSN
            
            // mOSN cy values alternate: [240, 200, 250, 210]
            const getCy = (idx: number) => [240, 200, 250, 210][idx % 4];
            const cyL = getCy(i - 1);
            const cyR = getCy(i);
            
            const isIonocyte = i === 3;
            const isTuft = i === 8;
            
            // Upper portions of the paths (shared between sus and ionocyte)
            const upperLeft = `M ${xL + 5},50 C ${xL + 13},110 ${xL - 3},170 ${xL + 5},${cyL - 25} C ${xL + 24},${cyL - 15} ${xL + 24},${cyL + 20} ${xL + 2},${cyL + 35}`;
            const upperRight = `C ${xR - 24},${cyR + 20} ${xR - 24},${cyR - 15} ${xR - 5},${cyR - 25} C ${xR - 13},170 ${xR + 3},110 ${xR - 5},50 Z`;

            let fullPath = "";
            
            if (isIonocyte) {
              // Ionocytes have a body that ends early, with a single central tail dropping down towards the basal cells
              const midX = (xL + xR) / 2;
              const ionoBottom = `C ${xL + 5},${cyL + 60} ${xL + 10},330 ${xL + 15},330 ` +
                                 `L ${midX - 6},330 ` + // left flat bottom
                                 `C ${midX - 10},370 ${midX - 5},410 ${midX},420 ` + // single tail down
                                 `C ${midX + 5},410 ${midX + 10},370 ${midX + 6},330 ` + // single tail up
                                 `L ${xR - 15},330 ` + // right flat bottom
                                 `C ${xR - 10},310 ${xR - 5},${cyR + 70} ${xR - 2},${cyR + 35}`;
              fullPath = `${upperLeft} ${ionoBottom} ${upperRight}`;
            } else if (isTuft) {
              // Tuft cells are very short, only occupying the top 3rd of the epithelium in a pear-like shape
              const tuftLeft = `M ${xL + 5},50 C ${xL + 13},110 ${xL - 3},170 ${xL + 8},180`;
              const tuftBottom = `C ${xL + 20},195 ${xR - 20},195 ${xR - 8},180`;
              const tuftRight = `C ${xR - 3},170 ${xR + 3},110 ${xR - 5},50 Z`;
              fullPath = `${tuftLeft} ${tuftBottom} ${tuftRight}`;
            } else {
              // Standard Sus cell bottom paths
              const lowerLeft = `C ${xL + 6},${cyL + 100} ${xL - 2},420 ${xL + 2},490`;
              const bottomPath = i === 10 ? `L 800,490` : `L ${xR - 2},490`;
              const lowerRight = i === 10 
                ? `L 800,50 Z` 
                : `C ${xR - 6},420 ${xR + 2},${cyR + 100} ${xR - 2},${cyR + 35}`;
              
              fullPath = `${upperLeft} ${lowerLeft} ${bottomPath} ${lowerRight} ${i === 10 ? '' : upperRight}`;
            }
            
            const nx = i === 10 ? (xL + 800) / 2 : (xL + xR) / 2;
            
            let typeId = "sustentacular";
            let cellId = `sus-${i}`;
            let nucFill = "#3d6b14"; // Olive-green for sus
            let ny = 140;

            if (isIonocyte) {
              typeId = "ionocyte";
              cellId = "ionocyte-0";
              nucFill = "#701a75"; // Fuchsia-900
            } else if (isTuft) {
              typeId = "tuft";
              cellId = "tuft-0";
              nucFill = "#0369a1"; // sky-700
              ny = 120; // Move nucleus higher up because the cell is short
            }

            return (
              <Cell key={`sus-${i}`} id={cellId} typeId={typeId}>
                <path d={fullPath} />
                <ellipse cx={nx} cy={ny} rx={11} ry={19} fill={nucFill} opacity={0.55} stroke="none" />
                
                {/* Endoplasmic reticulum squiggles (skip for short tuft cells) */}
                {!isTuft && (
                  <>
                    <path d={`M ${nx - 12},${ny + 40} Q ${nx},${ny + 35} ${nx + 12},${ny + 40}`} fill="none" stroke="#fff" strokeWidth={1.5} opacity={0.4} />
                    <path d={`M ${nx - 10},${ny + 50} Q ${nx},${ny + 45} ${nx + 10},${ny + 50}`} fill="none" stroke="#fff" strokeWidth={1.5} opacity={0.35} />
                  </>
                )}
                
                {/* Apical Microvilli for Ionocyte and Tuft cell */}
                {(isIonocyte || isTuft) && Array.from({ length: 9 }).map((_, mvIdx) => {
                  const vx = xL + 12 + mvIdx * 5;
                  return <line key={`mv-${vx}`} x1={vx} y1={50} x2={vx} y2={35} stroke="currentColor" strokeWidth={1.5} />;
                })}
              </Cell>
            );
          })}


          {/* ===== LAYER 3: Bowman's Duct & Gland (left side, dark green) ===== */}
          <Cell id="bowman-1" typeId="bowman">
            {(() => {
              const cells = [];
              const lumen = [];
              const step = 28; // height of each duct cell
              const endY = 620;
              // Center of duct: slight wave as it goes down
              const getCx = (y: number) => 80 - 15 * Math.sin((y - 50) / 180);

              // Progressively widening lumen
              const getLumenR = (y: number) => 6 + Math.pow((y - 50) / 570, 2) * 12; // Increases from 6 to 18 non-linearly
              const getOuterR = (y: number) => getLumenR(y) + 14; // Constant wall thickness of 14

              for (let y = 50; y < endY; y += step) {
                const yNext = Math.min(y + step, endY);
                const actualStep = yNext - y;
                const cx1 = getCx(y);
                const cx2 = getCx(yNext);

                const lumR1 = getLumenR(y);
                const outR1 = getOuterR(y);
                const lumR2 = getLumenR(yNext);
                const outR2 = getOuterR(yNext);

                // Add some organic variation to width
                const outerWobble = Math.sin(y * 0.1) * 2;
                const innerWobble = Math.cos(y * 0.1) * 1.5;
                const nextOuterWobble = Math.sin(yNext * 0.1) * 2;
                const nextInnerWobble = Math.cos(yNext * 0.1) * 1.5;

                const leftOuter1 = cx1 - outR1 + outerWobble;
                const leftInner1 = cx1 - lumR1 + innerWobble;
                const rightInner1 = cx1 + lumR1 - innerWobble;
                const rightOuter1 = cx1 + outR1 - outerWobble;

                const leftOuter2 = cx2 - outR2 + nextOuterWobble;
                const leftInner2 = cx2 - lumR2 + nextInnerWobble;
                const rightInner2 = cx2 + lumR2 - nextInnerWobble;
                const rightOuter2 = cx2 + outR2 - nextOuterWobble;

                // Left cell
                cells.push(
                  <g key={`l-${y}`}>
                    <path
                      d={`M ${leftOuter1},${y} 
                          C ${leftOuter1 - 4},${y + actualStep / 2} ${leftOuter2 - 4},${yNext - actualStep / 2} ${leftOuter2},${yNext}
                          L ${leftInner2},${yNext}
                          C ${leftInner2 + 2},${yNext - actualStep / 2} ${leftInner1 + 2},${y + actualStep / 2} ${leftInner1},${y}
                          Z`}
                      fill="currentColor" stroke="#064e3b" strokeWidth={1.5} strokeLinejoin="round"
                    />
                    {/* Nucleus */}
                    <ellipse cx={(leftOuter1 + leftInner1) / 2} cy={y + actualStep / 2} rx={3} ry={6} fill="#022c22" opacity={0.8} transform={`rotate(${Math.sin(y) * 10} ${(leftOuter1 + leftInner1) / 2} ${y + actualStep / 2})`} />
                  </g>
                );

                // Right cell
                cells.push(
                  <g key={`r-${y}`}>
                    <path
                      d={`M ${rightInner1},${y} 
                          C ${rightInner1 - 2},${y + actualStep / 2} ${rightInner2 - 2},${yNext - actualStep / 2} ${rightInner2},${yNext}
                          L ${rightOuter2},${yNext}
                          C ${rightOuter2 + 4},${yNext - actualStep / 2} ${rightOuter1 + 4},${y + actualStep / 2} ${rightOuter1},${y}
                          Z`}
                      fill="currentColor" stroke="#064e3b" strokeWidth={1.5} strokeLinejoin="round"
                    />
                    {/* Nucleus */}
                    <ellipse cx={(rightOuter1 + rightInner1) / 2} cy={y + actualStep / 2} rx={3} ry={6} fill="#022c22" opacity={0.8} transform={`rotate(${Math.cos(y) * 10} ${(rightOuter1 + rightInner1) / 2} ${y + actualStep / 2})`} />
                  </g>
                );

                // Lumen segment
                lumen.push(
                  <path
                    key={`lum-${y}`}
                    d={`M ${leftInner1},${y} 
                        C ${leftInner1 + 2},${y + actualStep / 2} ${leftInner2 + 2},${yNext - actualStep / 2} ${leftInner2},${yNext}
                        L ${rightInner2},${yNext}
                        C ${rightInner2 - 2},${yNext - actualStep / 2} ${rightInner1 - 2},${y + actualStep / 2} ${rightInner1},${y}
                        Z`}
                    fill="#e2e8f0" opacity={0.4} stroke="none"
                  />
                );
              }

              // The gland bulb at the bottom (y=620 to 670)
              const cxEnd = getCx(endY);
              const lumREnd = getLumenR(endY);
              const outREnd = getOuterR(endY);
              const leftOuterEnd = cxEnd - outREnd + Math.sin(endY * 0.1) * 2;
              const rightOuterEnd = cxEnd + outREnd - Math.sin(endY * 0.1) * 2;
              const leftInnerEnd = cxEnd - lumREnd + Math.cos(endY * 0.1) * 1.5;
              const rightInnerEnd = cxEnd + lumREnd - Math.cos(endY * 0.1) * 1.5;

              // Bulb cells (wider, rounder base)
              cells.push(
                <g key="bulb">
                  <path
                    d={`M ${leftOuterEnd},${endY} 
                        C ${leftOuterEnd - 25},${endY + 60} ${rightOuterEnd + 25},${endY + 60} ${rightOuterEnd},${endY}
                        L ${rightInnerEnd},${endY}
                        C ${rightInnerEnd + 15},${endY + 35} ${leftInnerEnd - 15},${endY + 35} ${leftInnerEnd},${endY}
                        Z`}
                    fill="currentColor" stroke="#064e3b" strokeWidth={1.5} strokeLinejoin="round"
                  />
                  {/* Nuclei around the bulb */}
                  <ellipse cx={cxEnd - 18} cy={endY + 20} rx={3} ry={6} fill="#022c22" opacity={0.8} transform={`rotate(45 ${cxEnd - 18} ${endY + 20})`} />
                  <ellipse cx={cxEnd + 18} cy={endY + 20} rx={3} ry={6} fill="#022c22" opacity={0.8} transform={`rotate(-45 ${cxEnd + 18} ${endY + 20})`} />
                  <ellipse cx={cxEnd} cy={endY + 38} rx={6} ry={3} fill="#022c22" opacity={0.8} />
                </g>
              );

              // Bulb lumen (matching the wider base)
              lumen.push(
                <path
                  key="bulb-lum"
                  d={`M ${leftInnerEnd},${endY} 
                      C ${leftInnerEnd - 15},${endY + 35} ${rightInnerEnd + 15},${endY + 35} ${rightInnerEnd},${endY}
                      Z`}
                  fill="#e2e8f0" opacity={0.4} stroke="none"
                />
              );

              return (
                <>
                  {cells}
                  {lumen}
                </>
              );
            })()}
          </Cell>
          {/* Helper to get HBC tunnel X coordinate and OEC target */}
          {(() => {
            const getTunnelX = (i: number, subOffset: number) => 120 + (i + 0.5) * (680 / 9) + subOffset;
            const getOECPos = (tunnelIdx: number) => {
              const group = Math.floor(tunnelIdx / 3);
              if (group === 0) return { x: 233, y: 570 };
              if (group === 1) return { x: 460, y: 580 };
              return { x: 687, y: 570 };
            };

            // 10 mature OSNs
            const mOSNs = [
              { x: 160, cy: 240, tunnelIdx: 0, sub: -2 },
              { x: 225, cy: 200, tunnelIdx: 1, sub: -2 },
              { x: 290, cy: 250, tunnelIdx: 2, sub: -2 },
              { x: 355, cy: 210, tunnelIdx: 3, sub: -2 },
              { x: 420, cy: 240, tunnelIdx: 4, sub: -2 },
              { x: 485, cy: 200, tunnelIdx: 5, sub: -2 },
              { x: 550, cy: 250, tunnelIdx: 6, sub: -2 },
              { x: 615, cy: 210, tunnelIdx: 7, sub: -2 },
              { x: 680, cy: 240, tunnelIdx: 8, sub: -2 },
              { x: 745, cy: 200, tunnelIdx: 8, sub: 3 },
            ];

            // 9 immature OSNs
            const iOSNs = [
              { x: 195, cy: 300, tunnelIdx: 0, sub: 2 },
              { x: 260, cy: 280, tunnelIdx: 1, sub: 2 },
              { x: 325, cy: 310, tunnelIdx: 2, sub: 2 },
              { x: 390, cy: 290, tunnelIdx: 3, sub: 2 },
              { x: 455, cy: 320, tunnelIdx: 4, sub: 2 },
              { x: 520, cy: 280, tunnelIdx: 5, sub: 2 },
              { x: 585, cy: 310, tunnelIdx: 6, sub: 2 },
              { x: 650, cy: 290, tunnelIdx: 7, sub: 2 },
              { x: 715, cy: 320, tunnelIdx: 7, sub: 5 },
            ];

            return (
              <>
                {/* ===== LAYER 4: Mature OSNs (red bipolar neurons) ===== */}
                {mOSNs.map((n, i) => {
                  const tx = getTunnelX(n.tunnelIdx, n.sub);
                  const oec = getOECPos(n.tunnelIdx);
                  const targetX = oec.x - 8 + (n.tunnelIdx % 3) * 8 + n.sub;
                  const targetY = oec.y - 5 + Math.abs(n.sub) * 2;
                  
                  return (
                    <React.Fragment key={`mosn-${i}`}>
                      {/* Axon (behind GBCs) */}
                      <Cell id={`mosn-ax-${i}`} typeId="mosn" isLine>
                        <path d={`M ${n.x},${n.cy+35} C ${n.x+5},400 ${tx},440 ${tx},476 L ${tx},495 C ${tx},530 ${targetX},530 ${targetX},${targetY}`} />
                      </Cell>
                      {/* Cell body + dendrite group */}
                      <Cell id={`mosn-${i}`} typeId="mosn">
                        {/* Dendrite (thick, going up to surface) */}
                        <path d={`M ${n.x},${n.cy-25} C ${n.x-8},170 ${n.x+8},110 ${n.x},55`} fill="none" stroke="currentColor" strokeWidth={6} />
                        {/* Cell body (teardrop) */}
                        <path d={`M ${n.x},${n.cy-30} C ${n.x+22},${n.cy-15} ${n.x+22},${n.cy+20} ${n.x},${n.cy+35} C ${n.x-22},${n.cy+20} ${n.x-22},${n.cy-15} ${n.x},${n.cy-30} Z`} />
                        {/* Nucleus */}
                        <ellipse cx={n.x} cy={n.cy+3} rx={11} ry={14} fill="#5c0a0a" opacity={0.6} stroke="none" />
                        {/* Olfactory knob (black) */}
                        <circle cx={n.x} cy={48} r={5} fill="#1a1a1a" stroke="none" />
                        {/* Cilia (black lines radiating from knob) */}
                        <path d={`M ${n.x-3},45 C ${n.x-18},30 ${n.x-28},18 ${n.x-35},5`} fill="none" stroke="#1a1a1a" strokeWidth={1.2} />
                        <path d={`M ${n.x-1},44 C ${n.x-12},25 ${n.x-15},15 ${n.x-18},2`} fill="none" stroke="#1a1a1a" strokeWidth={1.2} />
                        <path d={`M ${n.x},43 C ${n.x},25 ${n.x},15 ${n.x},2`} fill="none" stroke="#1a1a1a" strokeWidth={1.2} />
                        <path d={`M ${n.x+1},44 C ${n.x+12},25 ${n.x+15},15 ${n.x+18},2`} fill="none" stroke="#1a1a1a" strokeWidth={1.2} />
                        <path d={`M ${n.x+3},45 C ${n.x+18},30 ${n.x+28},18 ${n.x+35},5`} fill="none" stroke="#1a1a1a" strokeWidth={1.2} />
                      </Cell>
                    </React.Fragment>
                  );
                })}

                {/* ===== LAYER 5: Immature OSNs (orange bipolar, lower, shorter dendrite) ===== */}
                {iOSNs.map((n, i) => {
                  const tx = getTunnelX(n.tunnelIdx, n.sub);
                  const oec = getOECPos(n.tunnelIdx);
                  const targetX = oec.x - 8 + (n.tunnelIdx % 3) * 8 + n.sub;
                  const targetY = oec.y - 5 + Math.abs(n.sub) * 2;
                  
                  return (
                    <React.Fragment key={`iosn-${i}`}>
                      <Cell id={`iosn-ax-${i}`} typeId="iosn" isLine>
                        <path d={`M ${n.x},${n.cy+30} C ${n.x+10},420 ${tx},440 ${tx},476 L ${tx},495 C ${tx},530 ${targetX},530 ${targetX},${targetY}`} />
                      </Cell>
                      <Cell id={`iosn-${i}`} typeId="iosn">
                        {/* Short dendrite (doesn't reach surface) */}
                        <path d={`M ${n.x},${n.cy-20} C ${n.x+5},${n.cy-60} ${n.x-5},${n.cy-90} ${n.x},${n.cy-120}`} fill="none" stroke="currentColor" strokeWidth={5} strokeLinecap="round" />
                        {/* Cell body */}
                        <path d={`M ${n.x},${n.cy-22} C ${n.x+18},${n.cy-10} ${n.x+18},${n.cy+15} ${n.x},${n.cy+30} C ${n.x-18},${n.cy+15} ${n.x-18},${n.cy-10} ${n.x},${n.cy-22} Z`} />
                        <ellipse cx={n.x} cy={n.cy+4} rx={9} ry={12} fill="#7c2d12" opacity={0.6} stroke="none" />
                      </Cell>
                    </React.Fragment>
                  );
                })}
              </>
            );
          })()}

          {/* ===== LAYER 6: GBCs (yellow-gold round blobs, packed 2-3 rows) ===== */}
          {(() => {
            const gbcs = [];
            const startX = 135; // Start just after Bowman duct
            const endX = 785;
            const width = endX - startX;
            const cols = 17; // Cells per row
            const colWidth = width / cols;

            // Generate 1.5 staggered rows sitting right on top of HBCs
            const rows = [
              { y: 435, offset: 0, count: cols, sparse: false },
              { y: 405, offset: colWidth / 2, count: cols - 1, sparse: true }, // The 0.5 layer
            ];

            rows.forEach((row, rIdx) => {
              for (let i = 0; i < row.count; i++) {
                // If sparse row, skip every other cell to make it a half-layer
                if (row.sparse && i % 2 !== 0) continue;

                const cx = startX + row.offset + i * colWidth + colWidth / 2;
                // Add a very subtle organic wobble to y position
                const wobbleY = Math.sin(i * 1.5) * 3;
                const cy = row.y + wobbleY;

                // Add slight organic variations to cell size
                const rx = 18 + Math.cos(i) * 2;
                const ry = 17 + Math.sin(i) * 2;

                gbcs.push(
                  <Cell key={`gbc-${rIdx}-${i}`} id={`gbc-${rIdx}-${i}`} typeId="gbc">
                    <ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
                    {/* Nucleus */}
                    <ellipse cx={cx} cy={cy} rx={rx * 0.45} ry={ry * 0.45} fill="#b45309" opacity={0.6} stroke="none" />
                  </Cell>
                );
              }
            });
            return gbcs;
          })()}

          {/* ===== LAYER 7: HBCs (blue domes on basal lamina) ===== */}
          {(() => {
            const hbcs = [];
            // Bowman duct's outer edge at y=490 is approx x=110.
            const startX = 120;
            const endX = 800;
            const count = 9; // Enough to cover the whole base
            const w = (endX - startX) / count;

            for (let i = 0; i < count; i++) {
              // Add a 12px gap on each side to create space for Sustentacular cell foot processes
              const l = startX + i * w + 12;
              const r = startX + (i + 1) * w - 12;
              const cx = (l + r) / 2;

              hbcs.push(
                <Cell key={`hbc-${i}`} id={`hbc-${i}`} typeId="hbc">
                  <path d={`M ${l},490 C ${l + 5},445 ${r - 5},445 ${r},490 L ${cx + 8},490 C ${cx + 8},476 ${cx - 8},476 ${cx - 8},490 Z`} />
                  {/* Standard dark nucleus, moved up to make room for the tunnel */}
                  <ellipse cx={cx} cy={466} rx={11} ry={5} fill="#1e3a8a" opacity={0.8} stroke="none" />
                </Cell>
              );
            }
            return hbcs;
          })()}


          {/* ===== LAYER 8: Basement Membrane (interactive thick line) ===== */}
          <Cell id="bl-0" typeId="basal-lamina" isLine>
            <path d="M 0,490 Q 400,485 800,490" fill="none" stroke="currentColor" strokeWidth={6} />
          </Cell>
        </svg>

      </div>

      <div className="mt-4 px-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">↓ Lamina Propria</span>
      </div>
    </div>
  );
}
