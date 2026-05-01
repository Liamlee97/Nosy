import { Article } from './types';
import { whereSmellScienceStarted } from './FH_250603_where-smell-science-started';
import { chemistryMeetsPerception } from './FH_250617_chemistry-meets-perception';
import { smellSignaling1960s } from './FH_250701_smell-signaling-1960s';
import { adultOlfactoryNeurogenesis } from './FH_250715_adult-olfactory-neurogenesis';
import { testingTheNose } from './FH_250729_testing-the-nose';
import { proustEffect } from './FH_250812_proust-effect-smell-memory';
import { nobelPrize2004 } from './FH_250826_nobel-prize-2004';
import { shapeVsVibration } from './FH_250909_shape-vs-vibration';
import { pheromoneStory } from './FH_250923_pheromone-story';
import { bellChallenge1914 } from './FH_251007_bell-challenge-1914';
import { joyMilneParkinsons } from './FH_251021_joy-milne-parkinsons';
import { vomeronaslDebate } from './FH_251104_vomeronasal-debate';
import { penfieldOlfactoryCortex } from './FH_251118_penfield-olfactory-cortex';
import { orsOutsideNose } from './FH_251202_ors-outside-nose';
import { perfumeRevolution } from './FH_251216_perfume-revolution';
import { lancetOlfactoryGenome } from './FH_251230_lancet-olfactory-genome';
import { brocaOlfactoryBrain } from './FH_260113_broca-olfactory-brain';
import { monellCenter } from './FH_260127_monell-center';
import { cloquetOsphresiologie } from './FH_260210_cloquet-osphresiologie';
import { helenKellerSmell } from './FH_260224_helen-keller-smell';
import { mombaertsGlomerularMap } from './FH_260310_mombaerts-glomerular-map';
import { smellSleepCircadian } from './FH_260324_smell-sleep-circadian';
import { geneticVariationSmell } from './FH_260407_genetic-variation-smell';
import { combinatorialCoding } from './FH_260421_combinatorial-coding';
import { trigeminalChemesthesis } from './FH_260505_trigeminal-chemesthesis';
import { retronasalOlfaction } from './FH_260519_retronasal-olfaction';
import { mucusObps } from './FH_260602_mucus-obps';

export type { Article };

export const articlesData: Record<string, Article> = {
    "where-smell-science-started": whereSmellScienceStarted,
    "chemistry-meets-perception": chemistryMeetsPerception,
    "smell-signaling-1960s": smellSignaling1960s,
    "adult-olfactory-neurogenesis": adultOlfactoryNeurogenesis,
    "testing-the-nose": testingTheNose,
    "proust-effect-smell-memory": proustEffect,
    "nobel-prize-2004": nobelPrize2004,
    "shape-vs-vibration": shapeVsVibration,
    "pheromone-story": pheromoneStory,
    "bell-challenge-1914": bellChallenge1914,
    "joy-milne-parkinsons": joyMilneParkinsons,
    "vomeronasal-debate": vomeronaslDebate,
    "penfield-olfactory-cortex": penfieldOlfactoryCortex,
    "ors-outside-nose": orsOutsideNose,
    "perfume-revolution": perfumeRevolution,
    "lancet-olfactory-genome": lancetOlfactoryGenome,
    "broca-olfactory-brain": brocaOlfactoryBrain,
    "monell-center": monellCenter,
    "cloquet-osphresiologie": cloquetOsphresiologie,
    "helen-keller-smell": helenKellerSmell,
    "mombaerts-glomerular-map": mombaertsGlomerularMap,
    "smell-sleep-circadian": smellSleepCircadian,
    "genetic-variation-smell": geneticVariationSmell,
    "combinatorial-coding": combinatorialCoding,
    "trigeminal-chemesthesis": trigeminalChemesthesis,
    "retronasal-olfaction": retronasalOlfaction,
    "mucus-obps": mucusObps
};

export const getAllArticles = () => Object.values(articlesData);

export const getArticleById = (id: string) => articlesData[id];
