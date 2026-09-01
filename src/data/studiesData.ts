export interface Experiment {
  id: string;
  name: string;
  description: string;
  findings: string;
  resultState: string; // Identifier to pass to OECrossSection
}

export interface Study {
  id: string;
  title: string;
  authors: string;
  year: number;
  journal: string;
  summary: string;
  experiments: Experiment[];
}

export const scienceStudies: Study[] = [
  {
    id: 'schnittke-p63',
    title: 'p63 Regulates Olfactory Stem Cell Self-Renewal and Differentiation',
    authors: 'Schnittke et al.',
    year: 2015,
    journal: 'Stem Cells',
    summary: 'This study investigates the role of the transcription factor p63 in the maintenance of Horizontal Basal Cells (HBCs) in the adult olfactory epithelium. It demonstrates that p63 acts as a master regulator of HBC quiescence.',
    experiments: [
      {
        id: 'p63-ko',
        name: 'Knockout of p63 in adult HBCs',
        description: 'Researchers selectively deleted the p63 gene in adult Horizontal Basal Cells using an inducible Cre-loxP system.',
        findings: 'Loss of p63 causes HBCs to lose their reserve stem cell state and rapidly differentiate into mature cell types (neurons and sustentacular cells). This leads to the depletion of the HBC layer.',
        resultState: 'p63-ko',
      },
    ],
  },
];
