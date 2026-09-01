import { Article } from './types';

export const pheromoneStory: Article = {
    id: "pheromone-story",
    title: "The Pheromone Story",
    excerpt: "500,000 moths, a Nobel laureate, and a powerful molecule that attracts from hundreds of meters away.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-09-23",
    tags: ["Olfaction", "Pheromones", "History", "Entomology"],
    author: "Liam Seungjin Lee",
    images: {
        "butenandt": {
            url: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Bad_Schachen_Portr%C3%A4t%3B_Adolf_Butenandt_-_W134Nr.020182c_-_Willy_Pragher_%28cropped%29.jpg",
            caption: "Adolf Butenandt",
            source: "Wikimedia Commons"
        },
        "silkmoth": {
            url: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bombyx_mori_sul_bozzolo_01.jpg",
            caption: "A Bombyx mori (silkworm moth).",
            source: "Wikimedia Commons"
        }
    },
    content: `
**In 1959, a German chemist finally cracked a puzzle that had consumed him for two decades and, in the process, proved that invisible molecules could control animal behavior across astonishing distances.**

## A 20-Year Obsession

Adolf Butenandt had already won a Nobel Prize in Chemistry (1939) for his work on sex hormones. But there was something else that fascinated him: the silk moth.

:::image(butenandt)

Entomologists had long noticed something bizarre. A female silkworm moth (*Bombyx mori*), sitting motionless in a cage, could drive male moths into a frenzy from hundreds of meters away. No sound. No visual signal. Just air. Something invisible was traveling on the wind — but what?

Butenandt set out to find the molecule responsible. There was one problem: the substance was present in vanishingly tiny amounts. To extract enough to analyze, his team had to process the scent glands of approximately **500,000 female moths** [1].

:::callout
**Fun Fact (not so fun for the moths):** Each female moth produces only about 0.01 micrograms of the attractant substance. Butenandt's team needed hundreds of thousands of moths, painstakingly dissected, just to isolate enough material for chemical analysis. The work took from 1939 to 1959.
:::

## Bombykol: Molecule #1

In 1959, Butenandt and his colleagues finally identified the compound: a 16-carbon alcohol with two double bonds. They named it **bombykol**, after the moth's Latin name [1].

:::image(silkmoth)

Bombykol was extraordinary. A male moth's antenna could detect it at concentrations as low as a few hundred molecules per cubic centimeter of air. It didn't just attract males — it triggered a specific, stereotyped flight behavior: the males would fly upwind, zigzagging toward the source.

But what do you *call* a molecule like this? There was no word for it.

## Naming a New Concept

That same year, Peter Karlson and Martin Lüscher coined the term **"pheromone"** — from the Greek *pherein* (to carry) and *hormōn* (to excite) [2]. They defined it as a substance secreted by one individual that triggers a specific behavior or physiological response in another individual of the same species.

The concept was revolutionary. Hormones act *within* an organism. Pheromones act *between* organisms. It was chemical communication at a distance.

:::callout
**The definition, word for word:** Karlson and Lüscher wrote that pheromones are "substances which are secreted to the outside by an individual and received by a second individual of the same species, in which they release a specific reaction, for example, a definite behaviour or a developmental process" [2].
:::

## The Human Pheromone Question

Naturally, the next question was: do humans have pheromones too?

This turned out to be surprisingly difficult to answer. Despite decades of research, **no human pheromone has been conclusively identified** [3]. There have been candidates — androstadienone (found in male sweat) and estratetraenol have both been studied — but rigorous follow-up studies (including a 2017 study by Hare et al. in *Royal Society Open Science*) have failed to confirm specific pheromone-like effects [4].

The issue isn't whether humans respond to body odors, because we clearly do. The issue is whether any single molecule meets Karlson and Lüscher's strict definition: one compound, one specific response, across all members of the species. So far, the answer appears to be no.

## Why It Still Matters

Bombykol opened an entire field. Today, pheromone research spans agriculture (pheromone traps for pest control), conservation biology (tracking endangered species), and neuroscience (understanding the vomeronasal organ in rodents).

And the core insight that a single invisible molecule can hijack another creature's behavior, remains one of the most striking demonstrations of the power of chemical senses.
  `,
    sources: [
        {
            title: "Über den Sexuallockstoff des Seidenspinners Bombyx mori. Reindarstellung und Konstitution (Butenandt et al., 1959, Zeitschrift für Naturforschung B)",
            url: "https://doi.org/10.1515/znb-1959-0417"
        },
        {
            title: "Pheromones: a new term for a class of biologically active substances (Karlson & Lüscher, 1959, Nature)",
            url: "https://doi.org/10.1038/183055a0"
        },
        {
            title: "The search for human pheromones: the lost decades and the necessity of returning to first principles (Wyatt, 2015, Proceedings. Biological sciences)",
            url: "https://doi.org/10.1098/rspb.2014.2994"
        },
        {
            title: "Putative sex-specific human pheromones do not affect gender perception, attractiveness ratings or unfaithfulness judgements of opposite sex faces (Hare et al., 2017, Royal Society Open Science)",
            url: "https://doi.org/10.1098/rsos.160831"
        }
    ]
};
