import { Article } from './types';

export const geneticVariationSmell: Article = {
    id: "genetic-variation-smell",
    title: "Why You Smell Differently Than Your Neighbor",
    excerpt: "Your sense of smell is shaped by your DNA. Genetic variation in olfactory receptor genes means everyone lives in a slightly different olfactory world.",
    category: "Fascinating History & Facts",
    readingTime: 4,
    publishDate: "2026-04-07",
    tags: ["Olfaction", "Genetics", "Basic Science", "Perception"],
    author: "Liam Seungjin Lee",
    content: `
**Two people can sniff the exact same molecule and have completely different experiences. One finds it pleasant. The other finds it repulsive. A third can't smell it at all. Why? The answer is in their DNA.**

## The Most Variable Gene Family

Humans have approximately 400 functional olfactory receptor (OR) genes and another ~400 that are pseudogenes (broken copies). But here's what makes things interesting: there is enormous genetic variation *between individuals* in these genes [1].

Some people have functional versions of a given OR gene. Others have a variant that's less sensitive. Others have a variant that doesn't work at all. Across the population, the set of working olfactory receptors is not identical from person to person.

This means everyone has slightly different "smell hardware." You and your neighbor are literally smelling the world through different molecular toolkits.

## The Androstenone Story

The most well-studied example involves a molecule called **androstenone**, a steroid found in pork and in human sweat.

In **2007**, **Andreas Keller** and **Leslie Vosshall** at Rockefeller University showed that perception of androstenone is largely determined by variants in a single receptor gene: **OR7D4** [2].

People with two functional copies of OR7D4 tend to find androstenone offensive. It smells like stale urine or sweat. People with certain variants of OR7D4 perceive it as pleasant, or sweet, or faint. And some can't detect it at all.

:::callout
**The scale of the difference:** Among participants in Keller and Vosshall's study, some rated androstenone as intensely disgusting. Others rated the exact same concentration as mildly pleasant. Same molecule, same dose, completely different experience. The difference was genetic.
:::

## Asparagus and Your Urine

Another familiar example: asparagus. After eating asparagus, a metabolite called **methanethiol** (and related sulfur compounds) appears in the urine of most people. The distinctive smell is unmistakable. Or is it?

A **2016 study by Pelchat et al.** found that roughly 40% of people cannot smell the asparagus metabolite in urine [3]. This is a specific anosmia, a selective inability to detect one particular odorant. The individuals who can't smell it aren't generally less sensitive. They're missing the specific receptor or receptor variant needed to detect that compound.

## How Many Specific Anosmias Are There?

Quite a few. Specific anosmias have been documented for many odorants, including:

**Musk compounds.** About 7% of people have reduced sensitivity to large macrocyclic musks.

**Isovaleric acid.** The smell of sweaty feet. Some people can barely detect it.

**Beta-ionone.** The floral, violet-like scent found in many flowers. Sensitivity varies widely across populations [4].

In each case, the variation traces back to differences in OR genes. These aren't diseases. They're normal human genetic variation, like eye color or height. But they affect something deeply personal: how you experience the world through smell.

## The "Odor Blindness" Pattern

Each person carries their own unique mosaic of working and non-working olfactory receptors. This means each person has their own pattern of **specific anosmias**, subtle gaps in their olfactory perception that they may never even notice.

You might be unable to detect a molecule that your friend finds overpowering. And neither of you would know, because you have no way to directly compare your subjective experiences.

:::callout
**A thought experiment:** Imagine if 10% of the population couldn't see the color green. They wouldn't know they were missing it. Green would simply not be part of their visual world. Specific anosmias work the same way. You can't miss what you've never perceived.
:::

## Why This Matters

Genetic variation in olfactory receptors has practical consequences. It affects food preferences, perfume choices, and even occupational suitability (think wine tasting, food science, or quality control). It also complicates olfactory research, because what one subject perceives in a study may differ dramatically from what another subject perceives.

Understanding this variation is essential for anyone trying to build a science of smell. The sense of smell isn't universal. It's personal.
  `,
    sources: [
        {
            title: "Population variation in human olfactory receptor genes (Menashe et al., 2003, Human Genetics)",
            url: "https://doi.org/10.1007/s00439-003-0926-2"
        },
        {
            title: "A psychophysical test of the vibration theory of olfaction and genetic variation in OR7D4 (Keller et al., 2007, Nature)",
            url: "https://doi.org/10.1038/nature06162"
        },
        {
            title: "Sniffing out the asparagus metabolite (Pelchat et al., 2011, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/bjq081"
        },
        {
            title: "Genetic variation in beta-ionone sensitivity (Jaeger et al., 2013, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/bjs138"
        }
    ]
};
