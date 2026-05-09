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
    id: 'cilia',
    name: 'Cilia & Olfactory Knobs',
    shortName: 'Cilia',
    layer: 'apical',
    color: '#a7f3d0',      // emerald-200
    darkColor: '#065f46',   // emerald-800
    hoverColor: '#6ee7b7',  // emerald-300
    description: 'Thin sensory projections extending from OSN dendrites into the mucus layer. Each mature OSN has 10–30 cilia that contain odorant receptors and the signal transduction machinery (Golf, ACIII, CNG channels).',
    markers: ['OMP (on parent OSN)', 'ACIII', 'Golf'],
    functions: [
      'Odorant binding via receptors',
      'Signal transduction (cAMP cascade)',
      'Interface between external odors and neural signaling'
    ],
    perturbationIds: []
  },
  {
    id: 'sustentacular',
    name: 'Sustentacular (Supporting) Cells',
    shortName: 'Sus Cells',
    layer: 'apical',
    color: '#d1d5db',      // gray-300 to match reference
    darkColor: '#4b5563',   // gray-600
    hoverColor: '#e5e7eb',  // gray-200
    description: 'Columnar supporting cells spanning from the apical surface to the basal lamina. They maintain the ionic microenvironment, provide metabolic support, and express cytochrome P450 enzymes that detoxify inhaled chemicals.',
    markers: ['Hes1', 'SUS-4', 'CYP2A13', 'CYP1A2'],
    functions: [
      'Ionic environment maintenance',
      'Structural support for OSNs',
      'Xenobiotic metabolism / detoxification',
      'Phagocytosis of apoptotic neurons'
    ],
    perturbationIds: []
  },
  {
    id: 'mosn',
    name: 'Mature Olfactory Sensory Neurons (mOSNs)',
    shortName: 'mOSNs',
    layer: 'upper-middle',
    color: '#fca5a5',      // red-300 to match reference
    darkColor: '#991b1b',   // red-800
    hoverColor: '#fecaca',  // red-200
    description: 'Fully differentiated bipolar neurons. Each expresses a single odorant receptor gene (one-receptor-one-neuron rule). Their axons project through the cribriform plate to specific glomeruli in the olfactory bulb. They are continuously replaced throughout life, with a lifespan of ~30–60 days.',
    markers: ['OMP', 'Single OR gene', 'Mature neuronal markers'],
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
    color: '#d8b4fe',      // purple-300 to match reference
    darkColor: '#6b21a8',   // purple-800
    hoverColor: '#e9d5ff',  // purple-200
    description: 'Newly born neurons in the process of maturing. They express GAP43 (a growth-associated protein) but have not yet fully extended their axons to the olfactory bulb or established stable OR expression.',
    markers: ['GAP43', 'β-tubulin III', 'SCG10'],
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
    color: '#fef08a',      // yellow-200 to match reference
    darkColor: '#a16207',   // yellow-800
    hoverColor: '#fef9c3',  // yellow-100
    description: 'Transit-amplifying progenitor cells that actively proliferate. They are the main source of new neurons and non-neuronal cells during both normal turnover and regeneration after injury.',
    markers: ['Ascl1 (Mash1)', 'Notch1', 'Neurog1', 'NeuroD1', 'Sox2'],
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
    color: '#93c5fd',      // blue-300 to match reference
    darkColor: '#1e3a8a',   // blue-900
    hoverColor: '#bfdbfe',  // blue-200
    description: 'Reserve stem cells that sit directly on the basal lamina. Under normal conditions, they are quiescent — held dormant by high expression of the transcription factor p63 (Trp63). Upon severe injury, p63 is downregulated, causing HBCs to activate, proliferate, and reconstitute all cell types in the OE.',
    markers: ['Krt5', 'CD54', 'Krt14', 'p63 (Trp63)', 'ICAM-1'],
    functions: [
      'Reserve stem cell pool (quiescent)',
      'Activated by severe injury (p63 downregulation)',
      'Multipotent: can produce GBCs, OSNs, Sus cells, duct/gland cells',
      'Essential for full epithelial regeneration'
    ],
    perturbationIds: ['p63-knockdown', 'methimazole-injury']
  },
  {
    id: 'basal-lamina',
    name: 'Basal Lamina',
    shortName: 'Basal Lamina',
    layer: 'basement',
    color: '#d6d3d1',      // stone-300
    darkColor: '#44403c',   // stone-700
    hoverColor: '#a8a29e',  // stone-400
    description: 'The extracellular matrix boundary separating the olfactory epithelium from the underlying lamina propria. It provides structural support and contains signaling molecules that influence cell behavior.',
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
    color: '#bbf7d0',      // green-200
    darkColor: '#166534',   // green-800
    hoverColor: '#86efac',  // green-300
    description: 'Duct structures that extend from Bowman\'s glands in the lamina propria up to the epithelial surface. They secrete the mucus that coats the olfactory epithelium, providing the solvent for odorants and harboring odorant binding proteins (OBPs).',
    markers: ['Sox9', 'Mucins (e.g., Muc5AC)'],
    functions: [
      'Mucus secretion',
      'Delivery of odorant binding proteins',
      'Protection of the epithelial surface'
    ],
    perturbationIds: []
  },
  {
    id: 'ionocyte',
    name: 'Ionocyte',
    shortName: 'Ionocyte',
    layer: 'apical',
    color: '#fbcfe8',      // pink-200
    darkColor: '#9d174d',   // pink-800
    hoverColor: '#f9a8d4',  // pink-300
    description: 'A rare epithelial cell type involved in fluid and ion transport. They express CFTR (Cystic Fibrosis Transmembrane Conductance Regulator) and are thought to regulate the ionic composition of the olfactory mucus.',
    markers: ['CFTR', 'Foxi1', 'Ascl3'],
    functions: [
      'Ion transport',
      'Mucus rheology regulation'
    ],
    perturbationIds: []
  },
  {
    id: 'tuft',
    name: 'Tuft Cell (Microvillous Cell)',
    shortName: 'Tuft Cell',
    layer: 'apical',
    color: '#fdba74',      // orange-300
    darkColor: '#9a3412',   // orange-800
    hoverColor: '#fed7aa',  // orange-200
    description: 'A specialized chemosensory epithelial cell featuring an apical tuft of microvilli. They are often involved in immune surveillance and response to irritants or allergens.',
    markers: ['Dclk1', 'Pou2f3', 'Trpm5'],
    functions: [
      'Chemosensation of irritants/metabolites',
      'Initiation of type 2 immune responses'
    ],
    perturbationIds: []
  }
];

