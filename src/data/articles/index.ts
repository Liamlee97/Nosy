import { Article } from './types';
import { whereSmellScienceStarted } from './where-smell-science-started';
import { chemistryMeetsPerception } from './chemistry-meets-perception';
import { smellSignaling1960s } from './smell-signaling-1960s';
import { adultOlfactoryNeurogenesis } from './adult-olfactory-neurogenesis';
import { greatReceptorHunt } from './great-receptor-hunt';
import { testingTheNose } from './testing-the-nose';
import { smellingDiseaseDiagnosticClue } from './smelling-disease-diagnostic-clue';
import { proustEffect } from './proust-effect-smell-memory';

export type { Article };

export const articlesData: Record<string, Article> = {
    "where-smell-science-started": whereSmellScienceStarted,
    "chemistry-meets-perception": chemistryMeetsPerception,
    "smell-signaling-1960s": smellSignaling1960s,
    "adult-olfactory-neurogenesis": adultOlfactoryNeurogenesis,
    "great-receptor-hunt": greatReceptorHunt,
    "testing-the-nose": testingTheNose,
    "smelling-disease-diagnostic-clue": smellingDiseaseDiagnosticClue,
    "proust-effect-smell-memory": proustEffect
};

export const getAllArticles = () => Object.values(articlesData);

export const getArticleById = (id: string) => articlesData[id];
