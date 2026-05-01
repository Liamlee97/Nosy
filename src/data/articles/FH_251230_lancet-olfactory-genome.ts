import { Article } from './types';

export const lancetOlfactoryGenome: Article = {
    id: "lancet-olfactory-genome",
    title: "Doron Lancet's Legacy",
    excerpt: "Before anyone had cloned an olfactory receptor gene, a scientist predicted what they'd look like. His work laid the conceptual groundwork for the eventual Nobel Prize winning discovery.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2025-12-30",
    tags: ["Olfaction", "Genetics", "History", "Genomics"],
    author: "Liam Seungjin Lee",
    images: {
        "weizmann": {
            url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Weizmann_institute_main_gate.jpg",
            caption: "The Weizmann Institute of Science in Rehovot, Israel.",
            source: "Wikimedia Commons"
        },
        "gpcr": {
            url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/GPCR_structure.png",
            caption: "The basic structure of a G-protein coupled receptor.",
            source: "Wikimedia Commons"
        }
    },
    content: `
**The story of smell receptors usually starts with Buck and Axel in 1991. But one scientist was thinking about the problem years earlier. He didn't clone the receptors. He predicted what they would be.**

## The Prediction

In the mid-1980s, **Doron Lancet** at the Weizmann Institute of Science in Israel was studying olfactory signal transduction. In a **1986 paper in *Biochemistry***, he synthesized available evidence (including cAMP signaling and GTP-binding protein involvement) and proposed that olfactory receptors likely belonged to the **G-protein coupled receptor (GPCR) superfamily** [1].

:::image(weizmann)

This was five years before Buck and Axel's discovery. At the time, no one had seen an olfactory receptor. But Lancet's reasoning was sound: the intracellular signaling cascade in olfactory neurons looked identical to other GPCR-mediated systems. The receptor had to be a seven-transmembrane domain protein.

He was right.

:::image(gpcr)

## Building the Database

After Buck and Axel identified the receptor gene family in 1991, the question became: how many are there? Which ones work? Which are pseudogenes? And how do they differ between species?

Lancet's lab took on this challenge systematically. They created the **Human Olfactory Receptor Data Explorer (HORDE)**, one of the first comprehensive databases of olfactory receptor genes [2].

HORDE cataloged every known human OR gene, classified each as functional or pseudogenic, and tracked their chromosomal locations. It became an essential resource for the research community.

:::callout
**Fun Fact:** The human genome contains approximately 396 functional olfactory receptor genes and about 425 pseudogenes. Together, the OR gene family (functional plus pseudo) is the **largest gene family in the human genome**. Nearly 800 genes dedicated, at least ancestrally, to detecting chemicals.
:::

## The Evolutionary Story

Lancet's group also contributed key insights into how the OR gene family evolved. Working with **Yoshihito Niimura**, they showed that the number of functional OR genes varies enormously across species:

Elephants have over **2,000** functional OR genes. Mice have about **1,000**. Dogs have roughly **800**. Humans have about **400** [3].

The pattern reflects each species' ecological reliance on olfaction. Mammals that depend heavily on smell have expanded their OR repertoire. Those that rely more on vision or hearing have allowed their OR genes to become pseudogenes.

In primates specifically, the decline in functional OR genes correlates with the evolution of **trichromatic color vision**. As Old World primates gained a third cone type and could see in full color, the selective pressure to maintain a large OR repertoire apparently relaxed [4].

## A Quiet Contribution

Lancet never became as famous as Buck and Axel. He didn't clone the receptors. He didn't win the Nobel Prize. But his intellectual contributions were foundational.

He predicted the receptor class before anyone found it. He built the database that organized the field's knowledge. And his evolutionary analyses gave context to why human olfaction looks the way it does.

`,
    sources: [
        {
            title: "Vertebrate olfactory reception (Lancet, 1986, Annual Review of Neuroscience)",
            url: "https://doi.org/10.1146/annurev.ne.09.030186.001553"
        },
        {
            title: "HORDE: comprehensive resource for olfactory receptor genomics (Olender et al., 2013, Methods in molecular biology)",
            url: "https://doi.org/10.1007/978-1-62703-377-0_2"
        },
        {
            title: "Extreme expansion of the olfactory receptor gene repertoire in African elephants and evolutionary dynamics of orthologous gene groups in 13 placental mammals (Niimura et al., 2014, Genome Research)",
            url: "https://doi.org/10.1101/gr.169532.113"
        },
        {
            title: "Loss of olfactory receptor genes coincides with the acquisition of full trichromatic vision in primates (Gilad et al., 2004, PLoS Biology)",
            url: "https://doi.org/10.1371/journal.pbio.0020005"
        }
    ]
};