export const perturbations: Perturbation[] = [
  {
    id: 'p63-knockdown',
    name: 'p63 (Trp63) Knockdown',
    targetCellId: 'hbc',
    shortDescription: 'Remove the molecular brake that keeps HBCs dormant',
    fullDescription: 'p63 is a transcription factor critical for maintaining HBC quiescence. When p63 expression is lost — either through genetic knockout or after severe injury — HBCs exit their dormant state and begin to proliferate and differentiate, reconstituting the entire olfactory epithelium.',
    steps: [
      {
        label: 'HBC (Quiescent)',
        description: 'HBCs express high levels of p63, which keeps them in a dormant, quiescent state on the basal lamina.',
        cellId: 'hbc',
        color: '#e9d5ff'
      },
      {
        label: 'p63 Removed',
        description: 'p63 expression is knocked down. The molecular brake on HBC self-renewal and differentiation is released.',
        cellId: 'hbc',
        color: '#f87171'
      },
      {
        label: 'HBC Activated',
        description: 'Without p63, HBCs exit quiescence, begin proliferating, and upregulate differentiation-associated transcription factors.',
        cellId: 'hbc',
        color: '#c084fc'
      },
      {
        label: 'GBC',
        description: 'Activated HBCs differentiate into Globose Basal Cells (GBCs), the transit-amplifying progenitors.',
        cellId: 'gbc',
        color: '#fde68a'
      },
      {
        label: 'iOSN',
        description: 'GBCs give rise to immature Olfactory Sensory Neurons, which begin extending axons toward the olfactory bulb.',
        cellId: 'iosn',
        color: '#c7d2fe'
      },
      {
        label: 'mOSN + Sus Cell',
        description: 'iOSNs mature into fully functional mOSNs. GBCs also produce new Sustentacular cells. The epithelium is reconstituted.',
        cellId: 'mosn',
        color: '#bfdbfe'
      }
    ],
    reference: 'Schnittke et al., J Neurosci (2015); Fletcher et al., J Neurosci (2011)'
  },
  {
    id: 'methimazole-injury',
    name: 'Methimazole Chemical Injury',
    targetCellId: 'hbc',
    shortDescription: 'Simulate widespread OE destruction and observe full regeneration',
    fullDescription: 'Methimazole is a drug metabolized by CYP enzymes in sustentacular cells, producing a toxic intermediate that causes widespread cell death throughout the olfactory epithelium. Only HBCs survive (protected by their basal position and lack of CYP expression), and they subsequently activate to regenerate the entire tissue.',
    steps: [
      {
        label: 'Normal OE',
        description: 'The olfactory epithelium is intact with all cell types present and functional.',
        cellId: 'mosn',
        color: '#bfdbfe'
      },
      {
        label: 'Methimazole Applied',
        description: 'Methimazole is administered. CYP enzymes in sustentacular cells metabolize it into a toxic intermediate.',
        cellId: 'sustentacular',
        color: '#f87171'
      },
      {
        label: 'Widespread Death',
        description: 'OSNs, GBCs, and sustentacular cells are destroyed. Only HBCs survive on the denuded basal lamina.',
        cellId: 'hbc',
        color: '#fca5a5'
      },
      {
        label: 'HBC Activation',
        description: 'Surviving HBCs downregulate p63, exit quiescence, and begin to proliferate.',
        cellId: 'hbc',
        color: '#c084fc'
      },
      {
        label: 'GBC Expansion',
        description: 'Activated HBCs generate GBCs, which rapidly expand as transit-amplifying progenitors.',
        cellId: 'gbc',
        color: '#fde68a'
      },
      {
        label: 'Full Regeneration',
        description: 'GBCs differentiate into iOSNs → mOSNs and sustentacular cells. The epithelium is fully regenerated within 6–8 weeks.',
        cellId: 'mosn',
        color: '#86efac'
      }
    ],
    reference: 'Leung et al., J Comp Neurol (2007); Gadye et al., Cell Stem Cell (2017)'
  }
];

export const getCellById = (id: string): CellType | undefined =>
  cellTypes.find(cell => cell.id === id);

export const getPerturbationById = (id: string): Perturbation | undefined =>
  perturbations.find(p => p.id === id);

export const getPerturbationsForCell = (cellId: string): Perturbation[] =>
  perturbations.filter(p => p.targetCellId === cellId);
