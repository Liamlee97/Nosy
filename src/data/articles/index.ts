import { Article } from './types';
import { postCovidSmellLoss } from './1-post-covid-smell-loss';
import { understandingParosmia } from './2-understanding-parosmia';
import { howSmellTrainingWorks } from './3-how-smell-training-works';
import { smellAffectsTaste } from './4-smell-affects-taste';
import { aromatherapyScience } from './5-aromatherapy-science';

export type { Article };

export const articlesData: Record<number, Article> = {
    1: postCovidSmellLoss,
    2: understandingParosmia,
    3: howSmellTrainingWorks,
    4: smellAffectsTaste,
    5: aromatherapyScience
};

export const getAllArticles = () => Object.values(articlesData);

export const getArticleById = (id: number) => articlesData[id];
