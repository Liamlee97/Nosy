import { Article } from './types';
import { postCovidSmellLoss } from './post-covid-smell-loss';
import { understandingParosmia } from './understanding-parosmia';
import { howSmellTrainingWorks } from './how-smell-training-works';
import { smellAffectsTaste } from './smell-affects-taste';
import { aromatherapyScience } from './aromatherapy-science';
import { whereSmellScienceStarted } from './where-smell-science-started';
import { chemistryMeetsPerception } from './chemistry-meets-perception';

export type { Article };

export const articlesData: Record<string, Article> = {
    "post-covid-smell-loss": postCovidSmellLoss,
    "understanding-parosmia": understandingParosmia,
    "how-smell-training-works": howSmellTrainingWorks,
    "smell-affects-taste": smellAffectsTaste,
    "aromatherapy-science": aromatherapyScience,
    "where-smell-science-started": whereSmellScienceStarted,
    "chemistry-meets-perception": chemistryMeetsPerception
};

export const getAllArticles = () => Object.values(articlesData);

export const getArticleById = (id: string) => articlesData[id];
