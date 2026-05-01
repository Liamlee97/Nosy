import { Article } from './types';

export const nobelPrize2004: Article = {
    id: "nobel-prize-2004",
    title: "The First Nobel Prize for Smell 🏆 Buck, Axel, and the Discovery of Olfactory Receptors",
    excerpt: "In 1991, two Columbia scientists found the genes that let us smell. Thirteen years later, Stockholm called. Here's the full story of how olfaction earned its Nobel.",
    category: "Fascinating History & Facts",
    readingTime: 5,
    publishDate: "2025-08-26",
    tags: ["Olfaction", "Nobel Prize", "History", "Neuroscience", "Genetics"],
    author: "Liam Seungjin Lee",
    images: {
        "buck": {
            url: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Dr_Linda_Buck_ForMemRS.jpg",
            caption: "Linda Buck in 2015.",
            source: "Wikimedia Commons"
        },
        "axel": {
            url: "https://upload.wikimedia.org/wikipedia/commons/4/49/Professor_Richard_Axel_ForMemRS.jpg",
            caption: "Richard Axel.",
            source: "Wikimedia Commons"
        }
    },
    content: `
**Compared to other senses, smell was the little brother. 

Vision had its own Nobel Prizes. Hearing had cochlear implants. But olfaction? No one even knew what the receptors looked like. 

Then, in a single landmark paper, two scientists significantly advanced the field of olfaction, and eventually walked into Stockholm.**

## The Problem Before 1991

By the 1980s, scientists knew some basic facts about smell. They knew that odorant molecules triggered electrical signals in the nose. They knew a specialized G-protein called **Gαolf** was involved (discovered by Randall Reed's lab in 1989) [1]. They knew that cyclic AMP surged when an odorant hit an olfactory neuron.

But the central question remained unanswered: **what are the actual receptors?** What protein sits on the surface of a smell neuron and grabs an odorant molecule?

Nobody had found one.

## The Breakthrough: A Needle-in-a-Haystack Strategy

**Linda Buck**, then a postdoctoral fellow in **Richard Axel's** lab at Columbia University, devised an elegant approach. Rather than trying to isolate a receptor protein directly — which had failed for years — she went after the **genes**.

:::image(buck)

Her logic was simple but powerful: if olfactory receptors were GPCRs (G-protein coupled receptors), they would share certain structural features at the DNA level. She could design molecular probes to fish for genes that (a) looked like GPCRs and (b) were expressed only in the olfactory epithelium, not elsewhere in the body.

In **1991**, Buck and Axel published their results in *Cell* [2]. What they found was staggering.

:::callout
**Fun Fact:** They uncovered a family of approximately **1,000 olfactory receptor genes** in rats — roughly **3% of the entire genome**. It was the largest gene family ever discovered in mammals. The idea that smell was a "minor" sense was demolished overnight.
:::

## What the Genes Revealed

The discovery opened a cascade of insights:

- **One neuron, one receptor.** Each olfactory sensory neuron expresses just a single receptor type out of the entire family. This was later confirmed through elegant gene-targeting work [3].

- **Convergent wiring.** All neurons expressing the same receptor send their axons to the same spot (glomerulus) in the olfactory bulb. This creates a spatial map of odorant information in the brain.

- **Combinatorial coding.** A single odorant activates multiple receptor types, and each receptor responds to multiple odorants. This mix-and-match logic explains how a few hundred receptors can encode thousands of distinct smells [4].

:::image(axel)

## The Road to Stockholm

After the 1991 paper, Buck and Axel went their separate ways. Axel stayed at Columbia. Buck moved to Harvard and later to the Fred Hutchinson Cancer Research Center in Seattle. They did not coauthor any primary research paper after the 1991 publication — yet both continued to build on the original discovery independently.

In **October 2004**, the Nobel Assembly at Karolinska Institutet announced that the Nobel Prize in Physiology or Medicine would go to Richard Axel and Linda Buck "for their discoveries of odorant receptors and the organisation of the olfactory system" [5].

## The Human Twist

There was one sobering footnote. In humans, roughly half of the ~800 olfactory receptor genes have become **pseudogenes** (broken copies that no longer produce functional proteins) [6]. We retain only about **400 working receptors**. (Dogs have closer to 800.)

This means evolution has been gradually dismantling our smell system, likely as vision became more dominant in primate life. Yet even with 400 receptors, the combinatorial code is powerful enough to distinguish a vast number of odors.

  `,
    sources: [
        {
            title: "Golf: an olfactory neuron specific-G protein involved in odorant signal transduction (Jones & Reed, 1989, Science)",
            url: "https://doi.org/10.1126/science.2499043"
        },
        {
            title: "A novel multigene family may encode odorant receptors (Buck & Axel, 1991, Cell)",
            url: "https://doi.org/10.1016/0092-8674(91)90418-X"
        },
        {
            title: "Visualizing an olfactory sensory map (Mombaerts et al., 1996, Cell)",
            url: "https://doi.org/10.1016/s0092-8674(00)81387-2"
        },
        {
            title: "Combinatorial receptor codes for odors (Malnic et al., 1999, Cell)",
            url: "https://doi.org/10.1016/S0092-8674(00)80581-4"
        },
        {
            title: "The Nobel Prize in Physiology or Medicine 2004 — Press Release",
            url: "https://www.nobelprize.org/prizes/medicine/2004/press-release/"
        },
        {
            title: "Evolution of the human olfactory receptor gene repertoire (Niimura & Nei, 2003, Proceedings of the National Academy of Sciences of the United States of America)",
            url: "https://doi.org/10.1073/pnas.1635157100"
        }
    ]
};
