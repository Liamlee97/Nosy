import { Article } from './types';

export const geneticVariationSmell: Article = {
    id: "genetic-variation-smell",
    title: "Why You Smell Differently Than Your Neighbor",
    excerpt: "Your genes help shape which odors you detect and how intense or pleasant they seem. But DNA is only one part of a highly personal sense of smell.",
    category: "Fascinating History & Facts",
    readingTime: 5,
    publishDate: "2026-05-01",
    tags: ["Olfaction", "Genetics", "Basic Science", "Perception"],
    author: "Liam Seungjin Lee",
    content: `
**Two people can encounter the same odor and describe it in strikingly different ways. One may find it intense and unpleasant; another may barely notice it; a third may describe it as relatively pleasant. Genetics helps explain part of that difference (but it is not the whole story).**

## A Remarkably Variable Gene Family

Humans have roughly 400 olfactory receptor (OR) genes that are intact in at least some people, alongside hundreds of OR pseudogenes, i.e. gene copies that do not produce a functional receptor protein [1][2]. The exact count depends on how genes and variants are classified, so it is better to think of the human OR repertoire as approximately 400 potentially functional receptors rather than as a fixed number shared identically by everyone.

Olfactory receptor genes are among the most variable gene families in the human genome. People differ in single-nucleotide variants, copy-number variation, and gene-disrupting mutations that can change whether an individual receptor responds normally to an odor molecule [1][2]. In other words, two healthy people may carry somewhat different sets of functional odor receptors.

That does not mean one person has a universally “better” nose than another. Smell perception depends on many factors beyond receptor genetics, including odor concentration, prior experience, attention, age, nasal inflammation, medications, smoking exposure, and how the brain interprets sensory input. But genetic variation can make a major difference for particular odorants.

## The Androstenone Story

One of the clearest examples involves **androstenone**, a steroidal odorant found in boar saliva and present in human body odor. It is also relevant to pork production because some people perceive high androstenone concentrations as part of “boar taint.”

In 2007, Andreas Keller, Leslie Vosshall, and colleagues linked variation in a single receptor gene, **OR7D4**, to differences in perception of androstenone and the related steroid androstadienone [3]. In cell experiments, the OR7D4 receptor responded selectively to these odorants. A common receptor variant containing two amino-acid substitutions showed markedly reduced function in vitro [3].

In human testing, people carrying the less functional OR7D4 variant were, on average, less sensitive to the steroid odorants and rated them as less unpleasant than participants with two copies of the more functional receptor form [3]. Importantly, the gene explained a meaningful share of the variation in odor intensity and pleasantness. Environment, experience, and other receptors still matter.

## Asparagus and Urine Odor

Asparagus provides another familiar example of individual variation. After asparagus ingestion, sulfur-containing metabolites can appear in urine and create a distinctive odor. Some people notice it readily; others report little or no odor.

The question is more complicated than it first appears. Individual differences may arise both from **production** of odor-active metabolites and from **perception** of them. A psychophysical and genetic study found that reduced ability to detect the characteristic urine odor after asparagus ingestion was associated with a single-nucleotide variant near the olfactory receptor gene **OR2M7** [4].

This is therefore a useful illustration of odor-specific variation, but it should not be described as proof that people are simply “missing the one receptor” for asparagus urine. Human odor mixtures are chemically complex, and receptor biology rarely maps as neatly onto one everyday smell as a single-gene cartoon suggests.

## Specific Anosmias and Their Limits

A **specific anosmia** is a selective inability, or marked reduction in ability, to perceive a particular odorant despite otherwise broadly intact smell function. These odor-specific differences can be influenced by receptor-gene variation.

A particularly striking case is **β-ionone**, a violet-like fragrance compound found in flowers and used in foods and perfumes. Variation in the receptor gene **OR5A1** strongly influences β-ionone sensitivity. In one study, a variant encoding an N183D amino-acid substitution explained more than 96% of the observed variation in the measured phenotype, making it an unusually clear example of an odor trait with near-Mendelian behavior [5].

Not every variation in smell perception has such a simple explanation. For many odorants, the relevant biology can involve multiple receptors, odor concentration, trigeminal stimulation, learning, and context. It is more accurate to say that receptor genetics is one important contributor than to attribute every difference directly to a single OR gene.

## Your Personal Odor World

Each odor is usually represented by a pattern of activity across multiple receptors, and each person brings a somewhat different receptor repertoire to that pattern. This helps explain why people can disagree about an odor's intensity, quality, or pleasantness without either person being wrong.

Some of these differences may be subtle enough to pass unnoticed. You may be less sensitive to a molecule that a friend finds overwhelming, while being highly sensitive to another odor that barely registers for them. Because smell is a subjective experience, there is no simple way to compare two people's internal odor worlds directly.

:::callout
**An imperfect analogy:** Specific anosmias are sometimes compared with color-vision differences: if an odorant produces little or no signal in your receptor system, you may not realize that someone else experiences it as vivid or intense. The analogy is helpful, but smell is usually more complex because most real-world odors are mixtures rather than single molecules.
:::

## Why It Matters

Genetic variation in olfactory receptors matters in research because it can contribute to participant-to-participant differences in psychophysical studies. It also has practical relevance to food flavor, fragrance design, and odor exposure in workplaces. However, receptor genotype alone cannot predict all of a person's odor preferences or their overall ability to smell.

The most accurate takeaway is not that every person lives in a completely separate sensory universe. It is that each person experiences a partly individualized olfactory world, shaped by receptor genetics and continuously modified by biology, environment, culture, memory, and experience.
  `,
    sources: [
        {
            title: "Genetic Variation across the Human Olfactory Receptor Repertoire Alters Odor Perception (Trimmer et al., 2019, Proceedings of the National Academy of Sciences)",
            url: "https://doi.org/10.1073/pnas.1804106115"
        },
        {
            title: "Different Noses for Different People (Menashe et al., 2003, Nature Genetics)",
            url: "https://doi.org/10.1038/ng1160"
        },
        {
            title: "Genetic Variation in a Human Odorant Receptor Alters Odour Perception (Keller et al., 2007, Nature)",
            url: "https://doi.org/10.1038/nature06162"
        },
        {
            title: "Excretion and Perception of a Characteristic Odor in Urine after Asparagus Ingestion: A Psychophysical and Genetic Study (Pelchat et al., 2011, Chemical Senses)",
            url: "https://doi.org/10.1093/chemse/bjq081"
        },
        {
            title: "A Mendelian Trait for Olfactory Sensitivity Affects Odor Experience and Food Selection (Jaeger et al., 2013, Current Biology)",
            url: "https://doi.org/10.1016/j.cub.2013.07.030"
        }
    ]
};
