// oeData.ts — Scientific data for the Interactive Olfactory Epithelium Explorer

export interface CellType {
  id: string;
  name: string;
  shortName: string;
  layer: 'apical' | 'upper-middle' | 'middle' | 'lower-middle' | 'basal' | 'basement';
  color: string;
  darkColor: string;
  hoverColor: string;
  description: string;
  markers: string[];
  functions: string[];
  perturbationIds: string[];
}

export interface PerturbationStep {
  label: string;
  description: string;
  cellId: string;
  color: string;
}

export interface Perturbation {
  id: string;
  name: string;
  targetCellId: string;
  shortDescription: string;
  fullDescription: string;
  steps: PerturbationStep[];
  reference: string;
}

export const cellTypes: CellType[] = [

  {
    id: 'sustentacular',
    name: 'Sustentacular Cells',
    shortName: 'Sus Cells',
    layer: 'apical',
    color: '#a3e635',      // Olive green
    darkColor: '#4d7c0f',
    hoverColor: '#bef264',
    description: 'Columnar supporting cells spanning from the apical surface to the basal lamina. They maintain the ionic and metabolic microenvironment of olfactory sensory neurons and participate in xenobiotic detoxification.',
    markers: ['HES1', 'CYP2A13', 'CYP1A2'],
    functions: [
      'Metabolic and structural support',
      'Xenobiotic metabolism (detoxification)',
      'Phagocytosis of dead OSNs'
    ],
    perturbationIds: []
  },
  {
    id: 'ionocyte',
    name: 'Ionocytes',
    shortName: 'Ionocyte',
    layer: 'apical',
    color: '#d946ef',      // fuchsia-500
    darkColor: '#701a75',   // fuchsia-900
    hoverColor: '#f0abfc',  // fuchsia-300
    description: 'Rare epithelial cells involved in fluid and ion transport. They help regulate the ionic composition, pH, and physical properties of the olfactory mucus. Not much is known about this cell type relative to other cell types.',
    markers: ['FOXI1', 'CFTR', 'ATP6V1B1', 'ASCL3'],
    functions: [
      'Fluid and electrolyte balance',
      'Regulation of mucosal pH',
      'Maintenance of olfactory mucus'
    ],
    perturbationIds: []
  },
  {
    id: 'tuft',
    name: 'Tuft Cells',
    shortName: 'Tuft Cell',
    layer: 'apical',
    color: '#38bdf8',      // sky-400
    darkColor: '#0369a1',   // sky-700
    hoverColor: '#7dd3fc',  // sky-300
    description: 'Specialized chemosensory cells that protrude into the mucus layer. They detect irritants, allergens, and microbial signals and help initiate immune and epithelial repair responses.',
    markers: ['TRPM5', 'DCLK1', 'POU2F3', 'CHAT', 'VIL1'],
    functions: [
      'Detection of irritants and pathogens',
      'Modulation of immune responses',
      'Regulation of epithelial homeostasis'
    ],
    perturbationIds: []
  },
  {
    id: 'mosn',
    name: 'Mature Olfactory Sensory Neurons (mOSNs)',
    shortName: 'mOSNs',
    layer: 'upper-middle',
    color: '#ef4444',      // Deep red
    darkColor: '#7f1d1d',
    hoverColor: '#f87171',
    description: 'Fully differentiated bipolar neurons that detect odorants. Each neuron expresses one odorant receptor gene and sends an axon to defined glomeruli in the olfactory bulb.',
    markers: ['OMP', 'NCAM1', 'PGP 9.5', 'Odorant receptor genes'],
    functions: [
      'Odor detection via single OR expression',
      'Signal transduction to olfactory bulb',
      'Axon targeting to specific glomeruli'
    ],
    perturbationIds: []
  },
  {
    id: 'iosn',
    name: 'Immature Olfactory Sensory Neurons (iOSNs)',
    shortName: 'iOSNs',
    layer: 'middle',
    color: '#f97316',      // Orange
    darkColor: '#c2410c',
    hoverColor: '#fdba74',
    description: 'Newly generated neurons in the process of maturing. They extend axons, acquire neuronal identity, and transition toward mature odor-responsive olfactory sensory neurons.',
    markers: ['GAP43', 'TUBB3', 'SCG10'],
    functions: [
      'Axon extension toward olfactory bulb',
      'OR gene choice and stabilization',
      'Maturation toward functional mOSN'
    ],
    perturbationIds: []
  },
  {
    id: 'gbc',
    name: 'Globose Basal Cells (GBCs)',
    shortName: 'GBCs',
    layer: 'lower-middle',
    color: '#fcd34d',      // Yellow/Gold
    darkColor: '#b45309',
    hoverColor: '#fde68a',
    description: 'Transit-amplifying progenitor cells that actively proliferate. They are the principal source of new olfactory neurons during normal turnover and contribute to regeneration after injury.',
    markers: ['ASCL1', 'NEUROG1', 'NEUROD1'],
    functions: [
      'Active proliferation for neuronal replacement',
      'Give rise to iOSNs → mOSNs',
      'Can also produce sustentacular cells',
      'Primary regenerative progenitors during normal turnover'
    ],
    perturbationIds: []
  },
  {
    id: 'hbc',
    name: 'Horizontal Basal Cells (HBCs)',
    shortName: 'HBCs',
    layer: 'basal',
    color: '#3b82f6',      // Deep Blue
    darkColor: '#1e3a8a',
    hoverColor: '#60a5fa',
    description: 'Quiescent reserve stem cells that reside directly on the basal lamina. After severe injury they activate, proliferate, and can regenerate multiple olfactory epithelial cell types.',
    markers: ['KRT5', 'KRT14', 'TP63', 'NRCAM'],
    functions: [
      'Reserve stem cell pool (quiescent)',
      'Activated by severe injury (p63 downregulation)',
      'Multipotent: can produce GBCs, OSNs, Sus cells, duct/gland cells',
      'Essential for full epithelial regeneration'
    ],
    perturbationIds: []
  },
  {
    id: 'basal-lamina',
    name: 'Basal Lamina',
    shortName: 'Basal Lamina',
    layer: 'basement',
    color: '#d6d3d1',      // stone-300
    darkColor: '#44403c',   // stone-700
    hoverColor: '#a8a29e',  // stone-400
    description: 'Extracellular matrix boundary separating the olfactory epithelium from the lamina propria. It provides structural support and signaling cues for basal cells.',
    markers: ['Laminin', 'Collagen IV', 'Fibronectin'],
    functions: [
      'Structural boundary and scaffold',
      'Signaling to basal cells',
      'Anchoring point for HBCs'
    ],
    perturbationIds: []
  },
  {
    id: 'bowman',
    name: 'Bowman\'s Gland Duct',
    shortName: 'Bowman\'s Duct',
    layer: 'apical',
    color: '#166534',      // Dark green
    darkColor: '#052e16',
    hoverColor: '#15803d',
    description: 'Duct structures connecting Bowman\'s glands in the lamina propria to the epithelial surface. They deliver secretions that contribute to the mucus layer covering the olfactory epithelium.',
    markers: ['SOX9', 'MUC5AC'],
    functions: [
      'Mucus secretion',
      'Delivery of odorant binding proteins',
      'Protection of the epithelial surface'
    ],
    perturbationIds: []
  },

  {
    id: 'oec',
    name: 'Olfactory Ensheathing Cells (OECs)',
    shortName: 'OEC',
    layer: 'basement',
    color: '#a8a29e',      // stone-400
    darkColor: '#78716c',   // stone-500
    hoverColor: '#d6d3d1',  // stone-300
    description: 'Specialized glial cells that ensheath bundles of olfactory sensory neuron axons as they leave the epithelium and project toward the olfactory bulb.',
    markers: ['S100B', 'PLP1', 'GFAP', 'p75NTR'],
    functions: [
      'Ensheath and support OSN axons',
      'Provide growth-promoting environment',
      'Guide regenerating axons to the olfactory bulb'
    ],
    perturbationIds: []
  },
  {
    id: 'fibroblast',
    name: 'Lamina Propria Fibroblasts',
    shortName: 'Fibroblast',
    layer: 'basement',
    color: '#f472b6',      // pink-400
    darkColor: '#db2777',   // pink-600
    hoverColor: '#fdf2f8',  // pink-50
    description: 'Stromal cells of the lamina propria that produce extracellular matrix and paracrine signals supporting tissue structure and repair.',
    markers: ['VIM', 'PDGFRA', 'COL1A1'],
    functions: [
      'Extracellular matrix (ECM) production',
      'Structural support of the lamina propria',
      'Paracrine signaling for tissue repair'
    ],
    perturbationIds: []
  }
];

export const perturbations: Perturbation[] = [];

export const getCellById = (id: string): CellType | undefined =>
  cellTypes.find(cell => cell.id === id);

export const getPerturbationById = (id: string): Perturbation | undefined =>
  perturbations.find(p => p.id === id);

export const getPerturbationsForCell = (cellId: string): Perturbation[] =>
  perturbations.filter(p => p.targetCellId === cellId);
